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

   put: async (uri: string, parameter?: any | undefined): Promise<any> =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.put(uri, parameter);
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