using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VelibAndFurious.Api.Controllers
{
	public class StationsController : ApiController
	{
		public string GetStations()
		{
			WebClient client = new WebClient();
			string apiResult = MakeRequest("https://api.jcdecaux.com/vls/v1/stations?apiKey=e5bc60b81a3a39b0d932e3d7a09cf07184ba8d29");
			apiResult = apiResult.Replace("\"", "'");

			#region //Jsonreader

			//JsonTextReader reader = new JsonTextReader(new StringReader(apiResult));
			//while (reader.Read())
			//{
			//	if (reader.Value != null)
			//		Console.WriteLine("Token: {0}, Value: {1}", reader.TokenType, reader.Value);
			//	else
			//		Console.WriteLine("Token: {0}", reader.TokenType);
			//}
			#endregion

			return apiResult;
		}

		private string MakeRequest(string url)
		{
			if (string.IsNullOrWhiteSpace(url))
				return "";

			HttpWebRequest wr = (HttpWebRequest)WebRequest.Create(url);

			wr.Timeout = 10000;

			WebResponse resp = wr.GetResponse();
			StreamReader streamReader = new StreamReader(resp.GetResponseStream());
			string response = streamReader.ReadToEnd();

			return response;
		}
	}
}
