using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Bankest.DTOs.Cliente;
using Bankest.Models;
using Bankest.Services.Interfaces.ICliente;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = "Bearer")]
    public class ClienteController : ControllerBase
    {
       
        private readonly IClienteService _cliente ;
        
        
        public ClienteController(StoreContext storeContext, IClienteService cliente)
        {
            
            _cliente = cliente;
          
        }


        [HttpGet("{idUsuario:guid}", Name = "GetCliente")]
        public async Task<ActionResult<UsuarioDto>> GetDatosUsuarioAsync(Guid idUsuario)
        {
            var usuario = _cliente.ObtenerdatosClienteAsync(idUsuario);
            return Ok(usuario);

        }

        [HttpGet("GetCuentas")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<ActionResult<List<CuentaBancaria>>> GetCuentasClienteAsync()
        {
            // Obtener el ID del usuario autenticado directamente desde el User
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("No se pudo obtener el usuario autenticado.");
            }

            // Obtener las cuentas bancarias asociadas al usuario actual
            var cuentas = await _cliente.ObtenerCuentasBancariasAsync(userId);

            if (cuentas == null || cuentas.Count == 0)
            {
                return NotFound("No se encontraron cuentas bancarias para el usuario actual.");
            }

            return Ok(cuentas);

        }


        [HttpPost("CreaCuentaBancaria")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CrearCuentaBancaria([FromBody] CrearCuentaBancariaDto nuevaCuentaDto)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("No se pudo obtener el usuario autenticado.");
            }

            try
            {
                var cuenta = await _cliente.CrearCuentaBancariaAsync(Guid.Parse(userId), nuevaCuentaDto);
                return CreatedAtAction(nameof(CrearCuentaBancaria), new { id = cuenta.Id }, cuenta);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> EliminarCuenta(Guid id)
        {
            // Obtener el ID del usuario autenticado
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("No se pudo obtener el usuario autenticado.");
            }

            // Intentar eliminar la cuenta bancaria
            var (exito, mensaje) = await _cliente.EliminarCuentaAsync(id, Guid.Parse(userId));

            if (!exito)
            {
                return BadRequest(mensaje);
            }

            return Ok(mensaje);
        }
    }
}
