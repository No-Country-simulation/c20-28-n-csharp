namespace Bankest.DTOs.TransaccionesDTO
{
    public class DetalleTransaccionDto
    {
        public Guid Id { get; set; }
        public decimal Monto { get; set; }
        public string TipoTransaccion { get; set; }
        public DateTime Fecha { get; set; }
        public string CuentaOrigen { get; set; }
        public string CuentaDestino { get; set; }
        public string? Mensaje { get; set; }
    }
}
