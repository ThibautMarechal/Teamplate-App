using System.ComponentModel.DataAnnotations;

namespace App.Models
{
  public class User
  {
    [Required]
    public string Email { get; set; }
    [Required]
    public string Username { get; set; }
  }
}
