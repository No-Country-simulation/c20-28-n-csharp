namespace Bankest.DTOs.TransaccionesDTO
{
    public class TransaccionDto
    {
        public Guid Id { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Monto { get; set; }
        public string NumeroCuentaOrigen { get; set; }
        public string NumeroCuentaDestino { get; set; }
    }
}
