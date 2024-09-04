using System;

namespace Bankest.Models
{
    public class Inversion
    {
        public Guid Id { get; set; }
        public string NombreInversion { get; set; }
        public decimal MontoInvertido { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public decimal RendimientoEsperado { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
