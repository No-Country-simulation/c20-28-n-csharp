using AutoMapper;
using Bankest.DTOs;
using Bankest.Models;
using Bankest.Services.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;


namespace Bankest.Services.Implementation
{
    public class UsuarioService : IUsuarioService
    {

        private StoreContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public UsuarioService(StoreContext dbContext, IMapper mapper , IConfiguration configuration)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _configuration = configuration;
        }

       

        //public async Task<loginResponseDto> GetUsuarioByPassword(loginRequestDto user)
        //{
        //    try
        //    { 
        //        Usuario? encontrado = new Usuario();
        //        encontrado = await _dbContext.Usuarios.Where(u => u.Email == user.user && u.PasswordHash == user.password).FirstOrDefaultAsync();
        //        loginRequestDto usuarioMap = _mapper.Map<loginRequestDto>(encontrado);
        //        loginResponseDto response = new loginResponseDto();
        //        if (encontrado != null) 
        //        {
        //            var claims = new[]
        //            {
        //                new Claim(JwtRegisteredClaimNames.Sub,_configuration["Jwt:Subject"]),
        //                new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
        //                new Claim("Id", encontrado.Id.ToString()),
        //                new Claim("Email" , encontrado.Email.ToString()),

        //            };

        //            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
        //            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        //            var token = new JwtSecurityToken(
        //                _configuration["Jwt:Issuer"],
        //                _configuration["Jwt:Audience"],
        //                claims,
        //                expires: DateTime.UtcNow.AddMinutes(60),
        //                signingCredentials: signIn
        //                );

        //            string tokenValue = new JwtSecurityTokenHandler().WriteToken(token);

        //        response.Response = "logueado" ;
        //        response.token = tokenValue;
        //        }
        //        else
        //        {
        //            response.Response = "Sin exito";
        //            response.token = "";
        //        }

        //        return response;
        //    }
        //    catch (Exception ex) { throw ex; }
        //}

    }
}
