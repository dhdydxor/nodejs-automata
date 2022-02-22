import axios, { AxiosResponse } from 'axios';
import Response from 'express';

const HttpRequest =
{
   post: async (uri: string, parameter?: object): Promise<object> | undefined =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.post(uri, parameter);

         console.log(response);

         return JSON.parse(response.data);
      }
      catch (error)
      {
         return undefined;
      }
   },

   get: async (uri: string, parameter?: object): Promise<object> | undefined =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.get(uri, parameter);
         return JSON.parse(response.data);
      }
      catch (error)
      {
         return undefined;
      }


   },

   put: async (uri: string, parameter?: any | undefined): Promise<any> =>
   {
      try
      {
         const response: AxiosResponse<string> = await axios.put(uri, parameter);
         return JSON.parse(response.data);
      }
      catch (error)
      {
         return undefined;
      }

   },

   getBinary: (uri: string, parameter: object | undefined): any =>
   {

   }

};

export default HttpRequest;