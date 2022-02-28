import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import Fs from "fs";
import https from "https";

require('dotenv').config();

const HttpRequest =
{
   post: async (uri: string, parameter?: object, header?: AxiosRequestHeaders) =>
   {
      try
      {
         if (typeof parameter === "undefined")
         {
            parameter = {};
         }

         if (typeof header === "undefined")
         {
            header = {};
         }

         const response: AxiosResponse<string> = await axios.post(uri, parameter, { headers: header });
         return response;
      }
      catch (error)
      {
         return error.response;
      }
   },

   get: async (uri: string, parameter?: object, header?: AxiosRequestHeaders) =>
   {
      try
      {
         if (typeof parameter === "undefined")
         {
            parameter = {};
         }

         if (typeof header === "undefined")
         {
            header = {};
         }

         const response: AxiosResponse<string> = await axios.get(uri, { params: parameter, headers: header });
         return response;
      }
      catch (error)
      {
         return error.response;
      }
   },

   put: async (uri: string, body?: string, header?: any) =>
   {

      try
      {
         if (typeof body === "undefined")
         {
            body = "";
         }

         if (typeof header === "undefined")
         {
            header = {};
         }

         const response = await axios.put(uri, body, { headers: header });

         return response;
      }
      catch (error)
      {
         return error.response;
      }

   },

   getBinary: async (uri: string, dest: string, header?: AxiosRequestHeaders) =>
   {
      if (typeof header === "undefined")
      {
         header = {};
      }

      const wStream = Fs.createWriteStream(dest);
      const response = await axios.get(uri, { headers: header, responseType: "stream", httpsAgent: new https.Agent({ rejectUnauthorized: false }) });

      response.data.pipe(wStream);

      new Promise((resolve, reject) =>
      {
         wStream.on("finish", () => { resolve(true); });
         wStream.on("finish", () => { resolve(false); });
      });
   }

};

export default HttpRequest;