using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
  public class AppDbContext : IdentityDbContext
  {
    public DbSet<Quizz> Submissions { get; set; }
    public AppDbContext(DbContextOptions options) : base(options) {}
  }
}
