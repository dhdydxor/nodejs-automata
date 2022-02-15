# 변수선언

- 타입선언
```ts

let strTest: string = 'text'; // 문자열
let numTest: number = 0; // 숫자형
let blnTest: boolean = true; // 논리형
let anyTest: any = true; //  어떤 타입이든 들어갈 수 있다.
let strNumTest: string | number = '0'; // 문자열이나 숫자가 나올 때

```

이 외의 것은 검색하세요

- const
- let

```ts

var myName = 'happy'

if(true)
{
   let myName = 'cool'
}

console.log(myName); // happy

const profile = {
 name: "nice",
 month: 9
}
const number = 5;


number = 4; // 할당 불가

profile.name = "cool1"; // 할당 가능
profile.month = 8; // 할당 가능

```
# 함수선언

- 파라미터 타입선언
```ts

function test(a: number, b: number, c: number){

}

test(1,2,3);

```


- 리턴타입 타입선언
```ts

function test(a: number, b: number): number{
   return a + b;
}

test(10, 20) // 30

```

# 타입종류

이 외의 것은 검색하세요

- boolean
```ts
let bln: boolean;
let blnTest: boolean = false;
```
- any
```ts
let any: any = 123;
any = 'Hong';
any = {};
any = null;
```
- number
```ts
let num: number;
let intTest: number = 0;
let floatTest: number = 1.2;
let nanTest2: number = NaN;
```

- string
```ts
let str: string;
let strTest: string = 'text';
let tempTest: string = `my ${strTest}`;
```

- object
```ts
let obj: objeck = {};
let arr: objeck = [];
let func: objeck = function(){};
let nullVal: objeck = null;
let date: objeck = new Date();
```

- function
```ts
let funcTest: (a: number, b: number): number;
funcTest = function(x, y){
   return x + y;
}
funcTest(10,20) // 30
```

- undefined
```ts
let a;
console.log(a); // nudefined출력
// 값이 지정되지 않았을 때
```

- null
```ts
let a; // undefined
a = null; // null
// null은 직접적으로 값이 없을 때
// nudefined는 아무것도 하지 않은 상태
```

- array
```ts
let arrStr: string[] = ["a","b","cde"]; // 문자열 배열
let arrayStr: Array<String> = ["a","b","cde"];

let arrNum: number[] = [1,2,3,4]; // 숫자형 배열
let arrayNum: Array<number> = [1,2,3,4];

let arr: (string | number)[] = ["a",2,3,"b"]; // 문자열과 숫자를 동시에 가지는 배열
let array: Array<String | number> = ["a",2,3,"b"];

let someArr: any[] = [0,1,{},[],"a","b",false]; // 배열이 가지는 항목의 값을 잘 모르겠을 때

interface Test { // 인터페이스나 커스텀 타입으로 사용할 수 있다.
   name: string;
   age: number;
}

let interTest: Test[] = [
   {
      name: 'Hong',
      age: 32,
   }
];
```

- tuple
```ts
let tuple: [string, number]; 
tuple = ['a',1];
tuple = [1,'a'];
// 배열과 차이점은 정해진 타입의 고정된 길이 배열을 표현한다.
// 데이터를 개별 변수로 지정하지 않고 단일 Tuple 타입으로 지정해 사용할 수 있다.
```

# 클래스
```ts
class Test{
   a: number;
   b: number;

   donstructor(a: number, b: number){
      this.a = a;
      this.b = b;
   }
   getArea(): number { return this.a * this.b}
}
```
# 인터페이스
```ts
interface InterTest{
   a: number;
   b: number;
   getArea(): number
}
```

# enum
```ts
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu = 11,
  Fri,
  Sat
}
console.log(Week.Mon); // 1
console.log(Week.Tue); // 2

console.log(Week.Thu); // 11
// 열거형이며 기본적으로 0부터 시작하여 1씩증가
// 수동으로 값을 변경할 수 있으며 값을 변경한 부분부터 다시 1씩 증가
// 역방향 매핑을 지원한다.
```


# type

```ts
type test {
   a:number,
   b:string
}

let a: test = {a: 1, b: 'nobody'};
```

# type 확인

- instanceof
```ts
var Person = function(){ 
   this.name = "unikys"; 
}; 
var inst = new Person(); 
inst instanceof Person;  // true
inst instanceof Object; // true
typeof inst; // 'object'
// instanceof는 true나 false를 반환하고 typeof는 type을 반환한다.
```
- typeof
```ts
function num(num: number){
   return 123;
}

const varNum: typeof num = num;
```

# import, require, export

```ts
const pi_ = Math.PI;

function testX(x){
   return x+x;
}
console.log(testX(10));

class Human{
   name:string
   constructor(name){
      this.name=name;
   }
}

export {pi_, testX, Human};
// export는 모듈에서 데이터를 내보낼 때

import * as test from './.lib_';

console.log(lib_.pi_); // lib_ 안에 pi_ 변수
console.log(lib_.testX); // lib_ 안에 testX 함수
console.log(lib_.Human); // lib_ 안에 Human 클래스
// import는 모듈에서 데이터를 불러올 때
```

# lambda, 화살표함수, anonymous function

# async, await, Promise

# class 생성, function 생성

- instance 생성
- singleton pattern

# 정규식, 정규표현식

