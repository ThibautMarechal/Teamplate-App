using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;

namespace App.Services.User
{
  public interface IUserService
  {
    Task<IEnumerable<Models.User>> GetAllAsync();
    Task<Models.User> GetByUserNameAsync(string userName);
    Task DeleteByUserNameAsync(string userName);
    Task<Models.User> UpdateUserAsync(Models.User user, string password);
    Task<Models.User> CreateUserAsync(Models.User user, string password);
  }
}
