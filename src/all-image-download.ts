/**
 * 계룡서버에 있는 모든 이미지를 가져오고 싶었습니다.
 *
 * 머신러닝에 사용하기 위해서였죠
 *
 * 많은 인력이 투입되어 열심히 수정한 결과들을 많은 수고스러움에 감사하며
 *
 * 데이터에 잘 활용하려 합니다.
 *
 * @author Taegyun Ko <taegyun.ko@metervision.io>
 */

import Fs from 'fs';
import 'reflect-metadata';
import { JSONObject } from './type/TypeAlias';
import RequestUtil from './util/RequestUtil';

require('dotenv').config();

async function download_all_image(page: number, size: number = 20)
{
  let count = 0;

  const token = await RequestUtil.getAuthToken(process.env.TEST_LOGIN_ID, process.env.TEST_DECODE);
  const consumerList: [] = await RequestUtil.getConsumerList(token, page, size);

  const pathDestImages: string = `C:/Users/TaegyunKo/Desktop/Workspace/data/metervision/images/meter/`;

  for (let a = 0; a < consumerList.length; a++)
  {
    const v: JSONObject = consumerList[ a ];
    const imageList: [] = await RequestUtil.getConsumerDetailList(token, v.idClientId, 5000);

    console.log(`${ ++count } / 5000`);

    for (let b = 0; b < imageList.length; b++)
    {
      const img: JSONObject = imageList[ b ];
      const filename: string = `${ img.clientId }-${ img.value }-${ String(img.strValue).trim() }-${ img.time }.jpg`.replace(/\s/, '');
      const dest = `${ pathDestImages }/${ filename }`;

      if (!Fs.existsSync(dest))
      {
        await RequestUtil.getImage(token, `https://hycheck-gyeryong.neoidm.com:8989/api${ img.filepath }`, dest);
      }
    }
  }
};


download_all_image(0, 5000).then((v) => { });
