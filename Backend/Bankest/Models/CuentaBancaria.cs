using System;
using System.Collections.Generic;
using static Bankest.Util.Util;

namespace Bankest.Models
{
    public class CuentaBancaria
    {
        public Guid Id { get; set; }
        public string NumeroCuenta { get; set; }
        public decimal Saldo { get; set; }
        public TipoCuenta TipoCuenta { get; set; }
        public Guid UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public ICollection<Transaccion> TransaccionesOrigen { get; set; }
        public ICollection<Transaccion> TransaccionesDestino { get; set; }
        public ICollection<CalendarioPago> CalendariosPago { get; set; }
    }
}
