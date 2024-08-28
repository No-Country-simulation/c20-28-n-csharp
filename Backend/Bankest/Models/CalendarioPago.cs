namespace Bankest.Models
{
    public class CalendarioPago
    {
        public Guid Id { get; set; }
        public string NombrePago { get; set; }
        public DateTime FechaProgramada { get; set; }
        public decimal Monto { get; set; }
        public bool Recurrente { get; set; }
        public string Frecuencia { get; set; }
        public Guid CuentaBancariaId { get; set; }
        public CuentaBancaria CuentaBancaria { get; set; }
    }
}
