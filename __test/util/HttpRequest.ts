import { assert, expect } from "chai";
import HttpRequest from "../../src/util/HttpRequest";

describe('UserUtils', () =>
{
  it("HttpRequest.post !== undefined", async () =>
  {
    const parameters: any = {
      userid: process.env.TEST_LOGIN_ID,
      password: process.env.TEST_LOGIN_PW
    };
    const result: any = await HttpRequest.post('https://hycheck-gyeryong.neoidm.com:8989/api/login/', parameters);

    expect(result).to.not.equal(undefined);
  });

  /* it("HttpRequest.get !== undefined", () =>
  {
    let result: any = HttpRequest.get('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/');
    assert.notEqual(result, undefined);
  });

  it("HttpRequest.put !== undefined", () =>
  {
    let result: any = HttpRequest.put('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/');
    assert.notEqual(result, undefined);
  }); */
});