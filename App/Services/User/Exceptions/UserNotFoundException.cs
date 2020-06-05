using System;

namespace App.Services.User.Exceptions
{
  internal class UserNotFoundException : Exception
  {
    public UserNotFoundException(string userName) : base($"user \"{userName}\" not found.")
    {}
  }
}