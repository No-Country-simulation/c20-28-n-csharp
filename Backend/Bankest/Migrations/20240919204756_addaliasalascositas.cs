using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bankest.Migrations
{
    /// <inheritdoc />
    public partial class addaliasalascositas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AliasDestino",
                table: "Transacciones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Alias",
                table: "CuentasBancarias",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AliasDestino",
                table: "Transacciones");

            migrationBuilder.DropColumn(
                name: "Alias",
                table: "CuentasBancarias");
        }
    }
}
