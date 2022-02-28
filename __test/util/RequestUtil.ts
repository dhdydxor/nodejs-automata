import { assert, expect } from "chai";
import RequestUtil from "../../src/util/RequestUtil";

require('dotenv').config();
describe('RequestUtil', () =>
{
    // 로그인 token test
    it("getAuthToken !== ''", async () =>
    {
        let result: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        assert.notEqual(result, '');
    });

    // 수용가 목록
    it("getConsumerList !== undefined", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        let result: any = await RequestUtil.getConsumerList(token);

        assert.notEqual(result, undefined);
    });

    // 수용가 상세 목록
    it("getConsumerDetailList !== undefined", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        let consumerList: any = await RequestUtil.getConsumerList(token);
        let clientId: any = consumerList[ 0 ].idClientId;
        let result: any = await RequestUtil.getConsumerDetailList(clientId, token);

        assert.notEqual(result, undefined);
    });


    // 검침값 변환
    it("putValue != boolean", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        let result: any = await RequestUtil.putValue(token, process.env.TEST_END_POINT, process.env.TEST_UNIXTIME, process.env.TEST_VALUE);

        assert.notEqual(result, false);
    });

    it("getImageStatus !== undefined", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        let consumerList: any = await RequestUtil.getConsumerList(token);
        let clientId: any = consumerList[ 0 ].idClientId;
        let result: any = await RequestUtil.getImageStatus(clientId, token);

        assert.notEqual(result, undefined);
    });

    it("getClientIdAfterServicetASKList !== undefined", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        let result: any = await RequestUtil.getClientIdAfterServicetASKList(token, "270010002900");

        assert.notEqual(result, undefined);
    });

    it("getImage", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        const uri = "https://hycheck-gyeryong.neoidm.com:8989/api/image/HYCHECK/8001/300010046700/353220621778981/2022/2/1645681102.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6IjE2NDU2ODExMDIuanBnIiwiZXhwIjoxNjQ1Nzc3MTY5LCJpYXQiOjE2NDU2OTA3Njl9.";
        // const result = await RequestUtil.getImage(uri, "C:/Users/OhYongtaek/Desktop/Workspase/nodejs/nodejs-automata/image/test.jpg", token);

        // assert.notEqual(result, false);
    });

});