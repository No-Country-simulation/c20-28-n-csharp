using System.Security.Claims;
using System.Threading.Tasks;
using Bankest.DTOs;
using Bankest.DTOs.UserDTO;
using Bankest.Models;
using Bankest.Services.Implementation;
using Bankest.Services.Interfaces.IUsuarios;
using Bankest.Services.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using static Bankest.Util.Util;

namespace Bankest.Controllers
{

    [Route("api/User")]
    [ApiController]
   // [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private readonly IUsuarioService _userService;
        private readonly ILogger<UserController> _logger; 
        private readonly IConfiguration _configuration;
        private readonly UserManager<Usuario> _userManager;
        private readonly SignInManager<Usuario> _signInManager;
        private readonly TokenService _tokenServices;

        public UserController(IUsuarioService userService, IConfiguration configuration, UserManager<Usuario> userManager
                                , SignInManager<Usuario> signInManager, TokenService tokenServices, ILogger<UserController> logger)
        {
            _userService = userService;
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenServices = tokenServices;
            _logger = logger; 
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO loginRequestDto)
        {
            try
            {
                _logger.LogInformation("Intento de inicio de sesión para el usuario {UserName}", loginRequestDto.UserName);

                var user = await _userManager.FindByNameAsync(loginRequestDto.UserName);
                if (user == null)
                {
                    _logger.LogWarning("El usuario {UserName} no fue encontrado.", loginRequestDto.UserName);
                    return Unauthorized("Invalid username or password.");
                }

                if (await _userManager.CheckPasswordAsync(user, loginRequestDto.Password))
                {
                    _logger.LogInformation("El usuario {UserName} se autenticó correctamente.", user.UserName);
                    var token = await _tokenServices.GenerateToken(user);
                    return Ok(new { token });
                }

                _logger.LogWarning("El usuario {UserName} proporcionó una contraseña incorrecta.", user.UserName);
                return Unauthorized("Invalid username or password.");
            }
            catch (Exception ex)
            {
                // Registrar el error con detalles
                _logger.LogError(ex, "Ocurrió un error durante el intento de inicio de sesión para el usuario {UserName}", loginRequestDto.UserName);

                // Devolver detalles del error al cliente
                return StatusCode(500, new
                {
                    Message = "Ocurrió un error inesperado.",
                    Error = ex.Message,
                    StackTrace = ex.StackTrace
                });
            }
        }


        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            _logger.LogInformation("Intento de registro para el usuario {UserName}", registerDto.UserName);

            if (await _userManager.FindByNameAsync(registerDto.UserName) != null)
            {
                _logger.LogWarning("El nombre de usuario {UserName} ya está en uso.", registerDto.UserName);
                return BadRequest("El nombre de usuario ya está en uso.");
            }
            //verifica que no haya dos correos igual el de arriba hace lo msimo
            if (await _userManager.FindByEmailAsync(registerDto.UserName) != null)
            {
                _logger.LogWarning("El correo electrónico {Email} ya está en uso.", registerDto.UserName);
                return BadRequest("El correo electrónico ya está en uso.");
            }

            var user = new Usuario
            {
                Nombre = registerDto.Nombre,
                ApellidoPaterno = registerDto.ApellidoPaterno,
                ApellidoMaterno = registerDto.ApellidoMaterno,
                UserName = registerDto.UserName,
                Email = registerDto.UserName,
                NormalizedUserName = registerDto.UserName.ToUpper(),
                NormalizedEmail = registerDto.UserName.ToUpper(),
                PhoneNumber = registerDto.Telefono,
                EmailConfirmed = true
            };

