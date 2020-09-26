using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using App.Configuration;
using App.Mappers;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace App.Services.Auth
{
  public class AuthService : IAuthService
  {
    private readonly AuthConfiguration _authConfiguration;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;

    public AuthService(AuthConfiguration authConfiguration, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
    {
      _authConfiguration = authConfiguration;
      _userManager = userManager;
      _signInManager = signInManager;
    }

    private string GenerateToken(string userName)
    {
      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes(_authConfiguration.Secret);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
          new Claim(ClaimTypes.Name, userName)
        }),
        Expires = DateTime.MaxValue,
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
      };
      var token = tokenHandler.CreateToken(tokenDescriptor);
      return tokenHandler.WriteToken(token);
    }

    public async Task<Models.User> AuthenticateAsync(string userName, string password)
    {
      var identityUser = _userManager.Users.SingleOrDefault(u => userName == u.UserName);
      if (identityUser == null)
        return null;

      var signInResult = await _signInManager.CheckPasswordSignInAsync(identityUser, password, false).ConfigureAwait(false);
      if (!signInResult.Succeeded)
        return null;

      return GetUserContract(identityUser);
    }

    public Models.User Authenticate(string password)
    {
      var users = _userManager.Users.ToList();
      var identityUser = users.FirstOrDefault(user => _signInManager.CheckPasswordSignInAsync(user, password, false).Result.Succeeded);
      if (identityUser == null)
        return null;
      return GetUserContract(identityUser);
    }

    public Models.User RefreshToken(string userName)
    {
      var identityUser = _userManager.Users.SingleOrDefault(u => userName == u.UserName);
      return identityUser == null ? null : GetUserContract(identityUser);
    }

    private Models.User GetUserContract(IdentityUser identityUser)
    {
      var user = identityUser.ToContract();
      return user.WithToken(GenerateToken(user.Username));
    }
  }
}