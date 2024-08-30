using Bankest.Models;
using Bankest.Services.Interfaces.ICliente;

namespace Bankest.Services.Implementation.Cliente
{
    public class ClienteService : ICliente
    {
        private readonly StoreContext _storeContext;

        public ClienteService(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }



        public async Task<Usuario> ObtenerdatosClienteAsync(Guid clientId)
        {
            try
            {
                var cliente = _storeContext.Usuarios.FirstOrDefault(x => x.Id == clientId);
                return cliente;
            }
            catch (Exception ex)
            {
                throw new Exception("Fallo");
            }

            

        }
    }
}
