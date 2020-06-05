using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace App.Services.User.Exceptions
{
  public class UserUpdateException : Exception
  {
    public IEnumerable<IdentityError> Errors { get; }

    public UserUpdateException(string userName, IEnumerable<IdentityError> errors) : base($"Failed to update user \"{userName}\"")
    {
      Errors = errors;
    }
  }
}