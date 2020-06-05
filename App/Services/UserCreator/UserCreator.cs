using System;
using System.Threading;
using System.Threading.Tasks;
using App.Configuration;
using App.Constants;
using App.Services.UserCreator.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace App.Services.UserCreator
{
  public class UserCreatorService : IHostedService
  {
    private readonly AdminConfiguration _adminConfiguration;
    private readonly IServiceProvider _serviceProvider;
    public UserCreatorService(AdminConfiguration adminConfiguration, IServiceProvider serviceProvider)
    {
      _serviceProvider = serviceProvider;
      _adminConfiguration = adminConfiguration;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
      using var scope = _serviceProvider.CreateScope();
      var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
      var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
      if (!await userManager.Users.AnyAsync(cancellationToken).ConfigureAwait(false))
      {
        var adminUser = new IdentityUser
        {
          Email = _adminConfiguration.Email,
          UserName = _adminConfiguration.UserName
        };
        adminUser.PasswordHash = userManager.PasswordHasher.HashPassword(adminUser, _adminConfiguration.Password);
        var userCreationResult = await userManager.CreateAsync(adminUser).ConfigureAwait(false);
        if (!userCreationResult.Succeeded)
          throw new CreateUserException();

        if (!await roleManager.Roles.AnyAsync(cancellationToken).ConfigureAwait(false))
        {
          var role = new IdentityRole
          {
            Id = Guid.NewGuid().ToString(),
            Name = Role.Admin,
          };
          var roleCreationResult = await roleManager.CreateAsync(role).ConfigureAwait(false);
          if (!roleCreationResult.Succeeded)
            throw new CreateRoleException();

          var applyRoleResult = await userManager.AddToRoleAsync(adminUser, Role.Admin).ConfigureAwait(false);
          if (!applyRoleResult.Succeeded)
            throw new ApplyRoleException();
        }
      }
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
      return Task.CompletedTask;
    }
  }
}
