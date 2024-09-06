using Bankest.DTOs.Cliente;

namespace Bankest.Controllers
{
    public class UsuarioDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string PhoneNumber { get; set; }
        public List<CuentaBancariaDto> CuentasBancarias { get; set; }
    }
}