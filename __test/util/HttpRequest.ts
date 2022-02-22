import { assert, expect } from "chai";
import HttpRequest from "../../src/util/HttpRequest";

require('dotenv').config();

describe('HttpRequest', () =>
{
  it("post !== undefined", async () =>
  {
    const parameters: any = {
      userid: process.env.TEST_LOGIN_ID,
      password: process.env.TEST_DECODE
    };

    const result = await HttpRequest.post("https://hycheck-gyeryong.neoidm.com:8989/api/login/", parameters);

    assert.notEqual(result, undefined);
  });

  it("get !== undefined", async () =>
  {
    const parameters: any = {
      clientId: process.env.TEST_CLIENT_ID,
      endPoint: process.env.TEST_END_POINT
    }
    const result: any = await HttpRequest.get('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/', parameters);

    assert.notEqual(result, undefined);
  });

  it("put !== undefined", async () =>
  {
    const parameter: any = {
      value: process.env.TEST_VALUE
    };

    const result: any = await HttpRequest.put('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/', parameter);
    assert.notEqual(result, undefined);
  });
});