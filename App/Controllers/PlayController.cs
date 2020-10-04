using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
  [Authorize]
  [Route("api/play")]
  [ApiController]
  public class PlayController : ControllerBase
  {
    private static readonly string ParticipationCookie = "participation";
    /*
    private SylvieLaurentContext _dbContext;
    public PlayController(SylvieLaurentContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpPost("submit")]
    public async Task<IActionResult> Submit([FromBody] Quizz quizz)
    {
      var clientParticipationCookie = Request.Cookies[ParticipationCookie];
      if (clientParticipationCookie != null && bool.Parse(clientParticipationCookie))
        return Conflict();

      await _dbContext.Submission.AddAsync(new Repository.Quizz
      {
        FirstName = quizz.FirstName,
        LastName = quizz.LastName,
        Response = string.Join(",", quizz.Responses)
      }).ConfigureAwait(false);
      await _dbContext.SaveChangesAsync().ConfigureAwait(false);
      Response.Cookies.Append(ParticipationCookie, true.ToString());
      return Ok();
    }
    */

    [HttpGet("can-participate")]
    public IActionResult CanParticipate()
    {
      var clientParticipationCookie = Request.Cookies[ParticipationCookie];
      if (clientParticipationCookie != null && bool.Parse(clientParticipationCookie))
        return Conflict();
      return Ok();
    }
  }
}
