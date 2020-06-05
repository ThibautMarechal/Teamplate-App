using System.Threading.Tasks;
using App.Models;

namespace App.Services.Auth
{
  public interface IAuthService
  {
    Task<Models.User> AuthenticateAsync(string userName, string password);
    Task<Models.User> RefreshTokenAsync(string userName);
  }
}