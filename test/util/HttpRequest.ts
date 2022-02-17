import { expect } from "chai";
import HttpRequest from "src/util/HttpRequest";

describe('UserUtils', () =>
{
  it("HttpRequest.post('https://hycheck-gyeryong.neoidm.com:8989/api/login/') != undefined");
  {
    let result: any = HttpRequest.post('https://hycheck-gyeryong.neoidm.com:8989/api/login/');
    expect(result).to.not.equal(undefined);
  }

  it('checkExistUserEmail("dev@ctrls.to")', async () =>
  {
    /* let a: any = await UserRepository.getUserEmail("dev@ctrls.to");
    expect(a).to.not.equal(undefined); */
  });

  it('checkExistUserId("ctrls")', async () =>
  {
    // await createConnection(require("ormconfig"));
    // let a: any = await UserUtils.checkExistUserEmail("dev@ctrls.to");
    // expect(a).to.not.equal(undefined);
  });

  it('checkExistReserve("ctrls")', async () =>
  {
    // await createConnection(require("ormconfig"));
    // let a: any = await UserUtils.checkExistUserEmail("dev@ctrls.to");
    // expect(a).to.not.equal(undefined);
  });

});