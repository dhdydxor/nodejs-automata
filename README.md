인공신경망을 만들어봅시다
===

# Todo

- [ ] RequestUtil.getConsumerValueList 이름이 너무 직관적이지 않음, 바꿔야지

# 설치된 라이브러리 목록

| 라이브러리 명 |  dev  | 용도                                      | 레포지토리                                   |
| ------------- | :---: | ----------------------------------------- | -------------------------------------------- |
| ts-base-64    |   x   | Typescript Base64 인코더, 디코더 유틸리티 | https://github.com/michael-mcanulty/tsBase64 |

> **`수용가목록 JSON`**

```ts
interface Consumer
{
  pk: string;
  name: string;
  pipeSize: number;
  isFailRecognize: boolean;
  isNeedAS: boolean;
}

let result: Consumer[];

foreach(JSON.content).((v)=>
{
  let obj: Consumer =
  {
    pk: v.pk,
    name: v.userName,
    pipeSize: v.size,
    isFailRecognize: v.faile === "" ? false : true;
    isNeedAS: v.ASfaile === "" ? false : true;
  };

  result.push(obj);
})

return result;

```
> **`수용가검침상세정보 JSON`**

```ts
interface ConsumerDetail
{
  date: string;
  unixtime: stirng;
  image: string;
  value: string;
}

let detailValue: ConsumerDetail[];

foreach(JSON.content).((v) =>
{
  let detailObj: ConsumerDetail =
  {
    date: v.date,
    unixtime: v.unixtime,
    image: v.image,
    value: v.value
  };

  detailValue.push(detailObj);
})

return detailValue;

```

> **`이미지저장`**

```ts

```

> **`오늘이 월요일인가?`**

```ts
enum todayMon
{
  Sun, Mon, Tue, Wed, Thu, Fri, Sat
}

switch(todayMon)
{
  case todayMon.Mon:
    break;
}

```



```
HttpRequest:
  POST전송: post(uri: string, parameter: object | undefined): object
  GET전송: get(uri: string, parameter: object | undefined): object
  PUT전송: put(uri: string, parameter: any | undefined): any

RequestUtil:
  로그인: login(id: string, pw: string): boolean
  수용가들목록: getConsumerList()
  수용가이미지목록: getConsumerValueList(PK: string): object
  검침값PUT보내기: putValue(PK: stirng, unixtime: string, v: stirng)
  base64인코딩: encodeBase64(src: string): string



ParseUtil:
  consumerList(list: object): Consumer[]

수용가목록JSON: -> 수용가 배열[{수용가PK, 문자인식실패여부, A/S여부, 고객명, 구경}..]로 변환

수용가검침상세정보JSON: -> 검침값 배열[{날짜, 유닉스타임, 이미지, 검침정보 }...]로 변환

이미지저장: image(imageUri: string, imageName: string): string

오늘이월요일인가:

문자열숫자만추출: replaceall(/^[0-9]/g, '');
수용가목록 JSON - 수용가의 오늘부터 일주일 검침값 변화있나: boolean
weekChange(image: string): boolean
수용가목록 JSON - 수용가 이미지처리실패값: boolean
imageFaile(image: stirng): boolean
```



```
화면구성
- 수용가별 오늘날짜 이미지 목록
- UX 엔터키 -> 다음 row -> 마지막 row일경우 다음 수용가
- input.focus() 문자 전체선택
- 엔터키는 이전값과 입력값이 다를때 PUT
- 백스페이스는 현재 row 작성 취소 이전 수용가
- 키목록
    엔터: 다음 row, 다음 수용가
    백스페이스: 이전 수용가 첫번째 row
보고서페이지:
  아래 보고서양식 참조
```

보고서양식

- 날짜 00 부터 00까지

| 수용가번호   | 이미지         | 원인             |
| ------------ | -------------- | ---------------- |
| 300010087600 | (binary image) | 이미지 처리 불량 |


- 날짜 00 부터 00까지

| 수용가번호   | 고객명 |
| ------------ | ------ |
| 300010087600 | 이태식 |


```js
  foreach(수용가목록).((수용가)=>
  {
    foreach(수용가.이미지목록).((이미지)=>
    {
      if(오늘 == 월요일)
      {
        if(수용가이미지날짜 >= 오늘-2 && 수용가이미지날짜 <= 오늘 )
        {
          화면표시()
        }
      }
      else
      {
        if(수용가이미지날짜 >= 오늘-1 && 수용가이미지날짜 <= 오늘)
        {
          화면표시()
        }
      }

    });
  })
```




하나의 화면으로 쉽게 검침값을 수정할 수 있도록 한다.

이미지를 다운로드 받아 한 개의 디렉터리에 수집한다.

(머신러닝을 위한 데이터 수집, 그러기 위해서는 이미지와 값이 동시에 저장되도록 하는 방안 구현)

머신러닝 신경망 구축준비를 한다.

POST 예제
===

```js
import fetch from 'node-fetch';

const response = await fetch('https://httpbin.org/post', {method: 'POST', body: 'a=1'});
const data = await response.json();

console.log(data);
```

POST JSON 예제
===
```js
Post with JSON
import fetch from 'node-fetch';

const body = {a: 1};

const response = await fetch('https://httpbin.org/post', {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();

console.log(data);
```

이미지 다운로드 예제
===
```js
import {createWriteStream} from 'node:fs';
import {pipeline} from 'node:stream';
import {promisify} from 'node:util'
import fetch from 'node-fetch';

const streamPipeline = promisify(pipeline);

const response = await fetch('https://github.githubassets.com/images/modules/logos_page/Octocat.png');

if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

await streamPipeline(response.body, createWriteStream('./octocat.png'));
```