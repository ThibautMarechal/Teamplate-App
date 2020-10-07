using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using App.Constants;
using App.Services.UserCreator.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace App.Services.UserCreator
{
  public class UsersCreatorService : IHostedService
  {
    private readonly IServiceProvider _serviceProvider;
    public UsersCreatorService(IServiceProvider serviceProvider)
    {
      _serviceProvider = serviceProvider;
    }

    private async Task CreateUser(UserManager<IdentityUser> userManager, string username, string password)
    {
      var user = new IdentityUser
      {
        Email = $"{username}@thibautmarechal.be",
        UserName = username
      };
      user.PasswordHash = userManager.PasswordHasher.HashPassword(user, password);
      var userCreationResult = await userManager.CreateAsync(user).ConfigureAwait(false);
      if (!userCreationResult.Succeeded)
        throw new CreateUserException();
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
      using var scope = _serviceProvider.CreateScope();
      var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
      if (userManager.Users.Count() == 0)
      {
        await CreateUser(userManager, Users.AllIn, Users.AllInPassword).ConfigureAwait(false);
        await CreateUser(userManager, Users.NoCeremony, Users.NoCeremonyPassword).ConfigureAwait(false);
        await CreateUser(userManager, Users.Party, Users.PartyPassword).ConfigureAwait(false);
        await CreateUser(userManager, Users.Demo, Users.DemoPassword).ConfigureAwait(false);
        await CreateUser(userManager, Users.Joel, Users.JoelPassword).ConfigureAwait(false);
      }
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
      return Task.CompletedTask;
    }
  }
}
