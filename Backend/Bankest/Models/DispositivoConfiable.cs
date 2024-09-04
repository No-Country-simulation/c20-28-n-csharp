using System;

namespace Bankest.Models
{
    public class DispositivoConfiable
    {
        public Guid Id { get; set; }
        public string NombreDispositivo { get; set; }
        public string DireccionMAC { get; set; }
        public DateTime FechaRegistro { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
