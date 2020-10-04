using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Repository;
using System;
using System.Threading.Tasks;

namespace App.Controllers
{
  [Authorize]
  [Route("api/play")]
  [ApiController]
  public class PlayController : ControllerBase
  {
    private static readonly string ParticipationCookie = "participation";
    
    private AppDbContext _dbContext;
    public PlayController(AppDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpPost("submit")]
    public async Task<IActionResult> Submit([FromBody] Quizz quizz)
    {
      var clientParticipationCookie = Request.Cookies[ParticipationCookie];
      if (clientParticipationCookie != null && bool.Parse(clientParticipationCookie))
        return Conflict();

      await _dbContext.Submissions.AddAsync(new Repository.Quizz
      {
        Id = Guid.NewGuid().ToString(),
        FirstName = quizz.FirstName,
        LastName = quizz.LastName,
        Response = string.Join(",", quizz.Responses)
      }).ConfigureAwait(false);
      await _dbContext.SaveChangesAsync().ConfigureAwait(false);
      Response.Cookies.Append(ParticipationCookie, true.ToString());
      return NoContent();
    }
    

    [HttpGet("can-participate")]
    public bool CanParticipate()
    {
      var clientParticipationCookie = Request.Cookies[ParticipationCookie];
      if (clientParticipationCookie != null && bool.Parse(clientParticipationCookie))
        return false;
      return true;
    }
  }
}
