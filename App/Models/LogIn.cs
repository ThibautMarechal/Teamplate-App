using System.ComponentModel.DataAnnotations;

namespace App.Models
{
  public class LogIn
  {
    [Required]
    public string Password { get; set; }
    [Required]
    public string UserName { get; set; }
  }
}
