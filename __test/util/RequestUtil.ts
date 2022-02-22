import { assert, expect } from "chai";
import RequestUtil from "../../src/util/RequestUtil";

require('dotenv').config();

describe('RequestUtil', () =>
{
    it("login(process.env.TEST_LOGIN_ID, process.env.TEST_LOGIN_PW) !== ''", async () =>
    {
        let result: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        console.log(result);
        assert.notEqual(result, '');
    });

    /* it("getConsumerValueList('process.env.TEST_CLIENT_ID') !== undefined", () =>
    {
        let result: any = RequestUtil.getConsumerValueList(process.env.TEST_CLIENT_ID);
        assert.notEqual(result, undefined);
    });

    it("putValue(process.env.TEST_END_POINT, process.env.TEST_UNIXTIME, process.env.TEST_VALUE) !== undefined", () =>
    {
        let result: any = RequestUtil.putValue(process.env.TEST_END_POINT, process.env.TEST_UNIXTIME, process.env.TEST_VALUE);
        assert.notEqual(result, false);
    }); */

});