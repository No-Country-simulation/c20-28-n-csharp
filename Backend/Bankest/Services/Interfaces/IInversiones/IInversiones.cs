using Bankest.Models;

namespace Bankest.Services.Interfaces.IInversiones
{
    public interface IInversiones
    {

        Task<List<Inversion>> ObtenerInversionesPorUsuarioAsync(Guid usuarioId);
        Task<Inversion> CrearInversionAsync(Inversion nuevaInversion, Guid cuentaId);
        Task<bool> RetirarInversionAsync(Guid inversionId);
        Task<Inversion?> ObtenerInversionPorIdAsync(Guid inversionId);
    }
}
