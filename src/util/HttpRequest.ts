const HttpRequest =
{
   post: (uri: string, parameter?: object): object | undefined =>
   {
      /**
       * if( fet(uri)) )
       * {
       *    return response;
       * }
       * else
       * {
       *    return undefined;
       * }
       */
      return {};
   },

   get: (uri: string, parameter: object | undefined): object =>
   {
      return {};
   },

   put: (uri: string, parameter: any | undefined): any =>
   {
      return {};
   },

   getBinary: (uri: string, parameter: object | undefined): any =>
   {

   }

};

export default HttpRequest;