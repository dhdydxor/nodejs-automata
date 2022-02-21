import axios, { AxiosResponse } from 'axios';

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

   get: (uri: string, parameter?: object | undefined): object | undefined =>
   {
      return undefined;
   },

   put: (uri: string, parameter?: any | undefined): any =>
   {
      return undefined;
   },

   getBinary: (uri: string, parameter: object | undefined): any =>
   {

   }

};

export default HttpRequest;