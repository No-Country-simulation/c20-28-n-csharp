using Bankest.Models;

namespace Bankest.Services.Interfaces.IPagos
{
    public interface IPagoService
    {
        Task<CalendarioPago> ProgramarPagoAsync(CalendarioPago pago);
        Task<List<CalendarioPago>> ObtenerPagosProgramadosAsync(Guid usuarioId);
        Task<CalendarioPago?> ObtenerPagoPorIdAsync(Guid pagoId);
        Task<bool> CancelarPagoAsync(Guid pagoId);
    }
}
