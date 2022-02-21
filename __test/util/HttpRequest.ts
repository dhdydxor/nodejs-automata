import { assert, expect } from "chai";
import HttpRequest from "../../src/util/HttpRequest";

require('dotenv').config();

describe('UserUtils', () =>
{
  it("HttpRequest.post !== undefined", async () =>
  {
    const parameters: any = {
      userid: process.env.TEST_LOGIN_ID,
      password: process.env.TEST_DECODE
    };

    const result = await HttpRequest.post("https://hycheck-gyeryong.neoidm.com:8989/api/login/", parameters);

    assert.notEqual(result, undefined);
  });

  it("HttpRequest.get !== undefined", async () =>
  {
    const parameters: any = {
      clientId: process.env.TEST_CLIENT_ID,
      endPoint: process.env.TEST_END_POINT
    }
    const result: any = await HttpRequest.get('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/', parameters);

    assert.notEqual(result, undefined);
  });

  /* it("HttpRequest.put !== undefined", () =>
  {
    let result: any = HttpRequest.put('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/');
    assert.notEqual(result, undefined);
  }); */
});