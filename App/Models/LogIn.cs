using System.ComponentModel.DataAnnotations;

namespace App.Models
{
  public class LogIn
  {
    [Required]
    public string Password { get; set; }
  }
}
