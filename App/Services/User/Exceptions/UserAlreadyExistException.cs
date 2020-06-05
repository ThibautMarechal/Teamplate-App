using System;

namespace App.Services.User.Exceptions
{
  internal class UserAlreadyExistException : Exception
  {
    public string UserName { get; }

    public UserAlreadyExistException(string userName) : base($"A user with the userName \"{userName}\" already exist")
    {
      UserName = userName;
    }
  }
}