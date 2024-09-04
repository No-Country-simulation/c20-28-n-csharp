using static Bankest.Util.Util;

namespace Bankest.DTOs.Cliente
{
    public class CrearCuentaBancariaDto
    {
        public string NumeroCuenta { get; set; }
        public decimal SaldoInicial { get; set; }
        public TipoCuenta TipoCuenta { get; set; } 
    }
}
