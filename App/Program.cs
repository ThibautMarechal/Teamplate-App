using System;
using App.Services.UserCreator;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Repository;
using AppContext = Repository.AppContext;

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
