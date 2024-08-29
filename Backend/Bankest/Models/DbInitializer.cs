using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Bankest.Models;
using System.Threading.Tasks;
using static Bankest.Util.Util;

public static class DbInitializer
{
    public static async Task Initialize(StoreContext context, UserManager<Usuario> userManager, RoleManager<IdentityRole<Guid>> roleManager)
    {
        // Aplica todas las migraciones pendientes
        await context.Database.MigrateAsync();

        // Crear roles si no existen
        string[] roleNames = { "Cliente", "Empresa", "Administrador" };
        foreach (var roleName in roleNames)
        {
            var roleExist = await roleManager.RoleExistsAsync(roleName);
            if (!roleExist)
            {
                await roleManager.CreateAsync(new IdentityRole<Guid> { Id = Guid.NewGuid(), Name = roleName, NormalizedName = roleName.ToUpper() });
            }
        }

        // Verifica si ya existen usuarios o si es necesario agregar datos iniciales
        if (!context.Usuarios.Any())
        {
            // Crear usuarios con sus roles basados en TipoUsuario
            var usuario1 = new Usuario
            {
                UserName = "juan.perez@example.com",
                NormalizedUserName = "JUAN.PEREZ@EXAMPLE.COM",
                Email = "juan.perez@example.com",
                NormalizedEmail = "JUAN.PEREZ@EXAMPLE.COM",
                EmailConfirmed = true,
                Nombre = "Juan",
                PhoneNumber = "123456789",
                ApellidoPaterno = "Perez",
                ApellidoMaterno = "Perez",
                TipoUsuario = TipoUsuario.Cliente
            };

            var usuario2 = new Usuario
            {
                UserName = "ana.gomez@example.com",
                NormalizedUserName = "ANA.GOMEZ@EXAMPLE.COM",
                Email = "ana.gomez@example.com",
                NormalizedEmail = "ANA.GOMEZ@EXAMPLE.COM",
                EmailConfirmed = true,
                Nombre = "Ana",
                PhoneNumber = "987654321",
                ApellidoPaterno = "Gómez",
                ApellidoMaterno = "Gómez",
                TipoUsuario = TipoUsuario.Empresa
            };

            // Crear los usuarios con Identity y establecer sus contraseñas
            var result1 = await userManager.CreateAsync(usuario1, "Password123@");
            var result2 = await userManager.CreateAsync(usuario2, "Password456@");

            // Verifica si los usuarios se crearon exitosamente
            if (result1.Succeeded && result2.Succeeded)
            {
                // Asignar roles basados en TipoUsuario
                await userManager.AddToRoleAsync(usuario1, usuario1.TipoUsuario.ToString());
                await userManager.AddToRoleAsync(usuario2, usuario2.TipoUsuario.ToString());

                // Agregar cuentas bancarias después de que los usuarios se hayan creado
                var cuentaBancaria1 = new CuentaBancaria
                {
                    Id = Guid.NewGuid(),
                    NumeroCuenta = "000123456",
                    Saldo = 5000.00m,
                    TipoCuenta = TipoCuenta.Ahorros,
                    UsuarioId = usuario1.Id // UsuarioId ahora existe
                };

                var cuentaBancaria2 = new CuentaBancaria
                {
                    Id = Guid.NewGuid(),
                    NumeroCuenta = "000654321",
                    Saldo = 15000.00m,
                    TipoCuenta = TipoCuenta.Corriente,
                    UsuarioId = usuario2.Id // UsuarioId ahora existe
                };

                context.CuentasBancarias.AddRange(cuentaBancaria1, cuentaBancaria2);

                // Agregar transacciones y calendarios de pago después de crear cuentas bancarias
                var transaccion1 = new Transaccion
                {
                    Id = Guid.NewGuid(),
                    Fecha = DateTime.UtcNow,
                    Monto = 100.00m,
                    TipoTransaccion = TipoTransaccion.Deposito,
                    CuentaOrigenId = cuentaBancaria1.Id,
                    CuentaDestinoId = cuentaBancaria2.Id
                };

                var transaccion2 = new Transaccion
                {
                    Id = Guid.NewGuid(),
                    Fecha = DateTime.UtcNow,
                    Monto = 50.00m,
                    TipoTransaccion = TipoTransaccion.Retiro,
                    CuentaOrigenId = cuentaBancaria1.Id,
                    CuentaDestinoId = cuentaBancaria1.Id
                };

                context.Transacciones.AddRange(transaccion1, transaccion2);

                var calendarioPago = new CalendarioPago
                {
                    Id = Guid.NewGuid(),
                    NombrePago = "Pago de Servicio de Internet",
                    FechaProgramada = DateTime.UtcNow.AddMonths(1),
                    Monto = 60.00m,
                    Recurrente = true,
                    Frecuencia = "Mensual",
                    CuentaBancariaId = cuentaBancaria1.Id
                };

                context.CalendariosPago.Add(calendarioPago);

                var inversion = new Inversion
                {
                    Id = Guid.NewGuid(),
                    NombreInversion = "Fondo de Inversión ABC",
                    MontoInvertido = 1000.00m,
                    FechaInicio = DateTime.UtcNow.AddMonths(-6),
                    FechaVencimiento = DateTime.UtcNow.AddYears(1),
                    RendimientoEsperado = 1200.00m,
                    UsuarioId = usuario1.Id
                };

                context.Inversiones.Add(inversion);

                // Guarda los cambios en la base de datos
                await context.SaveChangesAsync();
            }
            else
            {
                // Manejar el caso en que la creación de usuarios falle
                // Registrar el error o tomar las medidas necesarias
            }
        }
    }
}
