using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Services.Mail
{
  public interface IMailService
  {
    Task<bool> SendMail(string from, string subject, string content);
  }
}
