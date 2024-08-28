namespace Bankest.Models
{
    public class SesionActiva
    {
        public Guid Id { get; set; }
        public string DireccionIP { get; set; }
        public string Dispositivo { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaExpiracion { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
