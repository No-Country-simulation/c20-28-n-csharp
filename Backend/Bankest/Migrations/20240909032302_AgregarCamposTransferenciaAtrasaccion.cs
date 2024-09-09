using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bankest.Migrations
{
    /// <inheritdoc />
    public partial class AgregarCamposTransferenciaAtrasaccion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApellidoMaternoDestinatario",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApellidoPaternoDestinatario",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CorreoDestinatario",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Mensaje",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NombreDestinatario",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TelefonoDestinatario",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UltimaFechaCalculoInteres",
                table: "CuentasBancarias",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApellidoMaternoDestinatario",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "ApellidoPaternoDestinatario",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "CorreoDestinatario",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "Mensaje",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "NombreDestinatario",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "TelefonoDestinatario",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "UltimaFechaCalculoInteres",
                table: "CuentasBancarias");
        }
    }
}
