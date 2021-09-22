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


