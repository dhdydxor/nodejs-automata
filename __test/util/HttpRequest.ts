import { assert, expect } from "chai";
import HttpRequest from "../../src/util/HttpRequest";
import RequestUtil from "../../src/util/RequestUtil";

require('dotenv').config();

describe('HttpRequest', () =>
{
  it("post", async () =>
  {
    const parameters: any = { userid: process.env.TEST_LOGIN_ID, password: process.env.TEST_DECODE };

    const result = await HttpRequest.post("https://hycheck-gyeryong.neoidm.com:8989/api/login/", parameters);
    assert.notEqual(result, undefined);
  });

  it("get", async () =>
  {
    const parameter: any = { clientId: process.env.TEST_CLIENT_ID };
    const result: any = await HttpRequest.get('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/', parameter);

    assert.notEqual(result, undefined);
  });

  it("put", async () =>
  {
    const parameters: any = {
      endPoint: process.env.TEST_END_POINT,
      unixtime: process.env.TEST_UNIXTIME,
      value: process.env.TEST_VALUE
    };

    const result: any = await HttpRequest.put('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/', parameters);
    assert.notEqual(result, undefined);
  });

  it("binary", async () =>
  {
    let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
    let consumerList: any = await RequestUtil.getConsumerList(token);
    let clientId: any = consumerList[ 0 ].idClientId;
    let consumerDetailList: any = await RequestUtil.getConsumerDetailList(clientId, token);

    const result: any = await HttpRequest.getBinary(consumerDetailList.filepath, "test.jpg", token);
  });
});