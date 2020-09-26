using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using App.Configuration;
using App.Services.UserCreator.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace App.Services.UserCreator
{
  public class UsersCreatorService : IHostedService
  {
    private readonly UsersConfiguration _usersConfiguration;
    private readonly IServiceProvider _serviceProvider;
    public UsersCreatorService(UsersConfiguration usersConfiguration, IServiceProvider serviceProvider)
    {
      _serviceProvider = serviceProvider;
      _usersConfiguration = usersConfiguration;
    }

    private async Task CreateUser(UserManager<IdentityUser> userManager, UserConfiguration userConfiguration)
    {
      var user = new IdentityUser
      {
        Email = $"{userConfiguration.Username}@thibautmarechal.be",
        UserName = userConfiguration.Username
      };
      user.PasswordHash = userManager.PasswordHasher.HashPassword(user, userConfiguration.Password);
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
        await CreateUser(userManager, _usersConfiguration.AllIn).ConfigureAwait(false);
        await CreateUser(userManager, _usersConfiguration.Vine).ConfigureAwait(false);
        await CreateUser(userManager, _usersConfiguration.NoCeremony).ConfigureAwait(false);
        await CreateUser(userManager, _usersConfiguration.Party).ConfigureAwait(false);
      }
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
      return Task.CompletedTask;
    }
  }
}
