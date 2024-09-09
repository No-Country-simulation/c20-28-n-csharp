using Bankest.Models;

namespace Bankest.Services.Interfaces
{
    public interface IDispositivoCOnfiable
    {

        Task<DispositivoConfiable> RegistrarDispositivoConfiableAsync(DispositivoConfiable dispositivo);
        Task<List<DispositivoConfiable>> ObtenerDispositivosConfiablesAsync(Guid usuarioId);
        Task<bool> EliminarDispositivoConfiableAsync(Guid dispositivoId, Guid usuarioId);
    }
}
