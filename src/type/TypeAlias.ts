export type Consumer =
   {
      pk: string,
      name: string,
      pipeSize: number,
      isFailRecognize?: boolean,
      isNeedAS?: boolean,
   };

export type JSONObject = { [ index: string ]: any; };

export type MediaType = "text/html" | "audio/aac" | "application/x-abiword" | "application/octet-stream" | "video/x-msvideo" | "application/vnd.amazon.ebook" | "application/octet-stream" | "application/x-bzip" | "application/x-bzip2" | "application/x-csh" | "text/css" | "text/csv" | "application/msword" | "application/epub+zip" | "image/gif" | "image/x-icon" | "text/calendar" | "application/java-archive" | "image/jpeg" | "application/js" | "application/json" | "audio/midi" | "video/mpeg" | "application/vnd.apple.installer+xml" | "application/vnd.oasis.opendocument.presentation" | "application/vnd.oasis.opendocument.spreadsheet" | "application/vnd.oasis.opendocument.text" | "audio/ogg" | "video/ogg" | "application/ogg" | "application/pdf" | "application/vnd.ms-powerpoint" | "application/x-rar-compressed" | "application/rtf" | "application/x-sh" | "svg+xml" | "application/x-shockwave-flash" | "application/x-tar" | "image/tiff" | "application/x-font-ttf" | "application/vnd.visio" | "audio/x-wav" | "audio/webm" | "video/webm" | "image/webp" | "application/x-font-woff" | "application/xhtml+xml" | "application/vnd.ms-excel" | "application/xml" | "vnd.mozilla.xul+xml" | "application/zip" | "video/3gpp" | "t contain video" | "video/3gpp2" | "audio/3gpp2" | "application/x-7z-compressed";

export type ConsumerMeter =
   {
      datetime?: Date,
      unixtime: number,
      imageURI: string,
      value: number,
   };


export type ConsumerDetail =
   {
      time: number,
      officeCode: string,
      clientId: number,
      endpoint: string,
      mediaType: MediaType,
      filename: string,
      filepath: string,
      value: number,
      strValue: string,
      status: string, // @fixme 'PROCESSED' 와 몇가지 정해진 것이 있을 듯,
      delta: number,
      meterType: number
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