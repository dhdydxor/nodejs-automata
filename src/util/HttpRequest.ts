import fetch from 'node-fetch';

const HttpRequest =
{
   post: async (uri: string, parameter?: object): Promise<any> =>
   {
      const response = await fetch(uri, { method: 'post', body: JSON.stringify(parameter), headers: { 'Content-Type': 'application/json' } });
      return await response.json();
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