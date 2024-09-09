using Bankest.DTOs.TransaccionesDTO;
using Bankest.Models;
using Bankest.Services.Interfaces.ITransacciones;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransaccionesController : ControllerBase
    {
        private readonly ITransaccionService _transaccionService;
        private readonly StoreContext _storeContext;

        public TransaccionesController(ITransaccionService transaccionService, StoreContext storeContext)
        {
            _transaccionService = transaccionService;
            _storeContext = storeContext;
        }


        [HttpPost("transferencia")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> RealizarTransferencia([FromBody] TransferenciaDto transferenciaDto)
        {
            // Obtener el ID del usuario autenticado
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("No se pudo obtener el usuario autenticado.");
            }

            // Realizar la transferencia
            try
            {
                var resultado = await _transaccionService.RealizarTransferenciaAsync(transferenciaDto, Guid.Parse(userId));
                if (resultado)
                {
                    return Ok("Transferencia realizada con éxito.");
                }
                else
                {
                    return BadRequest("Hubo un problema al realizar la transferencia.");
                }
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("historial")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ObtenerHistorialTransacciones([FromQuery] HistorialTransaccionesDto filtro)
        {
            // Obtener el ID del usuario autenticado
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("No se pudo obtener el usuario autenticado.");
            }

            // Validar si el usuario tiene acceso a la cuenta bancaria
            var cuenta = await _storeContext.CuentasBancarias
                .FirstOrDefaultAsync(c => c.Id == filtro.CuentaId && c.UsuarioId.ToString() == userId);

            if (cuenta == null)
            {
                return NotFound("No se encontró la cuenta bancaria.");
            }

            // Obtener el historial de transacciones en el rango de fechas
            var historialDto = await _transaccionService.ObtenerHistorialTransaccionesAsync(filtro.CuentaId, filtro.FechaInicio, filtro.FechaFin);

            if (historialDto == null || !historialDto.Any())
            {
                return NotFound("No se encontraron transacciones en el rango de fechas especificado.");
            }

            return Ok(historialDto);
        }



        [HttpGet("{id}")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ObtenerDetallesTransaccion(Guid id)
        {
            // Obtener el ID del usuario autenticado
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("No se pudo obtener el usuario autenticado.");
            }

            // Obtener los detalles de la transacción
            var transaccion = await _transaccionService.ObtenerDetallesTransaccionAsync(id);

            if (transaccion == null)
            {
                return NotFound("No se encontró la transacción.");
            }

            return Ok(transaccion);
        }
    }
}
