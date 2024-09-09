using Bankest.DTOs.TransaccionesDTO;
using Bankest.Models;
using System.Threading.Tasks;

namespace Bankest.Services.Interfaces.ITransacciones
{
    public interface ITransaccionService
    {
        Task<bool> RealizarTransferenciaAsync(TransferenciaDto transferenciaDto, Guid usuarioId);
        Task<List<TransaccionDto>> ObtenerHistorialTransaccionesAsync(Guid cuentaId, DateTime fechaInicio, DateTime fechaFin);
        Task<DetalleTransaccionDto> ObtenerDetallesTransaccionAsync(Guid transaccionId);
    }
}