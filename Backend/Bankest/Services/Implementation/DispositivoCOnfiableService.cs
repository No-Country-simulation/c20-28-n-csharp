using Bankest.Models;
using Bankest.Services.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace Bankest.Services.Implementation
{
    public class DispositivoCOnfiableService : IDispositivoCOnfiable
    {
        private readonly StoreContext _storeContext;
        public DispositivoCOnfiableService(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        public async Task<DispositivoConfiable> RegistrarDispositivoConfiableAsync(DispositivoConfiable dispositivo)
        {
            _storeContext.DispositivosConfiables.Add(dispositivo);
            await _storeContext.SaveChangesAsync();
            return dispositivo;
        }

        public async Task<List<DispositivoConfiable>> ObtenerDispositivosConfiablesAsync(Guid usuarioId)
        {
            return await _storeContext.DispositivosConfiables
                .Where(d => d.UsuarioId == usuarioId)
                .ToListAsync();
        }

        public async Task<bool> EliminarDispositivoConfiableAsync(Guid dispositivoId, Guid usuarioId)
        {
            var dispositivo = await _storeContext.DispositivosConfiables
                .FirstOrDefaultAsync(d => d.Id == dispositivoId && d.UsuarioId == usuarioId);

            if (dispositivo == null)
            {
                return false; // No se encontró el dispositivo
            }

            _storeContext.DispositivosConfiables.Remove(dispositivo);
            await _storeContext.SaveChangesAsync();
            return true;
        }


    }


}
