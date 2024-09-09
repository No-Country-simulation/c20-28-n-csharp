using Bankest.Models;
using Bankest.Services.Interfaces.IPagos;
using Microsoft.EntityFrameworkCore;

namespace Bankest.Services.Implementation.Pagos
{
    public class PagosService : IPagoService
    {
        private readonly StoreContext _storeContext;
        public PagosService(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        public async Task<CalendarioPago> ProgramarPagoAsync(CalendarioPago pago)
        {
            _storeContext.CalendariosPago.Add(pago);
            await _storeContext.SaveChangesAsync();
            return pago;
        }

        public async Task<List<CalendarioPago>> ObtenerPagosProgramadosAsync(Guid usuarioId)
        {
            return await _storeContext.CalendariosPago
                .Include(p => p.CuentaBancaria)
                .Where(p => p.CuentaBancaria.UsuarioId == usuarioId)
                .ToListAsync();
        }

        public async Task<CalendarioPago?> ObtenerPagoPorIdAsync(Guid pagoId)
        {
            return await _storeContext.CalendariosPago
                .FirstOrDefaultAsync(p => p.Id == pagoId);
        }

        public async Task<bool> CancelarPagoAsync(Guid pagoId)
        {
            var pago = await ObtenerPagoPorIdAsync(pagoId);

            if (pago == null)
            {
                return false;
            }

            _storeContext.CalendariosPago.Remove(pago);
            await _storeContext.SaveChangesAsync();

            return true;
        }


    }
}
