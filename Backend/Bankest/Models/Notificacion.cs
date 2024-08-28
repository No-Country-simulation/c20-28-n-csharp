using static Bankest.Util.Util;

namespace Bankest.Models
{
    public class Notificacion
    {
        public Guid Id { get; set; }
        public DateTime Fecha { get; set; }
        public string Mensaje { get; set; }
        public TipoNotificacion TipoNotificacion { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
