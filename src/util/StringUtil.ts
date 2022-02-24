import base64 from "base-64";

const StringUtil =
{
   Base64Endcode: (plain_str: string) =>
   {
      try
      {
         let result = base64.encode(plain_str); console.log(result);

         return result;
      }
      catch (error)
      {
         return undefined;
      }

   },

   Base64Decode: (base64_str: string) =>
   {
      try
      {
         let result = base64.decode(base64_str);
         return result;
      }
      catch (error)
      {
         return undefined;
      }

   }
};

export default StringUtil;