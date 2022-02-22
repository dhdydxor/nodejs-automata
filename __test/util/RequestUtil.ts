import { assert, expect } from "chai";
import RequestUtil from "../../src/util/RequestUtil";

describe('UserUtils', () =>
{

    it("RequestUtil.login(process.env.TEST_LOGIN_ID, process.env.TEST_LOGIN_PW) !== ''", () =>
    {
        let result: any = RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_LOGIN_PW);
        assert.notEqual(result, '');
    });

    it("RequestUtil.getConsumerValueList('process.env.TEST_CLIENT_ID') !== undefined", () =>
    {
        let result: any = RequestUtil.getConsumerValueList(process.env.TEST_CLIENT_ID);
        assert.notEqual(result, undefined);
    });

    it("RequestUtil.putValue(process.env.TEST_END_POINT, process.env.TEST_UNIXTIME, process.env.TEST_VALUE) !== undefined", () =>
    {
        let result: any = RequestUtil.putValue(process.env.TEST_END_POINT, process.env.TEST_UNIXTIME, process.env.TEST_VALUE);
        assert.notEqual(result, false);
    });

});