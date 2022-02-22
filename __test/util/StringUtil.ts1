import { assert, expect } from "chai";
import StringUtil from '../../src/util/StringUtil';

describe('UserUtils', () =>
{
   it("StringUtil.Base64Endcode(process.env.TEST_LOGIN_PW) !== 'd200ODk3'", () =>
   {
      let result: string | undefined = StringUtil.Base64Endcode(process.env.TEST_LOGIN_PW);

      assert.notEqual(result, undefined);
   });

   it("StringUtil.Base64Decode(process.env.TEST_DECODE) !== 'd200ODk3'", () =>
   {
      let result: string | undefined = StringUtil.Base64Decode(process.env.TEST_DECODE);

      assert.notEqual(result, '');
   });


   /* it("StringUtil.Base64Decode(process.env.TEST_DECODE) !== 'wm4897'", () =>
   {
      let result: any = StringUtil.Base64Decode(process.env.TEST_DECODE);

      assert.notEqual(result, '');
   }); */
});