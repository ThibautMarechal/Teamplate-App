﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Configuration;
using App.Mappers;
using App.Services.User.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace App.Services.User
{
  class UserService : IUserService
  {
    private readonly UserManager<IdentityUser> _userManager;
    private readonly AdminConfiguration _adminConfiguration;

    public UserService(UserManager<IdentityUser> userManager, AdminConfiguration adminConfiguration)
    {
      _userManager = userManager;
      _adminConfiguration = adminConfiguration;
    }

    public async Task<IEnumerable<Models.User>> GetAllAsync()
    {
      return await _userManager.Users
        .Select(u => UserExtensions.ToContract(u))
        .ToListAsync()
        .ConfigureAwait(false);
    }

    public async Task<Models.User> GetByUserNameAsync(string userName)
    {
      var identityUser = await GetIdentityUserByUserNameAsync(userName).ConfigureAwait(false);
      if (identityUser == null)
        throw new UserNotFoundException(userName);
      return identityUser.ToContract();
    }

    public async Task DeleteByUserNameAsync(string userName)
    {
      if (userName == _adminConfiguration.UserName)
        throw new UserAdminException();
      var identityUser = await GetIdentityUserByUserNameAsync(userName).ConfigureAwait(false);
      if (identityUser == null)
        throw new UserNotFoundException(userName);
      await _userManager.DeleteAsync(identityUser);
    }

    public async Task<Models.User> UpdateUserAsync(Models.User user, string password)
    {
      if (user.Username == _adminConfiguration.UserName)
        throw new UserAdminException();
      var identityUser = await GetIdentityUserByUserNameAsync(user.Username).ConfigureAwait(false);
      if (identityUser == null)
        throw new UserNotFoundException(user.Username);
      identityUser.Email = user.Email;
      identityUser.UserName = user.Username;
      identityUser.PasswordHash = _userManager.PasswordHasher.HashPassword(identityUser, password);
      var updateResult = await _userManager.UpdateAsync(identityUser).ConfigureAwait(false);
      if (!updateResult.Succeeded)
        throw new UserUpdateException(user.Username, updateResult.Errors);
      return identityUser.ToContract();
    }

    public async Task<Models.User> CreateUserAsync(Models.User user, string password)
    {
      var identityUser = await GetIdentityUserByUserNameAsync(user.Username).ConfigureAwait(false);
      if (identityUser != null)
        throw new UserAlreadyExistException(user.Username);
      var identityUserToCreate = new IdentityUser
      {
        Email = user.Email,
        UserName = user.Username
      };
      identityUserToCreate.PasswordHash = _userManager.PasswordHasher.HashPassword(identityUserToCreate, password);
      var createResult = await _userManager.CreateAsync(identityUserToCreate).ConfigureAwait(false);
      if (!createResult.Succeeded)
        throw new UserCreateException(createResult.Errors);
      return identityUserToCreate.ToContract();
    }

    private async Task<IdentityUser> GetIdentityUserByUserNameAsync(string userName)
    {
      return await _userManager.Users
        .SingleOrDefaultAsync(u => u.NormalizedUserName == _userManager.NormalizeName(userName))
        .ConfigureAwait(false);
    }
  }
}