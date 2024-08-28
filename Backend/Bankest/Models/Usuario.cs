using Microsoft.AspNetCore.Identity;
using static Bankest.Util.Util;

namespace Bankest.Models
{
    public class Usuario :IdentityUser<Guid>
    {
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public TipoUsuario TipoUsuario { get; set; }

        public ICollection<CuentaBancaria> CuentasBancarias { get; set; }
        public ICollection<Notificacion> Notificaciones { get; set; }
        public ICollection<VerificacionDosPasos> VerificacionesDosPasos { get; set; }
        public ICollection<HistorialAcceso> HistorialAccesos { get; set; }
        public ICollection<DispositivoConfiable> DispositivosConfiables { get; set; }
        public ICollection<SesionActiva> SesionesActivas { get; set; }
        public ICollection<CalendarioPago> CalendariosPago { get; set; }
        public ICollection<Inversion> Inversiones { get; set; }
    }
}
