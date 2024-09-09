using Bankest.DTOs;
using Bankest.Models;
using Bankest.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;


namespace Bankest.Controllers
{
    [Route("api/dispositivos")]
    [ApiController]
    public class DispositivoconfiableController : ControllerBase
    {
        private readonly StoreContext _storeContext;
        private readonly IDispositivoCOnfiable _dispositivoService;
        public DispositivoconfiableController(StoreContext storeContext, IDispositivoCOnfiable dispositivoService)
        {
            _storeContext = storeContext;
            _dispositivoService = dispositivoService;
        }

        [HttpPost("confiables")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> RegistrarDispositivoConfiable([FromBody] RegistrarDispositivoDto dispositivoDto)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var nuevoDispositivo = new DispositivoConfiable
            {
                Id = Guid.NewGuid(),
                NombreDispositivo = dispositivoDto.NombreDispositivo,
                DireccionMAC = dispositivoDto.DireccionMAC,
                FechaRegistro = DateTime.UtcNow,
                UsuarioId = Guid.Parse(userId)
            };

            var result = await _dispositivoService.RegistrarDispositivoConfiableAsync(nuevoDispositivo);
            return Ok(result);
        }

        [HttpGet("confiables")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ObtenerDispositivosConfiables()
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var dispositivos = await _dispositivoService.ObtenerDispositivosConfiablesAsync(Guid.Parse(userId));
            return Ok(dispositivos);
        }


        [HttpDelete("confiables/{id}")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> EliminarDispositivoConfiable(Guid id)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var result = await _dispositivoService.EliminarDispositivoConfiableAsync(id, Guid.Parse(userId));

            if (!result)
            {
                return NotFound("Dispositivo no encontrado.");
            }

            return Ok("Dispositivo eliminado.");
        }



    }
}
