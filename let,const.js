/*
    변수 구분
        - 로컬(지역) 변수, 글로벌(전역) 변수
        - 변수를 구분하는 이유는?
            - 기능과 목적이 다르기 때문
        - 글로벌 변수와 기능, 목적
            - 다른 js 파일에서 변숫값 공유
            - 파일에서 공통 변수 개념으로 사용
            - 의도는 좋으나 처리 속도가 떠러짐
        - 로컬 변수의 기능, 목적
            - 빠르게 식별자를 해결하기 위해 가꺼운 스코프의 변수를 사용하려는 것
        - var 키워드 문제
    
    글로벌 변수 오해
        - 글로벌 변수는
            - 글로벌 오브젝트의 로컬 변수
            - var value = 100처럼
            - var 키워드 사용이 정상
        - var 키워드를 작성하지 않으면
            - 글러벌 변수로 간주하는데
            - 이것이 문제
*/
// "use strice";
value = 100;
function point(){
    value= 300;
    log("함수", value);
};
point();

// 1. var 키워드를 사용하지 않고 value를 글로벌 변수로 선언하고 100할당
// 2. point() 함수 안에서 value 변수에 300할당 value 변수가 로컬 변수가 아니므로 글로벌 오브젝트의 value 변수에 300 할당
// 3. 함수 안에서 글로벌 변수에 값을 설정하는 것은 좋은 모습이 아니다.
// 4. 로컬 변수와 글로벌 변수를 구분한 목적을 생각해야 한다.

/*
        - log()는 console.log()의 약칭
            - log() 실행 결과를 [실행 결과]에 표시

    use strict 사용
        - 함수 안에서
            - var 키워드를 사용하지 않으면 에러 발생
*/
// "use strice";
function point(){
    try{
        value = 300;
    } catch(e){
        log("글로벌 변수 사용 불가");
    };
};
point();
/*
        - ES6+
            - "use strict"가 디폴트 생성
            - 전체는 아님
*/

/*
    function 블록
        - function name() {}도 블록 스코프
        - function 안과 밖에
            - 같은 이름의 let 변수 선언 가능
            - 스코프가 다르기 때문
*/
let sports = "축구";
function show(){
    let sports = "농구";
    log("안: ", sports);
};
show();
log("밖: ", sports);
/*
        - function 밖의 let 변수를
            - function 안에서 사용 가능(클로저)
*/     
let sports = "축구";
function show(){
    log(sports);
};
show();
/*
    try-catch
        - try-catch 문도 블록 스코프
        - try 블록{} 기준으로
            - 안과 밖에 같은 이름의 let 변수 선언 가능
*/
let sports = "축구";
try{
    let sports = "농구";
    log("안 : ", sports);
} catch(e){};
log("밖: ", sports);

// 1. try 블록의 안과 밖에 let sports를 선언했으며
// 2. 안과 밖이 스코프가 다르므로 변숫값이 각각 설졍된다.

/*
        - catch()에서 try 밖의 변수 사용
*/
let sports = "축구";
try{
    let sports = "농구";
    log("안 : ", sports);
    abc= error;
} catch(e){
    log("catch: ", sports);
};
log("밖: ", sports);
// 1. let sports = "농구"; try 블록에서 값을 할당한다.
// 2. abc = error; error 변수가 없으므로 에러가 발생한다.
// 3. log("catch: ", sports) try 블록 안에서 선언한 sports 값을 출력하지 않고 try 밖의 sports 값을 출력한다.

/*
    switch-case
        - switch 문도 블록 스코프
        - switch 블록 기준으로
            - 같은 이름의 let 변수 작성 불가
*/
let item = 1;
switch (item) {
    case 1: 
        let sportsl
        break;
    case 2:
        // let sports;
    default:
        log(sports);
};

// 1. // let sports;
// 2. switch 블록 안에서 let을 사용하여 선언한 변수가 있는데 다시 let을 사용하여 변수를 선언하므로 에러가 발생한다.
// 3. 그래서 주석을 처리했다.
// 4. 살행에러가 아니라 컴파일 에러

