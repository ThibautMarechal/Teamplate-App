using App.Configuration;
using App.Services.Auth;
using App.Services.Mail;
using App.Services.Storage;
using App.Services.User;
using App.Services.UserCreator;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Repository;

namespace App
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      //Configurations
      var appSettingsSection = Configuration.GetSection("Template");
      services.Configure<AppConfiguration>(appSettingsSection);
      var templateConfiguration = appSettingsSection.Get<AppConfiguration>();

      services
        .AddSingleton(templateConfiguration.Auth)
        .AddSingleton(templateConfiguration.Admin)
        .AddSingleton(templateConfiguration.Storage)
        .AddSingleton(templateConfiguration.Mail);

      //Authentications & Authorizations
      services
        .AddAuth(templateConfiguration.Auth);

      //Services
      services
        .AddScoped<IAuthService, AuthService>()
        .AddScoped<IStorageService, StorageService>()
        .AddScoped<IUserService, UserService>()
        .AddHostedService<UserCreatorService>()
        .AddScoped<IMailService, MailService>();

      //Database
      services.AddDbContext<AppContext>(options =>
        options.UseMySql(templateConfiguration.Database.ConnectionString));

      // In production, the React files will be served from this directory
      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "ClientApp/build";
      });
      services.AddCors();
      services.AddControllers();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseCors(x => x
       .AllowAnyOrigin()
       .AllowAnyMethod()
       .AllowAnyHeader()
      );
      app.UseAuthentication();
      app.UseStaticFiles();
      app.UseSpaStaticFiles();
      app.UseRouting();
      app.UseAuthentication();
      app.UseAuthorization();
      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
          name: "default",
          pattern: "{controller}/{action=Index}/{id?}");
      });

      app.UseSpa(spa =>
      {
        spa.Options.SourcePath = "ClientApp";

        if (env.IsDevelopment())
          spa.UseReactDevelopmentServer(npmScript: "start");
      });
    }
  }
}
