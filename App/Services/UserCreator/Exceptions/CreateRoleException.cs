using System;

namespace App.Services.UserCreator.Exceptions
{
  public class CreateRoleException : Exception
  {
    public CreateRoleException() : base("Failed to create role admin")
    { }
  }
}