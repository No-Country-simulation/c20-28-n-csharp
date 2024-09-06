using Bankest.DTOs;
using Bankest.Models;
using Bankest.Services.Interfaces.IInversiones;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class InversionesController : ControllerBase
    {
        private readonly IInversiones _inversiones;
        public InversionesController(IInversiones inversiones)
        {
            _inversiones = inversiones;
        }

        [HttpGet("inversiones")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ObtenerInversiones()
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var inversiones = await _inversiones.ObtenerInversionesPorUsuarioAsync(Guid.Parse(userId));

            if (inversiones == null || !inversiones.Any())
            {
                return NotFound("No se encontraron inversiones activas.");
            }

            return Ok(inversiones);
        }


        [HttpPost("inversiones")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> CrearInversion([FromBody] CrearInversionDto inversionDto)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var nuevaInversion = new Inversion
            {
                Id = Guid.NewGuid(),
                NombreInversion = inversionDto.NombreInversion,
                MontoInvertido = inversionDto.MontoInvertido,
                FechaInicio = DateTime.UtcNow,
                FechaVencimiento = inversionDto.FechaVencimiento,
                RendimientoEsperado = inversionDto.RendimientoEsperado,
                UsuarioId = Guid.Parse(userId)
            };

            var result = await _inversiones.CrearInversionAsync(nuevaInversion);

            return Ok(result);
        }


        [HttpDelete("inversiones/{id}")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> RetirarInversion(Guid id)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var inversion = await _inversiones.ObtenerInversionPorIdAsync(id);

            if (inversion == null || inversion.UsuarioId.ToString() != userId)
            {
                return NotFound("Inversión no encontrada o no pertenece al usuario actual.");
            }

            var resultado = await _inversiones.RetirarInversionAsync(id);

            if (!resultado)
            {
                return BadRequest("No se pudo retirar la inversión.");
            }

            return Ok("Inversión retirada correctamente.");
        }



    }
}
