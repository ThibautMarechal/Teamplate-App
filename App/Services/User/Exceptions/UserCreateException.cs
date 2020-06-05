using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace App.Services.User.Exceptions
{
  internal class UserCreateException : Exception
  {
    public IEnumerable<IdentityError> Errors { get; }

    public UserCreateException(IEnumerable<IdentityError> errors) : base("failed to create user")
    {
      Errors = errors;
    }
  }
}