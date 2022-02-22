import axios, { AxiosResponse } from 'axios';
import Response from 'express';

const HttpRequest =
{
   post: async (uri: string, parameter?: object) =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.post(uri, parameter);
         return response;
      }
      catch (error)
      {
         return error.response;
      }
   },

   get: async (uri: string, parameter?: object): Promise<object> | undefined =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.get(uri, parameter);
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