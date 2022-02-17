const RequestUtil =
{
   login: (id: string, pw: string): boolean =>
   {
      return false;
   },

   getConsumerValueList: (PK: string): object =>
   {
      return {};
   },

   putValue: (PK: string, unixtime: string, v: string) =>
   {
      return;
   },

   encodeBase64: (src: string): string =>
   {
      return '';
   }
};

export default RequestUtil;