/*
    let 변수 개요
        - let book = "책";
            - 블록block 스코프를 가진 변수
            - 변수가 선언된 블록이 스코프
        - 스코프 적용 기준
            - 블록 {}, 문, 표현식
*/
let sports = "축구";
if(sports){
    let sports = "농구";
    log("안: " , sports);
}
log("밖 : " , sports);
/*
        - 블록{} 안과 밖이 스코프가 다름
            - 변수 이름이 같아도 값이 대체되지 않음 
    let 변수 선언
        - Syntax
            - let name1 [=value1] [,name2 = [value2]]
        - name1, name2에 변수 이름 작성
            - 식별자로 사용
            - []는 생략 가능을 나타냄
            - 값을 할당하지 않아도 됨
*/
let book;
let one,two;
// 1. let book; 값을 할당하지 않고 변수만, 선언할 수 있다. 초깃값으로 undefined가 할당된다.
// 2. let one,two; 콤마로 구분하여 다수를 선어할 수 있다.

/*
        - value1, value2에 초깃값 작성
            - 표현식 작성 가능, 평가 결과 사용
*/
let book = "책";
let one = 1, two = (10+20);
// 1. let book="책";  변수를 선언하고 초깃값을 할당했다.
// 2. let one = 1, two = (10+20); 콤마로 구분하여 다수의 변수를 선언하고 값을 할당한 형태이다.
// 3. let five = 5, let six = 6; SyntaxError 발생
// 4. let five = 5, var six = 6; 콤마로 구분하여 let과 var을 같이 사용할 수 없다.

/*
    블록 스코프
        - 블록 기준
            - 중괄호 { 코드 }
            - function name() { 코드 }
            - if( a === 1){ 코드 }
        - 블록 안과 밖이 스코프가 다름
            - 변수 이름이 같아도 값이 대체되지 않음
*/
let sports = "축구";
if(sports){
    let sports = "농구";
    log("안 : " , sports);
};
log("밖 : ", sports);
// 1. if(sports){...} 블록 {} 안과 밖에 let sports를 작성했으며 스코프가 다르므로
// 2. 변숫값에 대체되지 않고 유지된다.
// 3. 블락 안에서 블록 밖의 변수는 접근할 수 있지만
// 4. 블록 밖에서 블록 안의 변수는 접근할 수 없다.

let sports = "축구";
sports = "농구";
log(sports);
{
    let sports = "탁구";
    log(sports);
};

let sports = "축구";
sports = "농구"
log(sports);

{
    let sports = "탁구";
    log(sports);
};

// 1. sports = "농구";  스코프에서 sports 식별자를 해결한다. 바로 앛에 있으므로 값을 할당한다.
// 2. let sports = "배구"; let을 사용하여 같은 스코프에 같은 이름의 변수를 선얼할 수 없다.
// 3. { let sports = "탁구"; } 블록()을 사용했으며 스코프가 다르므로 let을 사용하여 변수를 선언할 수 있다.

/*
        - 스코프에 같은 이름 사용 불가
*/

/*
    let 변수와 var 변수 차이
        - for() 문에서 반복할 때마다.
            - var 변수는 스코프를 갖지 않음
            - let 변수는 스코프를 가짐

        var 변수와 스코프

            선택 클릭
                - 축구
                - 농구 
                - 야구
            
            **html 파일**
            <ul class=sports>
                <li>축구</li>
                <li>농구</li>
                <li>야구</li>
            </ul>
*/
var node = document.querySelector(".sports");
for( var k = 0; k < node.children.length; k++){
    node.children[k].onClick = function(event){
        event.target.style.backgroundColor = "yellow";
        log(k);
    };
};
// 1. 어떤 갓을 클릭하더라도 항상 for() 문이 끝났을 때의 값인 3을 출력한다.
// 2. var k = 0;에서 k 변수의 스코프는 함수이다.

/*
        let 변수와 스코프
            선택 클릭
                    - 축구
                    - 농구 
                    - 야구
                
                **html 파일**
                <ul class=sports>
                    <li>축구</li>
                    <li>농구</li>
                    <li>야구</li>
                </ul>
*/
var node = document.querySelector(".sports");
for( let k = 0; k < node.children.length; k++){
    node.children[k].onClick = function(event){
        event.target.style.backgroundColor = "yellow";
        log(k);
    };
};
// 1. var k = 0;을 let k = 0; 으로 바꾸었다.
// 2. 이벤트를 설정할 때의 k 값을 출력한다.

