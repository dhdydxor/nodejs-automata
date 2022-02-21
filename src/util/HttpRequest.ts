import axios, { AxiosResponse } from 'axios';
import Response from 'express';

const HttpRequest =
{
   post: async (uri: string, parameter?: object) =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.post(uri, parameter);
         return response.data;
      }
      catch (error)
      {
         return error.response.data;
      }
   },

   get: async (uri: string, parameter?: object) =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.get(uri, parameter);
         return response.data;
      }
      catch(error)
      {
         return error.response.data;
      }

      
   },

   /* put: (uri: string, parameter?: any | undefined): any =>
   {
      return undefined;
   },

   getBinary: (uri: string, parameter: object | undefined): any =>
   {

   } */

};

export default HttpRequest;