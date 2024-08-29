using Bankest.DTOs;
using Bankest.Models;
using Bankest.Services.Implementation;
using Bankest.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Bankest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UserController:ControllerBase
    {
        private readonly IUsuarioService _userService;

        public UserController(IUsuarioService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Login(loginRequestDto userLogin)
        {
            return Ok("User Login");
        }

        [HttpPost("Usuario")]
        public async Task<IActionResult> GetAuthorization([FromBody]loginRequestDto user)
        {
            return Ok(await _userService.GetUsuarioByPassword(user).ConfigureAwait(false));
        }

    }
}
