using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngularTest.Controllers
{
    [RoutePrefix("api/dynamic")]
    public class DynamicController : ApiController
    {
        [Route("login")]
        public IHttpActionResult Login(LoginModel model)
        {
            if (!string.IsNullOrWhiteSpace(model.Username) && !string.IsNullOrWhiteSpace(model.Password))
            {
                if (model.Username == "test" && model.Password == "test")
                { return Ok(); }
                else
                {
                    return BadRequest("Invalid username/password.");

                }
            }

            return BadRequest("Invalid username/password.");
        }

        public IHttpActionResult FileUpload()
        {
            HttpPostedFile file = HttpContext.Current.Request.Files["File"];
            string path = Path.Combine("~/Content/images/", file.FileName);
            var filePath = HttpContext.Current.Server.MapPath(path);
            file.SaveAs(filePath);
            dynamic response = new ExpandoObject();
            response.Path = path.Replace("~/","");
            return Ok(response);
        }
    }

    public class LoginModel {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
