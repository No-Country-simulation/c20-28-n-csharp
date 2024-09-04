using static Bankest.Util.Util;

namespace Bankest.DTOs
{
    public class RegisterDto
    {
        public string UserName { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Password { get; set; }
        public string Telefono { get; set; }
    }
}