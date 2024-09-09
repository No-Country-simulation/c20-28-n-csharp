namespace Bankest.DTOs.InversionesDTO
{
    public class CrearInversionDto
    {
        public string NombreInversion { get; set; }
        public decimal MontoInvertido { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public decimal RendimientoEsperado { get; set; }
        public Guid CuentaId { get; set; }  // ID de la cuenta desde donde se tomará el dinero
    }
}
