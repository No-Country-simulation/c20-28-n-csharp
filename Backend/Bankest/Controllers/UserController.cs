using Bankest.DTOs;
using Bankest.Models;
using Bankest.Services.Implementation;
using Bankest.Services.Interfaces;
using Bankest.Services.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using static Bankest.Util.Util;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UserController:ControllerBase
    {
        private readonly IUsuarioService _userService;
        private readonly ILogger<UserController> _logger; //Se agrego en caso que luego lo queramos usar
        private readonly IConfiguration _configuration;
        private readonly UserManager<Usuario> _userManager; // Metodo que nos provee identity para poder trabajar con el manejo de usuarior
        private readonly SignInManager<Usuario> _signInManager; //metodos que nos deja como su nombre dice ser el inicio de sesion tambien nos lo provee identity y se usan de usuario porque este hereda de "IdentityUser<Guid>"
        private readonly TokenService _tokenServices;

        public UserController(IUsuarioService userService, IConfiguration configuration, UserManager<Usuario> userManager
                                ,SignInManager<Usuario> signInManager, TokenService tokenServices)
        {
            _userService = userService;
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenServices = tokenServices;

        }

        //[HttpPost]
        //public IActionResult Login(loginRequestDto userLogin)
        //{
        //    return Ok("User Login");
        //}

        //[HttpPost("Usuario")]
        //public async Task<IActionResult> GetAuthorization([FromBody]loginRequestDto user)
        //{
        //    return Ok(await _userService.GetUsuarioByPassword(user).ConfigureAwait(false));
        //}

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO loginRequestDto)
        {
            var user = await _userManager.FindByNameAsync(loginRequestDto.UserName);
            if (user == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            if (await _userManager.CheckPasswordAsync(user, loginRequestDto.Password))
            {
                var token = await _tokenServices.GenerateToken(user);
                return Ok(new { token });
            }

            return Unauthorized("Invalid username or password.");

        }
        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
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

            // Verifica que la contraseña no esté en blanco
            if (string.IsNullOrEmpty(registerDto.Password))
            {
                return BadRequest("La contraseña no puede estar en blanco.");
            }

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                foreach (var item in result.Errors)
                {
                    ModelState.AddModelError(item.Code, item.Description);
                }

                return ValidationProblem();
            }

            return StatusCode(201);
        }


        [Authorize]
        [HttpGet("current-user")]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var username = User.Identity.Name;
            var user = await _userManager.FindByNameAsync(username);

            if (user == null)
            {
                return NotFound("Usuario no encontrado.");
            }

            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenServices.GenerateToken(user),
            };
        }

        [HttpPost("assign-role")]
        // [Authorize(Roles = "Administrador")]
        public async Task<ActionResult> AssignRole(string userId, string role)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return NotFound("Usuario no encontrado.");

            // Asignar el rol al usuario
            var result = await _userManager.AddToRoleAsync(user, role);
            if (!result.Succeeded) return BadRequest(result.Errors);

            // Actualizar el campo TipoUsuario en el modelo
            switch (role)
            {
                case "Cliente":
                    user.TipoUsuario = TipoUsuario.Cliente;
                    break;
                case "Empresa":
                    user.TipoUsuario = TipoUsuario.Empresa;
                    break;
                case "Administrador":
                    user.TipoUsuario = TipoUsuario.Administrador;
                    break;
                default:
                    return BadRequest("Rol no válido.");
            }

            // Guardar los cambios en la base de datos
            var updateResult = await _userManager.UpdateAsync(user);
            if (!updateResult.Succeeded) return BadRequest(updateResult.Errors);

            return Ok("Rol asignado y tipo de usuario actualizado exitosamente.");
        }





    }
}
