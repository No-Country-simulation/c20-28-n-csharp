using Bankest.Models;
using Bankest.Services.Interfaces.ICliente;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class ClienteController : ControllerBase
    {
        private readonly StoreContext _storeContext;
        private readonly ICliente _cliente;
        
        public ClienteController(StoreContext storeContext, ICliente cliente)
        {
            _storeContext = storeContext;
            _cliente = cliente; 
        }


        [HttpGet]
        public async Task<IActionResult> GetDatosUsuarioAsync(Guid idUsuario)
        {
            return Ok(await _cliente.ObtenerdatosClienteAsync(idUsuario));
            
        }

    }
}
