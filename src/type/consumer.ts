type Consumer =
   {
      pk: string,
      name: string,
      pipeSize: number,
      isFailRecognize: boolean,
      isNeedAS: boolean,
   };

type ConsumerMeter =
   {
      datetime: Date,
      unixtime: number,
      imageURI: string,
      value: number,
   };