using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using static Bankest.Util.Util;

namespace Bankest.Models
{
    public class StoreContext : IdentityDbContext<Usuario, IdentityRole<Guid>, Guid>
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public DbSet<CalendarioPago> CalendariosPago { get; set; }
        public DbSet<CuentaBancaria> CuentasBancarias { get; set; }
        public DbSet<DispositivoConfiable> DispositivosConfiables { get; set; }
        public DbSet<HistorialAcceso> HistorialesAcceso { get; set; }
        public DbSet<Inversion> Inversiones { get; set; }
        public DbSet<Notificacion> Notificaciones { get; set; }
        public DbSet<SesionActiva> SesionesActivas { get; set; }
        public DbSet<Transaccion> Transacciones { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<VerificacionDosPasos> VerificacionesDosPasos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CuentaBancaria>()
                .HasMany(cb => cb.TransaccionesOrigen)
                .WithOne(t => t.CuentaOrigen)
                .HasForeignKey(t => t.CuentaOrigenId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<CuentaBancaria>()
                .HasMany(cb => cb.TransaccionesDestino)
                .WithOne(t => t.CuentaDestino)
                .HasForeignKey(t => t.CuentaDestinoId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.CuentasBancarias)
                .WithOne(cb => cb.Usuario)
                .HasForeignKey(cb => cb.UsuarioId);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.Notificaciones)
                .WithOne(n => n.Usuario)
                .HasForeignKey(n => n.UsuarioId);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.VerificacionesDosPasos)
                .WithOne(v => v.Usuario)
                .HasForeignKey(v => v.UsuarioId);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.HistorialAccesos)
                .WithOne(h => h.Usuario)
                .HasForeignKey(h => h.UsuarioId);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.DispositivosConfiables)
                .WithOne(dc => dc.Usuario)
                .HasForeignKey(dc => dc.UsuarioId);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.SesionesActivas)
                .WithOne(sa => sa.Usuario)
                .HasForeignKey(sa => sa.UsuarioId);

            modelBuilder.Entity<CuentaBancaria>()
                .HasMany(cb => cb.CalendariosPago)
                .WithOne(cp => cp.CuentaBancaria)
                .HasForeignKey(cp => cp.CuentaBancariaId);

            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.Inversiones)
                .WithOne(i => i.Usuario)
                .HasForeignKey(i => i.UsuarioId);


            base.OnModelCreating(modelBuilder);
        }
    }
}
