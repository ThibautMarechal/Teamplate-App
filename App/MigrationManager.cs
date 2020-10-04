using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SylvieLaurentContext = Repository.AppDbContext;

namespace App
{
  public static class MigrationManager
  {
    public static IWebHost MigrateDatabase(this IWebHost host)
    {
      using var scope = host.Services.CreateScope();
      using var appContext = scope.ServiceProvider.GetRequiredService<SylvieLaurentContext>();
      appContext.Database.Migrate();
      return host;
    }
  }
}