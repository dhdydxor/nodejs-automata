export type Consumer =
   {
      pk: string,
      name: string,
      pipeSize: number,
      isFailRecognize: boolean,
      isNeedAS: boolean,
   };

export type GeneralObject = {
   [ index: string ]: any;
};

export type ConsumerMeter =
   {
      datetime: Date,
      unixtime: number,
      imageURI: string,
      value: number,
   };

export class UtilResultSet
{
   isSuccess: boolean = false;
   result: any = '';

   constructor (isSuccess?: boolean, result?: any)
   {
      if (typeof isSuccess === "undefined")
      {
         this.isSuccess = false;
      }
      else
      {
         this.isSuccess = isSuccess;
      }

      if (typeof result === "undefined")
      {
         this.result = "";
      }
      else
      {
         this.result = result;
      }
   }
};