import { assert, expect } from "chai";
import StringUtil from '../../src/util/StringUtil';

require('dotenv').config();

describe('UserUtils', () =>
{
   it("Base64Endcode !== 'undefined'", async () =>
   {
      let result: any = await StringUtil.Base64Endcode(process.env.TEST_LOGIN_PW);

      assert.notEqual(result, undefined);
   });

   it("Base64Decode !== 'undefined'", () =>
   {
      let result: string | undefined = StringUtil.Base64Decode(process.env.TEST_DECODE);

      assert.notEqual(result, undefined);
   });


   /* it("StringUtil.Base64Decode(process.env.TEST_DECODE) !== 'wm4897'", () =>
   {
      let result: any = StringUtil.Base64Decode(process.env.TEST_DECODE);

      assert.notEqual(result, '');
   }); */
});