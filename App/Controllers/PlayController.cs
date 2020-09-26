using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
  [Authorize]
  [Route("api/play")]
  [ApiController]
  public class PlayController : ControllerBase
  {
    [HttpPost("submit")]
    public IActionResult Submit()
    {
      return Ok();
    }

    [HttpGet("participate")]
    public IActionResult CanParticipate()
    {
      return Ok();
    }
  }
}
