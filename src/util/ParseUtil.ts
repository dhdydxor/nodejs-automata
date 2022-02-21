import { Consumer, ConsumerMeter } from "src/type/TypeAlias";
import axios, { AxiosResponse } from 'axios';

const ParseUtil =
{
   consumerListJsonToConsumerArray: (list: object): Consumer[] =>
   {
      return [];
   },

   consumerJsonMeterArray: (detail: object): ConsumerMeter[] =>
   {
      return [];
   },
};

export default ParseUtil;