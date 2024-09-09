using Bankest.Models;
using static Bankest.Util.Util;

namespace Bankest.Services.Implementation.Transacciones
{
    public class InteresService
    {
        private const decimal TasaInteres = 0.01m; // 1% de interés

        public void AplicarIntereses(CuentaBancaria cuenta)
        {
            if (cuenta.TipoCuenta == TipoCuenta.Ahorros)
            {
                // Calcular el número de días desde el último cálculo de intereses
                var diasDesdeUltimoCalculo = (DateTime.UtcNow - cuenta.UltimaFechaCalculoInteres).Days;

                if (diasDesdeUltimoCalculo > 0)
                {
                    // Aplicar el interés al saldo de la cuenta
                    cuenta.Saldo += cuenta.Saldo * TasaInteres * diasDesdeUltimoCalculo;
                    cuenta.UltimaFechaCalculoInteres = DateTime.UtcNow; // Actualizar la fecha del último cálculo de intereses
                }
            }
        }
    }
}
