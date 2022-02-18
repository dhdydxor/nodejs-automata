import { assert, expect } from "chai";
import { Consumer } from "src/type/TypeAlias";
import ParseUtil from "../../src/util/ParseUtil";
import { ConsumerMeter } from '../../src/type/TypeAlias';

describe('UserUtils', () =>
{
    const consumerListJson = require("./consumerList.json");
    const consumerMeterJson = require("./consumerMeter.json");

    it("ParseUtil.consumerListJsonToConsumerArray(consumerListJson.json).length !== 0", () =>
    {
        let result: Consumer[] = ParseUtil.consumerListJsonToConsumerArray(consumerListJson);
        assert.notEqual(result, []);
    });

    it("ParseUtil.consumerJsonMeterArray(consumerMeterJson.json) !== 0", () =>
    {
        let result: ConsumerMeter[] = ParseUtil.consumerJsonMeterArray(consumerMeterJson);
        assert.notEqual(result, []);
    });
});