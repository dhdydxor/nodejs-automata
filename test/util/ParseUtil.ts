import { expect } from "chai";
import ParseUtil from "src/util/ParseUtil";

describe('UserUtils', () =>
{
    it("ParseUtil.consumerListJsonToConsumerArray({}) != undefined");
    {
        let result: any = ParseUtil.consumerListJsonToConsumerArray({});
        expect(result).to.not.equal(undefined);
    }

    it("ParseUtil.consumerJsonMeterArray({}) != undefined");
    {
        let result: any = ParseUtil.consumerJsonMeterArray({});
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