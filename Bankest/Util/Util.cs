namespace Bankest.Util
{
    public class Util
    {
        public enum TipoUsuario
        {
            Cliente,
            Empresa,
            Administrador
        }

        public enum TipoCuenta
        {
            Ahorros,
            Corriente
        }

        public enum TipoTransaccion
        {
            Deposito,
            Retiro,
            Transferencia
        }

        public enum TipoNotificacion
        {
            AlertaSeguridad,
            TransaccionExitosa
        }
    }
}
