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
    }
}
