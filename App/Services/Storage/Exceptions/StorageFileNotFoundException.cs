using System;

namespace App.Services.Storage.Exceptions
{
  public class StorageFileNotFoundException : Exception
  {
    public string File { get; }

    public StorageFileNotFoundException(string file) : base($"The file \"{file}\" doesnt exist")
    {
      File = file;
    }
  }
}