const RequestUtil =
{
   // if({request result object}.status == 401) return undefined;

   getAuthToken: (id: string, pw: string): string =>
   {
      return '';
   },

   getConsumerValueList: (PK: string): object =>
   {
      return {};
   },

   putValue: (PK: string, unixtime: string, v: string): boolean =>
   {
      return;
   }


};

export default RequestUtil;