using System.Security.Claims;
using App.Models;
using App.Services.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
  [Authorize]
  [ApiController]
  [Route("/api/auth")]
  public class UsersController : ControllerBase
  {
    private readonly IAuthService _authService;

    public UsersController(IAuthService authService)
    {
      _authService = authService;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public IActionResult Authenticate([FromBody]LogIn userParam)
    {
      var user = _authService.Authenticate(userParam.Password);
      if (user == null)
        return BadRequest(new { message = "Password is incorrect" });

      return Ok(user);
    }

    [HttpGet("refresh-token")]
    public IActionResult RefreshToken()
    {
      var userName = User.FindFirst(ClaimTypes.Name)?.Value;
      if (userName == null)
        return BadRequest(new { message = "Bad token" });

      var user = _authService.RefreshToken(userName);
      if (user == null)
        return BadRequest(new { message = "Bad token" });

      return Ok(user);
    }
  }
}