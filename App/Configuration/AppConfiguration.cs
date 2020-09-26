namespace App.Configuration
{
  public class AppConfiguration
  {
    public AuthConfiguration Auth { get; set; } = new AuthConfiguration();
    public DatabaseConfiguration Database { get; set; } = new DatabaseConfiguration();
  }
}