/*
    화살표 함수와 this
        - strict 모드에서 함수를 호출할 때
            - 함수 앞에 오브젝트 작성은 필수
*/
"use strict"
function book(){
    function getPoint(){
        log(this);
    }
    getPoint();
};
window.book;
// 1. strict 모드에선 window.book()처럼 호출하는 함수 앞에 오브젝트를 작성해야 한다. 이렇게 하지 않으면 book() 함수 안에서 this 값이 undefined이다.
// 2. 또한, getPoint()처럼 window를 아펭 작성하지 않으면 getPoint() 안에서 this 값이 undefined이다.
// 3. 이를 피하기 위해 window.getPoint()로 호출하면 window 오브젝트에 getPoint()가 없으므로 에러가 난다.
// 4. strict 모드의 함수에서 this를 ㅏㅁ조하기 위해서는 this를 별도롤 저장한 후 사용해야 하는데 번거롭다.

/*
            - 화살표 함수로 해결
*/
"use strict"
var point = 100;
function sports(){
    const getPoint = () => {
        log(this.point);
    }
    getPoint();
};
window.sports;
// 1. 화살표 함수로 작성하면 getPoint()로 호출할 수 있다.
// 2. 또한, getPoint() 화살표 함수 안에서 this가 undefined가 아니라 글로벌(window) 오브젝트를 참조한다.
// 3. var point = 100을 작성했으므로 100이 출력된다.

/*
        - 화살표 함수에서 this가 글로벌 오브젝트 참조
            - this값이 undefined

    this가 정적 스코프 참조
        - 화살펴 함수에서 정적 스코프의 this를 사용
        - 정적(렉시컬Lexical) 스코프란
            - 엔진이 해설할 때, 화살표 함수를 만나면
            - function 오브젝트를 생성하고
            - 화살표 함수가 속한 스코프를 생성한 오브젝트에 바인딩
        - 오브젝트에 바인딩 된 스코프의 this를
            - 화살표 함수에서 this로 사용
*/
var title = "책";
const book = {
    show: () => log(this.title)
};
book.show();
// 1. show() 화살표 함수에서 this가 window 오브젝트를 참조하는 것은
// 2. 함수 밖 스코프의 변수를 상용하듯이 show()의 스코프인 book 오브젝트에 설정된 스코프의 this를 화살표 함수에서 this로 사용하기 때문이다.
// 3. book 오브젝트가 글로벌 오브젝트에 성정되므로 this가 window 오브젝트를 참조하게 된다.

/*
    let 변수와 this
        - 글로벌 오브젝트에서
            - let 변수를 this로 참조 불가
*/
var music = "음악";
let sports = "축구";
log(this.music, this.sports);
// 1. 현재 위치는 글로벌 오브젝트
// 2. var music = "음익"; window 오브젝트에 설정된다.
// 3. let sports = "축구"; window 오브젝트에 설정되지 않는다.
// 4. this.music에서 this가 window 오브젝트를 참죠하며 music이 window 오브젝트에 설정되어 있으므로 음악이 출력된다.
// 5. this.sports에서 sports가 window에 설정되지 않으므로 undefined가 출력된다.

/*
        - 글로벌 오브젝트에서
            - var과 let 변수가 설정되는 위치 구조

    js 파일 다수 사용
        - 모든 js 파일에서
            - 글로벌 오브젝트에 작성한 var 변수와 let 변수를 공유
        - 블록 안에 작성하면 공유하 않는다.

    다수의 js 파일 사용 정리
        - 글로벌 오브젝트에 작성
*/
var globalVar = "var 변수";
let globalLet = "let 변수";
{
    let globalBlock = "bloack변수";
};
/*
            - var 변수 : window에 설정, 공유
            - let 변수 : Scriptdp 설정, 공유
                - window.sports = {}처러 의도적으로 작성하지 않아도 됨
            - { let 변수 } : Block에 설정, 공유하지 않음
                - 글로벌 오브젝트에서만 사용하는 로컬 변수로 사용
        - 함수에 작성
*/
function showLocal(){
    var localVar = "var 변수";
    let localLet = "let 변수";
    {
        let bloackLet = "block 변수";
    };
};
/*
            - var 변수, let 변수 : Local
            - {let 변수 }: Block;
*/