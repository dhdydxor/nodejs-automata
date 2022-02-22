import HttpRequest from "./HttpRequest";

const RequestUtil =
{
   // if({request result object}.status == 401) return undefined;

   getAuthToken: async (id: string, pw: string) =>
   {
      const parameters: any = {
         userid: id,
         password: pw
      };

      const response = await HttpRequest.post("https://hycheck-gyeryong.neoidm.com:8989/api/login/", parameters);

      if (typeof response.data !== "undefined" && typeof response.data.token !== "undefined")
      {
         return response.data.token;
      }

      return "";
   },

   getConsumerList: async (token: string) =>
   {
      const parameter: any = {
         organizationId: "190867",
         sort: "idClientId,asc",
         page: 0,
         size: 2000
      };

      const header =
      {
         authorization: "Bearer " + token
      };

      const response = await HttpRequest.get("https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/", parameter, header);

      console.log(response.data.content);

      if (typeof response.data !== "undefined" && typeof response.data.content !== "undefined")
      {
         return response.data.content;
      }

      return undefined;
   },


   getConsumerDetailList: async (clientId: string, token: string) =>
   {
      const parameters: any = {
         officeCode: "8001",
         clientId: clientId,
         from: "1644332400000",
         to: "1644937199000",
         sortAsc: "ASC",
         page: 0,
         size: 10
      };

      const header =
      {
         authorization: "Bearer " + token
      };

      const response = await HttpRequest.get("https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/", parameters, header);

      return response.data;
   },

   putValue: async (PK: string, unixtime: string, v: string) =>
   {

      const parameters: any = {
         clientid: PK,
         unixtime: unixtime,
         value: v
      };

      const response = await HttpRequest.put("https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/", parameters);

      // console.log(response);

      return;
   }


};

export default RequestUtil;