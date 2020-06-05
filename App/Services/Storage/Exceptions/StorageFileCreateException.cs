using System;

namespace App.Services.Storage.Exceptions
{
  public class StorageFileCreateException : Exception
  {
    public string File { get; }

    public StorageFileCreateException(string file, Exception innerException) : base($"The file \"{file}\" cannot be created", innerException)
    {
      File = file;
    }
  }
}