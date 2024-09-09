namespace Bankest.DTOs.TransaccionesDTO
{
    public class HistorialTransaccionesDto
    {
        public Guid CuentaId { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
    }
}