            if (string.IsNullOrEmpty(registerDto.Password))
            {
                _logger.LogWarning("El usuario {UserName} intentó registrarse con una contraseña en blanco.", registerDto.UserName);
                return BadRequest("La contraseña no puede estar en blanco.");
            }

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                foreach (var item in result.Errors)
                {
                    _logger.LogError("Error al crear el usuario {UserName}: {Error}", registerDto.UserName, item.Description);
                    ModelState.AddModelError(item.Code, item.Description);
                }
                return ValidationProblem();
            }

            var roleResult = await _userManager.AddToRoleAsync(user, "Cliente");

            if (!roleResult.Succeeded)
            {
                foreach (var item in roleResult.Errors)
                {
                    _logger.LogError("Error al asignar el rol al usuario {UserName}: {Error}", registerDto.UserName, item.Description);
                    ModelState.AddModelError(item.Code, item.Description);
                }
                return ValidationProblem();
            }

            _logger.LogInformation("El usuario {UserName} se registró y se le asignó el rol de Cliente.", user.UserName);
            return StatusCode(201);
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("current")]
        public async Task<ActionResult<UsuarioDto>> GetCurrentUser()
        {
            _logger.LogInformation("Obteniendo información del usuario actual.");

            if (User?.Identity?.Name == null)
            {
                _logger.LogWarning("El usuario no está autenticado.");
                return Unauthorized();
            }

            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            if (user == null)
            {
                _logger.LogWarning("No se pudo encontrar el usuario actual con nombre: {UserName}", User.Identity.Name);
                return Unauthorized();
            }

            _logger.LogInformation("Usuario {UserName} encontrado: {Email}", user.UserName, user.Email);

            var userDto = new UsuarioDto
            {
                Id = user.Id,
                UserName = user.UserName,
                Email = user.Email,
                Nombre = user.Nombre,
                ApellidoPaterno = user.ApellidoPaterno,
                ApellidoMaterno = user.ApellidoMaterno,
                PhoneNumber = user.PhoneNumber
            };

            return Ok(userDto);
        }


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto changePasswordDto)
        {
            _logger.LogInformation("Intento de cambio de contraseña para el usuario {UserName}", User.Identity.Name);

            // Verifica que el usuario esté autenticado
            if (User?.Identity?.Name == null)
            {
                _logger.LogWarning("El usuario no está autenticado.");
                return Unauthorized();
            }

            // Obtén el usuario autenticado
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            if (user == null)
            {
                _logger.LogWarning("No se pudo encontrar el usuario actual con nombre: {UserName}", User.Identity.Name);
                return Unauthorized();
            }

            // Cambia la contraseña del usuario
            var result = await _userManager.ChangePasswordAsync(user, changePasswordDto.CurrentPassword, changePasswordDto.NewPassword);

            // Verifica si el cambio de contraseña fue exitoso
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    _logger.LogError("Error al cambiar la contraseña del usuario {UserName}: {Error}", user.UserName, error.Description);
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return ValidationProblem();
            }

            _logger.LogInformation("La contraseña del usuario {UserName} se cambió exitosamente.", user.UserName);
            return Ok("La contraseña se ha cambiado exitosamente.");
        }

        [HttpPut("perfil")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ActualizarPerfil(ActualizarPerfilDto perfilDto)
        {
            var userId = User?.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return Unauthorized("Usuario no autenticado.");
            }

            var usuario = await _userManager.FindByIdAsync(userId);
            if (usuario == null)
            {
                return NotFound("Usuario no encontrado.");
            }

            // Actualizar solo los campos no nulos
            if (!string.IsNullOrEmpty(perfilDto.Nombre))
            {
                usuario.Nombre = perfilDto.Nombre;
            }

            if (!string.IsNullOrEmpty(perfilDto.ApellidoPaterno))
            {
                usuario.ApellidoPaterno = perfilDto.ApellidoPaterno;
            }

            if (!string.IsNullOrEmpty(perfilDto.ApellidoMaterno))
            {
                usuario.ApellidoMaterno = perfilDto.ApellidoMaterno;
            }

            if (!string.IsNullOrEmpty(perfilDto.Telefono))
            {
                usuario.PhoneNumber = perfilDto.Telefono;
            }

            var result = await _userManager.UpdateAsync(usuario);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            return Ok("Perfil actualizado correctamente.");
        }



    }
}
