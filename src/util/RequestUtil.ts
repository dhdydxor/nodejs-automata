import HttpRequest from "./HttpRequest";

const RequestUtil =
{
   // if({request result object}.status == 401) return undefined;

   getAuthToken: (id: string, pw: string): string =>
   {
      HttpRequest.post("https://hycheck-gyeryong.neoidm.com:8989/api/login/", { userid: id, password: pw })
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