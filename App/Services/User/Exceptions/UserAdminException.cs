using System;

namespace App.Services.User.Exceptions
{
  public class UserAdminException : Exception
  {
    public UserAdminException() : base("Admin user cannot be updated or deleted")
    { }
  }
}