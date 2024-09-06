namespace Bankest.DTOs.TransaccionesDTO
{

        public class TransferenciaDto
        {

            public Guid CuentaOrigenId { get; set; }
            public string NumeroCuentaDestino { get; set; }  // Número de cuenta del destinatario
            public string NombreDestinatario { get; set; }   // Nombre del destinatario
            public string ApellidoPaternoDestinatario { get; set; }
            public string ApellidoMaternoDestinatario { get; set; }
            public string? CorreoDestinatario { get; set; }
            public string? TelefonoDestinatario { get; set; }
            public decimal Monto { get; set; }
        

    }



}
