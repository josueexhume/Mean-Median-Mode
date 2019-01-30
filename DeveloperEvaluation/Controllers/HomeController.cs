using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using DeveloperEvaluation.Model;
using Newtonsoft.Json;

namespace DeveloperEvaluation.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CalcMeanMedianMode(int[] arr)
        {
            var result = new Dictionary<string, object>()
            {
                { "mean", MeanMedianMode.Mean(arr) },
                { "median", MeanMedianMode.Median(arr) },
                { "mode", MeanMedianMode.Mode(arr) }
            };

            //returns as a JSON object
            return Json(result, JsonRequestBehavior.AllowGet);
        }

    }
}
