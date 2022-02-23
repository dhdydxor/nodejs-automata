import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import Response from 'express';

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

   put: async (uri: string, body?: string, header?: AxiosRequestHeaders) =>
   {
      const defaultHeader = { "content-type": "text/plain", "accept": "application/json, text/plain, */*" };

      try
      {
         if (typeof body === "undefined")
         {
            body = "";
         }

         if (typeof header === "undefined")
         {
            header = { ...defaultHeader };
         }
         else
         {
            header = { ...header, ...defaultHeader };
         }

         const response: AxiosResponse<string> = await axios.put(uri, body, { headers: header, data: body });

         return response;
      }
      catch (error)
      {
         return error.response;
      }

   },

   getBinary: (uri: string, parameter: object | undefined): any =>
   {

   }

};

export default HttpRequest;