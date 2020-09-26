using System.Threading.Tasks;

namespace App.Services.Auth
{
  public interface IAuthService
  {
    Models.User Authenticate(string password);
    Models.User RefreshToken(string userName);
  }
}