namespace Bankest.DTOs.PagosDTO
{
    public class ProgramarPagoDTO
    {
        public string NombrePago { get; set; }
        public DateTime FechaProgramada { get; set; }
        public decimal Monto { get; set; }
        public bool Recurrente { get; set; }
        public string Frecuencia { get; set; }  // Puede ser 'Diario', 'Semanal', 'Mensual', etc.
        public Guid CuentaBancariaId { get; set; }
    }
}
