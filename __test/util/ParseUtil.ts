import { assert } from "chai";
import { Consumer, ConsumerMeter } from "../../src/type/TypeAlias";
import ParseUtil from "../../src/util/ParseUtil";
import RequestUtil from "../../src/util/RequestUtil";

require('dotenv').config();

describe('ParseUtil', () =>
{
    it("consumerListJsonToConsumerArray(obj).length != 0", async () =>
    {
        const token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        const consumerList: any = await RequestUtil.getConsumerList(token);

        const result: Consumer[] = ParseUtil.consumerListJsonToConsumerArray(consumerList);
        assert.notEqual(result.length, 0);
    });

    it("consumerJsonMeterArray(obj).length != 0", async () =>
    {
        let token: any = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
        let consumerList: any = await RequestUtil.getConsumerList(token);
        let clientId: any = consumerList[ 0 ].idClientId;
        let detailList: any = await RequestUtil.getConsumerDetailList(clientId, token);

        let result: ConsumerMeter[] = ParseUtil.consumerJsonMeterArray(detailList);

        assert.notEqual(result.length, 0);
    });
});