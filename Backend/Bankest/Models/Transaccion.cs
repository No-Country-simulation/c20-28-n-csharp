using System;
using static Bankest.Util.Util;

namespace Bankest.Models
{
    public class Transaccion
    {
        public Guid Id { get; set; }
        public DateTime Fecha { get; set; }
        public decimal Monto { get; set; }
        public TipoTransaccion TipoTransaccion { get; set; }
        public Guid CuentaOrigenId { get; set; }
        public CuentaBancaria CuentaOrigen { get; set; }
        public Guid CuentaDestinoId { get; set; }
        public CuentaBancaria CuentaDestino { get; set; }
        // Nuevas propiedades
        public string NombreDestinatario { get; set; }
        public string? ApellidoPaternoDestinatario { get; set; }
        public string? ApellidoMaternoDestinatario { get; set; }
        public string? CorreoDestinatario { get; set; }
        public string? TelefonoDestinatario { get; set; }
        public string? Mensaje { get; set; } // Mensaje opcional
                                           
        public string? AliasDestino { get; set; }  // Nuevo campo para guardar el alias de la cuenta destino
    }
}
