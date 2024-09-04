using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Bankest.Controllers;
using Bankest.DTOs.Cliente;
using Bankest.Models;
using Bankest.Services.Interfaces.ICliente;
using Microsoft.EntityFrameworkCore;
using static Bankest.Util.Util;

namespace Bankest.Services.Implementation.Cliente
{
    public class ClienteService : IClienteService
    {
        private readonly StoreContext _storeContext;
        private readonly IHttpContextAccessor _contextAccessor;

        public ClienteService(StoreContext storeContext, IHttpContextAccessor contextAccessor)
        {
            _storeContext = storeContext;
            _contextAccessor = contextAccessor;
        }



        public async Task<Usuario?> ObtenerdatosClienteAsync(Guid clientId)
        {
            //try
            //{
            //    //var cliente = await _storeContext.CuentasBancarias.Include(x => x.Id).Where(u)
            //    return cliente;
            //}
            //catch (Exception ex)
            //{
            //    throw new Exception("Fallo");
            //}

            throw new NotImplementedException();

        }

        public async Task<List<CuentaBancariaDto>> ObtenerCuentasBancariasAsync(string userId)
        {
            // Obtener las cuentas bancarias asociadas al usuario actual
            var cuentas = await _storeContext.CuentasBancarias
                .Include(c => c.Usuario) // Incluir el usuario
                .Where(c => c.UsuarioId.ToString() == userId)
                .Select(c => new CuentaBancariaDto
                {
                    Id = c.Id,
                    NumeroCuenta = c.NumeroCuenta,
                    Saldo = c.Saldo,
                    TipoCuenta = c.TipoCuenta,
                    Usuario = new UsuarioDto
                    {
                        UserName = c.Usuario.UserName,
                        Email = c.Usuario.Email,
                        Nombre = c.Usuario.Nombre,
                        ApellidoPaterno = c.Usuario.ApellidoPaterno,
                        ApellidoMaterno = c.Usuario.ApellidoMaterno,
                        PhoneNumber = c.Usuario.PhoneNumber
                    }
                }).ToListAsync();

            return cuentas;
        }

        public async Task<CuentaBancaria> CrearCuentaBancariaAsync(Guid usuarioId, CrearCuentaBancariaDto nuevaCuentaDto)
        {
            // Validar que el tipo de cuenta sea válido
            if (!Enum.IsDefined(typeof(TipoCuenta), nuevaCuentaDto.TipoCuenta))
            {
                throw new ArgumentException("El tipo de cuenta proporcionado no es válido.");
            }

            // Verificar cuántas cuentas del mismo tipo tiene el usuario
            var cuentasDelMismoTipo = await _storeContext.CuentasBancarias
                .Where(c => c.UsuarioId == usuarioId && c.TipoCuenta == nuevaCuentaDto.TipoCuenta)
                .CountAsync();

            if (cuentasDelMismoTipo > 1)
            {
                throw new InvalidOperationException("El usuario no puede tener más de dos cuentas del mismo tipo.");
            }

            // 
            var nuevaCuenta = new CuentaBancaria
            {
                Id = Guid.NewGuid(),
                NumeroCuenta = nuevaCuentaDto.NumeroCuenta,
                Saldo = nuevaCuentaDto.SaldoInicial,
                TipoCuenta = nuevaCuentaDto.TipoCuenta,
                UsuarioId = usuarioId
            };

            _storeContext.CuentasBancarias.Add(nuevaCuenta);
            await _storeContext.SaveChangesAsync();

            return nuevaCuenta;
        }


        public async Task<(bool exito, string mensaje)> EliminarCuentaAsync(Guid cuentaId, Guid usuarioId)
        {
            // Buscar la cuenta bancaria que pertenece al usuario autenticado
            var cuenta = await _storeContext.CuentasBancarias
                .FirstOrDefaultAsync(c => c.Id == cuentaId && c.UsuarioId == usuarioId);

            if (cuenta == null)
            {
                return (false, "No se encontró la cuenta bancaria o no pertenece al usuario actual.");
            }

            // Verificar si la cuenta tiene saldo
            if (cuenta.Saldo > 0)
            {
                return (false, "La cuenta bancaria no se puede eliminar porque aún tiene saldo.");
            }

            // Eliminar la cuenta bancaria
            _storeContext.CuentasBancarias.Remove(cuenta);
            await _storeContext.SaveChangesAsync();

            return (true, "La cuenta bancaria ha sido eliminada correctamente.");
        }






    }
}
