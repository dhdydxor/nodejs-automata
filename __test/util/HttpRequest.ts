import { assert, expect, should } from "chai";
import HttpRequest from "src/util/HttpRequest";
import RequestUtil from "src/util/RequestUtil";

describe('UserUtils', () =>
{
  it("HttpRequest.post !== undefined", () =>
  {
    let result: any = HttpRequest.post('https://hycheck-gyeryong.neoidm.com:8989/api/login/');
    assert.notEqual(result, undefined);
  });

  it("HttpRequest.get !== undefined", () =>
  {
    let result: any = HttpRequest.get('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/client/');
    assert.notEqual(result, undefined);
  });

  it("HttpRequest.put !== undefined", () =>
  {
    let result: any = HttpRequest.put('https://hycheck-gyeryong.neoidm.com:8989/api/hycheck/data/correct/device/');
    assert.notEqual(result, undefined);
  });
});