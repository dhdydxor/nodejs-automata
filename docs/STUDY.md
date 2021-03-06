# 변수선언

[basic-types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

- 타입선언
```ts

let strTest: string = 'text'; // 문자열
let numTest: number = 0; // 숫자형
let blnTest: boolean = true; // 논리형
let anyTest: any = true; //  어떤 타입이든 들어갈 수 있다.
let strNumTest: string | number = '0'; // 문자열이나 숫자가 나올 때

let un: undefined;
let u: k

let a: "master" | "main";
let b: 1 | 2 ;

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

function test(a: number, b: number, c: number = 0)
{

}

test(1,2);

function question(a!: any, b?: any = 0)
{

}

question(1);

test(1,2,3);

```



- 리턴타입 타입선언
```ts

function test(a: number, b: number): number | string
{
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

   constructor(a: number, b: number){
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
enum Week
{
  Sun, Mon, Tue, Wed, Thu = 11, Fri, Sat
}

switch(week)
{
   case Week.Sun:
      break;
}


// let week = prompt("이번주는 무슨 요일?");




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
>>> Type 선언시
>>> 1. default 값이 들어 가는 방법.
>>> 2. Generic을 이용하는 방법.

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

> **`lib.ts`**
>
```ts
class LIBS
{
   public const pi_ = Math.PI;

   public function testX(x)
   {
      return x+x;
   }

   public class Human
   {
      name:string

      constructor(name)
      {
         this.name=name;
      }
   }
}

export default LIBS; // export는 모듈에서 데이터를 내보낼 때
```

> **`index.ts`**
>
```ts
import LIBS from './lib';

console.log(LIBS.pi_); // lib_ 안에 pi_ 변수
console.log(LIBS.testX); // lib_ 안에 testX 함수
console.log(LIBS.Human); // lib_ 안에 Human 클래스
// import는 모듈에서 데이터를 불러올 때
```

# lambda, 화살표함수, anonymous function

> **`lambda`**

```java
public static void main(String[] args){
   List<Integer> numbers = Array.asList(1,2,3,4,5);

   // 기본
   for(int number:numbers){
      System.out.println(number);
   }

   //람다
   numbers.forEach((Integer value) -> System.out.println(value));
}
```

> **`화살표함수`**

```ts
const add = (num1: number, num2: number): number => num1 + num2;
```

> **`anonymous function`**

```ts
let result = function(a,b){
   return a + b;
}
let data = result(1,2)
```

# async, await, Promise

> **`await`**

```ts
const promise = new Promise((resolve, reject) => {
   resolve(1);
})
```

> **`await`**

```ts
let value = await Promise
```

> **`async`**

```ts
const test = async() => {
   await Promise
}
```

# class 생성, function 생성

> **`class 생성`**

```ts
class Shape {
   name: string;

   constructor(name: string) {
      this.name = name;
   }
}
```

> **`function 생성`**

```ts
function test(a: number, b: number): number {

}

test(1,2);
```


> **`instance 생성`**

- instance 생성

```ts
class test{
   name: string;
   age: number;

   constructor(name: string = "Hong"){
      this.name = name;
   }
}

let realTest:test = new test();
```

> **`singleton pattern`**

- singleton pattern

```ts
class test{
   private static instance: test;

   public name:string;

   private constructor(name:string){
      this.name = name;
   }

   public static getTest() {
      if(!test.instance){
         test.instance = new test('test');
      }
      return test.instance;
   }
}
```


# 정규식, 정규표현식

> **`정규식`**

```ts
let re = /ab+c/;
```

> **`정규표현식`**

```ts
let pattern = /a/;
let ptt = new RegExp('a');
```

# 전처리 preprocessor


> **`@ decorator`**

```ts
function deco(target, name){
   console.log('deco');
}
class test{
   @deco
   animalKind = 'dog'
}
```

# Generic `class<T>`

> **`Generic`**

```ts
// <T>는 타입변수(Type variables)이다.
// Generic을 사용할 때 <>안에 식별자를 넣어서 사용한다.

function test<T>(a: T): T {
   return a;
}
```

