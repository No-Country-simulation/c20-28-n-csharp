using Bankest.Models;

namespace Bankest.Services.Interfaces.ICliente
{
    public interface ICliente
    {
       Task<Usuario> ObtenerdatosClienteAsync(Guid clientId);
    }
}
