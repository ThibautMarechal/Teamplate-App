using App.Models;
using Microsoft.AspNetCore.Identity;

namespace App.Mappers
{
  public static class UserExtensions
  {
    public static User ToContract(this IdentityUser identityUser)
    {
      if (identityUser == null)
        return null;
      return new User
      {
        Email = identityUser.Email,
        Username = identityUser.UserName,
      };
    }

    public static UserWithToken WithToken(this User user, string token)
    {
      if (user == null)
        return null;
      return new UserWithToken
      {
        Email = user.Email,
        Username = user.Username,
        Token = token
      };
    }
  }
}