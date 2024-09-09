namespace Bankest.DTOs
{
    public class DispositivoConfiableDto
    {
        public string DeviceId { get; set; } // Un identificador único generado en el frontend
        public string DeviceName { get; set; } // Ej: "iPhone", "Laptop"
    }
}
