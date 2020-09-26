using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;


namespace App
{
  public class Program
  {
    public static void Main(string[] args)
    {
      WebHost.CreateDefaultBuilder(args)
        .UseStartup<Startup>()
        .UseUrls("http://0.0.0.0:80")
        .Build()
        .MigrateDatabase()
        .Run();
    }
  }
}
