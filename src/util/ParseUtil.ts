import { Consumer, ConsumerMeter } from "src/type/TypeAlias";
import axios, { AxiosResponse } from 'axios';

const ParseUtil =
{
   consumerListJsonToConsumerArray: (list: object): Consumer[] =>
   {



      if (typeof list === "undefined")
      {
      return [];
      }

   },

   consumerJsonMeterArray: (detail: object): ConsumerMeter[] =>
   {
      return [];
   }
};

export default ParseUtil;