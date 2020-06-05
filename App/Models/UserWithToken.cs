namespace App.Models
{
  public class UserWithToken : User
  {
    public string Token { get; set; }
  }
}
