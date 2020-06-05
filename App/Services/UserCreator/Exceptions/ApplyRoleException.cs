using System;

namespace App.Services.UserCreator.Exceptions
{
  public class ApplyRoleException : Exception
  {
    public ApplyRoleException() : base("failed to bind role admin to user admin")
    { }
  }
}