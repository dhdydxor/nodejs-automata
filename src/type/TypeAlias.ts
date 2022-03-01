export type Consumer =
   {
      pk: string,
      name: string,
      pipeSize: number,
      isFailRecognize?: boolean,
      isNeedAS?: boolean,
   };

export type GeneralObject = {
   [ index: string ]: any;
};

export type ConsumerMeter =
   {
      datetime?: Date,
      unixtime: number,
      imageURI: string,
      value: number,
   };

// @fixme 만드는중 중단되었음;;
export type ConsumerDetail =
   {
      time: number,
      officeCode: string,
      clientId: number,
      endpoint: string,
      mediaType: 'image/jpeg' | 'application/json' | 'image/jpeg',
      filename: '1644506528.jpg',
      filepath: '/image/HYCHECK/8001/210010002606/353220621773420/2022/2/1644506528.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6IjE2NDQ1MDY1MjguanBnIiwiZXhwIjoxNjQ2MTAwMDcxLCJpYXQiOjE2NDYwMTM2NzF9.',
      value: 1076,
      strValue: '01076',
      status: 'PROCESSED',
      delta: 0,
      meterType: 0;
   }

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