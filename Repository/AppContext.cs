using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
  public class AppContext : IdentityDbContext
  {
    public AppContext(DbContextOptions options) : base(options)
    {}
  }
}
