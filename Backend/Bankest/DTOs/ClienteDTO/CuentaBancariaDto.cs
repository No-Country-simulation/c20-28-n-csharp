using Bankest.Controllers;

namespace Bankest.DTOs.Cliente;

public class CuentaBancariaDto
{
    public Guid Id { get; set; }
    public string NumeroCuenta { get; set; }
    public decimal Saldo { get; set; }
    public Util.Util.TipoCuenta TipoCuenta { get; set; }
    public UsuarioDto Usuario { get; set; } // Relacionar con UsuarioDto
}