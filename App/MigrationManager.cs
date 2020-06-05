using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AppContext = Repository.AppContext;

namespace App
{
  public static class MigrationManager
  {
    public static IWebHost MigrateDatabase(this IWebHost host)
    {
      using var scope = host.Services.CreateScope();
      using var appContext = scope.ServiceProvider.GetRequiredService<AppContext>();
      appContext.Database.Migrate();
      return host;
    }
  }
}