namespace Bankest.Models
{
    public class HistorialAcceso
    {
        public Guid Id { get; set; }
        public DateTime FechaAcceso { get; set; }
        public string DireccionIP { get; set; }
        public bool AccesoExitoso { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
