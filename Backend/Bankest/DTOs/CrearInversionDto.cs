namespace Bankest.DTOs
{
    public class CrearInversionDto
    {
        public string NombreInversion { get; set; }
        public decimal MontoInvertido { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public decimal RendimientoEsperado { get; set; }
    }
}
