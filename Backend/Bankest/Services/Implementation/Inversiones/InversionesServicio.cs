using Bankest.Models;
using Bankest.Services.Interfaces.IInversiones;
using Microsoft.EntityFrameworkCore;

namespace Bankest.Services.Implementation.Inversiones
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

        public async Task<Inversion> CrearInversionAsync(Inversion nuevaInversion, Guid cuentaId)
        {
            // Buscar la cuenta bancaria del usuario donde se sacará el dinero
            var cuenta = await _storeContext.CuentasBancarias
                .FirstOrDefaultAsync(c => c.Id == cuentaId && c.UsuarioId == nuevaInversion.UsuarioId);

            if (cuenta == null)
            {
                throw new InvalidOperationException("La cuenta bancaria no existe o no pertenece al usuario.");
            }

            // Verificar si el saldo es suficiente para realizar la inversión
            if (cuenta.Saldo < nuevaInversion.MontoInvertido)
            {
                throw new InvalidOperationException("Saldo insuficiente para realizar la inversión.");
            }

            // Descontar el saldo de la cuenta
            cuenta.Saldo -= nuevaInversion.MontoInvertido;

            // Guardar la nueva inversión
            _storeContext.Inversiones.Add(nuevaInversion);

            // Guardar cambios en la base de datos
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
