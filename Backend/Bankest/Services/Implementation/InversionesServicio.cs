using Bankest.Models;
using Bankest.Services.Interfaces.IInversiones;
using Microsoft.EntityFrameworkCore;

namespace Bankest.Services.Implementation
{
    public class InversionesServicio : IInversiones
    {
        private readonly StoreContext _storeContext;

        public InversionesServicio(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }


        public async Task<List<Inversion>> ObtenerInversionesPorUsuarioAsync(Guid usuarioId)
        {
            return await _storeContext.Inversiones
                .Where(i => i.UsuarioId == usuarioId)
                .ToListAsync();
        }

        public async Task<Inversion> CrearInversionAsync(Inversion nuevaInversion)
        {
            _storeContext.Inversiones.Add(nuevaInversion);
            await _storeContext.SaveChangesAsync();
            return nuevaInversion;
        }

        public async Task<Inversion?> ObtenerInversionPorIdAsync(Guid inversionId)
        {
            return await _storeContext.Inversiones
                .FirstOrDefaultAsync(i => i.Id == inversionId);
        }

        public async Task<bool> RetirarInversionAsync(Guid inversionId)
        {
            var inversion = await ObtenerInversionPorIdAsync(inversionId);

            if (inversion == null)
            {
                return false;
            }

            _storeContext.Inversiones.Remove(inversion);
            await _storeContext.SaveChangesAsync();

            return true;
        }


    }
}
