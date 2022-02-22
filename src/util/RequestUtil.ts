import HttpRequest from "./HttpRequest";

const RequestUtil =
{
   // if({request result object}.status == 401) return undefined;

   getAuthToken: async (id: string, pw: string) =>
   {
      const response = await HttpRequest.post("https://hycheck-gyeryong.neoidm.com:8989/api/login/", { userid: id, password: pw });
      return response;
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