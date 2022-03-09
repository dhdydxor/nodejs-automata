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

   getConsumerList: async (token: string, page: number = 0, size: number = 100): Promise<any> =>
   {
      const parameter: any = {
         organizationId: "190867",
         sort: "idClientId,asc",
         page: 0,
         size: size
      };

      const header =
      {
         authorization: "Bearer " + token
      };

      const response = await HttpRequest.get("https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/", parameter, header);

      if (typeof response.data !== "undefined" && typeof response.data.content !== "undefined")
      {
         return response.data.content;
      }

      return undefined;
   },

   getConsumerDetailList: async (token: string, clientId: string, size: number = 5000) =>
   {
      const parameters: any = {
         officeCode: "8001",
         clientId: clientId,
         from: "1644332400000",
         to: "1644937199000",
         sortAsc: "ASC",
         page: 0,
         size: size
      };

      const header =
      {
         authorization: "Bearer " + token
      };

      const response = await HttpRequest.get("https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/", parameters, header);

      if (typeof response !== "undefined" && typeof response.data !== "undefined")
      {
         return response.data.content;
      }

      return undefined;

   },

   putValue: async (token: string, endPoint: string, unixtime: string, value: string) =>
   {
      const header =
      {
         "content-type": "text/plain",
         "accept": "application/json, text/plain, */*",
         "authorization": `Bearer ${ token }`,
      };

      const response = await HttpRequest.put(`https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/${ endPoint }/${ unixtime }/`, value, header);

      if (typeof response !== "undefined" && typeof response.statusText !== "undefined")
      {
         if (response.statusText == "OK")
         {
            return true;
         }
      }

      return false;
   },

   getImageStatus: async (clientId: string, token: string) =>
   {

      const header =
      {
         authorization: "Bearer " + token
      };

      const response = await HttpRequest.get(`https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/client/8001/${ clientId }`, {}, header);

      if (typeof response !== "undefined" && typeof response.data !== "undefined")
      {

         return response.data;
      }

      return undefined;


   },

   getClientIdAfterServicetASKList: async (token: string, clientId: string) =>
   {
      const parameter: object = {
         optClientId: true,
         exact: true,
         resolved: false,
         keyword: clientId,
         sortColNm: "",
         sortAsc: "asc",
         page: 0,
         size: 10
      };

      const header =
      {
         authorization: "Bearer " + token
      };

      const response = await HttpRequest.get("https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/afterservice/task/", parameter, header);

      if (typeof response !== "undefined" && typeof response.data !== "undefined" && typeof response.data.content !== "undefined")
      {
         return response.data.content;
      }
      return undefined;
   },

   getImage: async (token: string, uri: string, dest: string) =>
   {
      const header =
      {
         authorization: "Bearer " + token
      };

      await HttpRequest.getBinary(uri, dest, header);
   }
};

export default RequestUtil;