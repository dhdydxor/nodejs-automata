import 'reflect-metadata';
import { GeneralObject } from './type/TypeAlias';
import RequestUtil from './util/RequestUtil';

require('dotenv').config();

async function test()
{
  const token = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
  const consumerList: [] = await RequestUtil.getConsumerList(token, 2000);

  consumerList.map(async (v: GeneralObject) =>
  {
    const detailList: GeneralObject = await RequestUtil.getConsumerDetailList(token, v.idClientId, 2000);

    if (detailList.status === 'PROCESSED')
    {
      RequestUtil.getImage(token, process.env.IMAGE_URI_PREFIX + detailList.filepath, "./images/" + detailList.strValue);
    }
  });



};

console.log("start");
test();

/* const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Routes.forEach((route) =>
{
  let x = new (route.controller as any)()[ route.action ];

  // console.log(`[${typeof x !== 'undefined' ? 'O' : ' '}] ${StringUtils.rightPad(route.method.toUpperCase(), 6)} ${route.route}`);

  if (typeof x !== 'undefined')
  {
    (app as any)[ route.method ](route.route, (req: Request, res: Response, next: Function) =>
    {
      if (typeof route.controller[ route.action ] !== 'undefined')
      {
        const result = new (route.controller as any)()[ route.action ](req, res, next);

        if (result instanceof Promise)
        {
          result.then((result) => result !== null && result !== undefined ? res.send(result) : undefined);
        }
        else if (result !== null && result !== undefined)
        {
          res.json(result);
        }
      }
    });
  }
});

app.listen(3000);
console.info("server listening 3000"); */
