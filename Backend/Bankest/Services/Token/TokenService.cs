using Bankest.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Bankest.Services.Token
{
    public class TokenService
    {
        private readonly UserManager<Usuario> _userManager;
        private readonly IConfiguration _configuration;

        public TokenService(UserManager<Usuario> userManager, IConfiguration configuration)
        {
            _configuration = configuration;
            _userManager = userManager;
        }

        public async Task<string> GenerateToken(Usuario user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName),
            };

            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var tokenOptions = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"], // Emisor del token
                audience: _configuration["Jwt:Audience"], // Audiencia del token
                claims: claims, // Claims incluidos en el token
                expires: DateTime.Now.AddMinutes(15), // Tiempo de expiración del token
                signingCredentials: creds
            );


            //Devolver el Token JWt como una cadena
            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }
    }
}
