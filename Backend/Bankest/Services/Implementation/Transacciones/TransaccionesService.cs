using Bankest.DTOs.TransaccionesDTO;
using Bankest.Models;
using Bankest.Services.Interfaces.ITransacciones;
using Microsoft.EntityFrameworkCore;
using static Bankest.Util.Util;

namespace Bankest.Services.Implementation.Transacciones
{
    public class TransaccionesService : ITransaccionService
    {
        private readonly StoreContext _storeContext;
        public TransaccionesService(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }
        public async Task<bool> RealizarTransferenciaAsync(TransferenciaDto transferenciaDto, Guid usuarioId)
        {
            // Buscar la cuenta de origen del usuario autenticado
            var cuentaOrigen = await _storeContext.CuentasBancarias
                .FirstOrDefaultAsync(c => c.Id == transferenciaDto.CuentaOrigenId && c.UsuarioId == usuarioId);

            if (cuentaOrigen == null)
            {
                throw new InvalidOperationException("La cuenta de origen no existe o no pertenece al usuario.");
            }

            // Buscar la cuenta de destino por el número de cuenta
            var cuentaDestino = await _storeContext.CuentasBancarias
                .FirstOrDefaultAsync(c => c.NumeroCuenta == transferenciaDto.NumeroCuentaDestino);

            if (cuentaDestino == null)
            {
                throw new InvalidOperationException("La cuenta de destino no existe.");
            }

            //// Validar el nombre y apellidos del destinatario (si están presentes)
            //if (!string.IsNullOrEmpty(transferenciaDto.NombreDestinatario) &&
            //    (cuentaDestino.Usuario.Nombre != transferenciaDto.NombreDestinatario ||
            //     cuentaDestino.Usuario.ApellidoPaterno != transferenciaDto.ApellidoPaternoDestinatario ||
            //     cuentaDestino.Usuario.ApellidoMaterno != transferenciaDto.ApellidoMaternoDestinatario))
            //{
            //    throw new InvalidOperationException("El nombre o apellidos del destinatario no coinciden con los datos de la cuenta.");
            //}

            // Validar saldo suficiente en la cuenta de origen
            if (cuentaOrigen.Saldo < transferenciaDto.Monto)
            {
                throw new InvalidOperationException("Saldo insuficiente en la cuenta de origen.");
            }

            // Realizar la transferencia
            cuentaOrigen.Saldo -= transferenciaDto.Monto;
            cuentaDestino.Saldo += transferenciaDto.Monto;

            // Registrar la transacción con el mensaje opcional
            var transaccion = new Transaccion
            {
                Id = Guid.NewGuid(),
                Fecha = DateTime.UtcNow,
                Monto = transferenciaDto.Monto,
                TipoTransaccion = TipoTransaccion.Transferencia,
                CuentaOrigenId = cuentaOrigen.Id,
                CuentaDestinoId = cuentaDestino.Id,
                //NombreDestinatario = transferenciaDto.NombreDestinatario,
                //ApellidoPaternoDestinatario = transferenciaDto.ApellidoPaternoDestinatario,
                //ApellidoMaternoDestinatario = transferenciaDto.ApellidoMaternoDestinatario,
                //CorreoDestinatario = transferenciaDto.CorreoDestinatario,
                //TelefonoDestinatario = transferenciaDto.TelefonoDestinatario,
                //Mensaje = transferenciaDto.Mensaje // Mensaje opcional
            };

            _storeContext.Transacciones.Add(transaccion);

            // Guardar cambios en la base de datos
            await _storeContext.SaveChangesAsync();

            return true;
        }



        public async Task<List<Transaccion>> ObtenerHistorialTransaccionesAsync(Guid cuentaId, DateTime fechaInicio, DateTime fechaFin)
        {
            return await _storeContext.Transacciones
                .Where(t => t.CuentaOrigenId == cuentaId || t.CuentaDestinoId == cuentaId)
                .Where(t => t.Fecha >= fechaInicio && t.Fecha <= fechaFin)
                .OrderBy(t => t.Fecha)
                .ToListAsync();
        }


        public async Task<DetalleTransaccionDto> ObtenerDetallesTransaccionAsync(Guid transaccionId)
        {
            var transaccion = await _storeContext.Transacciones
                .Include(t => t.CuentaOrigen)
                .Include(t => t.CuentaDestino)
                .FirstOrDefaultAsync(t => t.Id == transaccionId);

            if (transaccion == null) return null;

            return new DetalleTransaccionDto
            {
                Id = transaccion.Id,
                Monto = transaccion.Monto,
                TipoTransaccion = transaccion.TipoTransaccion.ToString(),
                Fecha = transaccion.Fecha,
                CuentaOrigen = transaccion.CuentaOrigen.NumeroCuenta,
                CuentaDestino = transaccion.CuentaDestino.NumeroCuenta,
                //Mensaje = transaccion.Mensaje
            };
        }


    }
}
