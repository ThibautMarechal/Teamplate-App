using System;

namespace App.Services.Storage.Exceptions
{
  public class StorageFileDeleteException : Exception
  {
    public string File { get; }

    public StorageFileDeleteException(string file, Exception innerException) : base($"The file \"{file}\" cannot be deleted", innerException)
    {
      File = file;
    }
  }
}