import { expect } from "chai";
import RequestUtil from "src/util/RequestUtil";

describe('UserUtils', () =>
{
    it("RequestUtil.login('youngit1', 'wm4897') != undefined");
    {
        let result: any = RequestUtil.login('youngit1', 'wm4897');
        expect(result).to.not.equal(undefined);
    }

    it("RequestUtil.getConsumerValueList('PK') != undefined");
    {
        let result: any = RequestUtil.getConsumerValueList('PK');
        expect(result).to.not.equal(undefined);
    }

    it("RequestUtil.putValue('PK', '1644332400000', '01078') != undefined");
    {
        let result: any = RequestUtil.putValue('PK', '1644332400000', '01078');
        expect(result).to.not.equal(undefined);
    }

    it("RequestUtil.encodeBase64('src') != undefined");
    {
        let result: any = RequestUtil.encodeBase64('src');
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