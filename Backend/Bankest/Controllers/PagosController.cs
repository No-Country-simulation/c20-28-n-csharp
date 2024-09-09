using Bankest.DTOs.PagosDTO;
using Bankest.Models;
using Bankest.Services.Interfaces.IPagos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagosController : ControllerBase
    {

        private readonly StoreContext _storeContext;
        private readonly IPagoService _calendarioPagoService;

        public PagosController(StoreContext storeContext, IPagoService calendarioPagoService)
        {
            _storeContext = storeContext;
            _calendarioPagoService = calendarioPagoService;
        }

        [HttpPost("programar")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ProgramarPago([FromBody] ProgramarPagoDTO pagoDto)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var cuenta = await _storeContext.CuentasBancarias
                .FirstOrDefaultAsync(c => c.Id == pagoDto.CuentaBancariaId && c.UsuarioId == Guid.Parse(userId));

            if (cuenta == null)
            {
                return NotFound("Cuenta bancaria no encontrada o no pertenece al usuario.");
            }

            var nuevoPago = new CalendarioPago
            {
                Id = Guid.NewGuid(),
                NombrePago = pagoDto.NombrePago,
                FechaProgramada = pagoDto.FechaProgramada,
                Monto = pagoDto.Monto,
                Recurrente = pagoDto.Recurrente,
                Frecuencia = pagoDto.Frecuencia,
                CuentaBancariaId = cuenta.Id
            };

            var result = await _calendarioPagoService.ProgramarPagoAsync(nuevoPago);

            return Ok(result);
        }


        [HttpGet("programados")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ConsultarPagosProgramados()
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var pagos = await _calendarioPagoService.ObtenerPagosProgramadosAsync(Guid.Parse(userId));

            if (pagos == null || !pagos.Any())
            {
                return NotFound("No se encontraron pagos programados.");
            }

            return Ok(pagos);
        }

        [HttpDelete("programados/{id}")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CancelarPagoProgramado(Guid id)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var pago = await _calendarioPagoService.ObtenerPagoPorIdAsync(id);

            if (pago == null || pago.CuentaBancaria.UsuarioId.ToString() != userId)
            {
                return NotFound("Pago programado no encontrado o no pertenece al usuario actual.");
            }

            var result = await _calendarioPagoService.CancelarPagoAsync(id);

            if (!result)
            {
                return BadRequest("No se pudo cancelar el pago programado.");
            }

            return Ok("Pago programado cancelado correctamente.");
        }


    }
}
