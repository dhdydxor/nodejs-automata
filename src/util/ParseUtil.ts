import { Consumer, ConsumerMeter, GeneralObject } from "src/type/TypeAlias";
import axios, { AxiosResponse } from 'axios';

const ParseUtil =
{
   consumerListJsonToConsumerArray: (content: GeneralObject): Consumer[] =>
   {
      let result: Consumer[] = [];

      if (typeof content !== "undefined")
      {
         content.map((v: GeneralObject) =>
         {
            let obj: Consumer = {
               name: v.name,
               pk: v.idClientId,
               pipeSize: v.meterDia
            };

            result.push(obj);
         });

         return result;
      }

      return [];
   },

   consumerJsonMeterArray: (detail: GeneralObject): ConsumerMeter[] =>
   {
      let result: ConsumerMeter[] = [];

      if (typeof detail.content !== "undefined")
      {
         detail.content.map((v: GeneralObject) =>
         {
            let obj: ConsumerMeter = {
               datetime: new Date(v.time),
               unixtime: v.time,
               imageURI: v.filepath,
               value: v.strValue
            };

            result.push(obj);
         });

         return result;
      }

      return [];
   }
};

export default ParseUtil;