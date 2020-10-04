using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace App.Controllers
{
  public class Quizz
  {
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required, MinLength(11), MaxLength(11)]
    public IEnumerable<string> Responses { get; set; }
  }
}