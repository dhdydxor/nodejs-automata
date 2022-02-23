import { Consumer, ConsumerMeter, GeneralObject } from "src/type/TypeAlias";
import axios, { AxiosResponse } from 'axios';

const ParseUtil =
{
   consumerListJsonToConsumerArray: (list: GeneralObject): Consumer[] =>
   {
      let result: Consumer[] = [];

      if (typeof list.content == "undefined")
      {
         (list[ "content" ] as GeneralObject).map((v) =>
         {
            /* let obj: Consumer = {
               pk: v.idClientId,
               isFailRecognize:,
               isNeedAS:,
               name: v.name,
               pipeSize:
            }; */

            result.push(obj);
         });
      }

      return result;
   },

   consumerJsonMeterArray: (detail: object): ConsumerMeter[] =>
   {
      return [];
   }
};

export default ParseUtil;