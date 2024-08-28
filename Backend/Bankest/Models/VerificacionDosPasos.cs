namespace Bankest.Models
{
    public class VerificacionDosPasos
    {
        public Guid Id { get; set; }
        public string Codigo { get; set; }
        public DateTime FechaEnvio { get; set; }
        public bool Verificado { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
