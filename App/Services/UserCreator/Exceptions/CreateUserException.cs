using System;

namespace App.Services.UserCreator.Exceptions
{
  public class CreateUserException : Exception
  {
    public CreateUserException() : base("Failed to create user admin")
    { }
  }
}