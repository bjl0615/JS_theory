/*
    구조 분헤 문법(Destructuring)란?
        기존 자바스크립트에서의 '구조'
            기존 자바스크립트 객체와 배열의 구조는 다음과 같다.
*/
var arr = [1,2,3,4];
var obj = {
    a : 10,
    b : 20,
    c : 30
};
/*
    위 코드는 이상할 것 없는 전형적인 객체, 배열 선언 방식이다. 
    왼쪽에 변수 이름을 넣고 오른쪽에 데이터 타입을 선언한다.
    '구조' 라는 단어는 이러한 선언 형식을 의미한다.

    그럼 '구조 분해'란 무엇일까? 바로 이러한 변수 선언 형식이 아래와 같이 자유로워 지는 것을 의미한다.  
*/
var { a, b , c} = obj;
/*
    원래 이전에는 obj.a 같은 방식으로 값을 대입을 하였지만 
    값들을 좀 더 쉽게 대입을 하는 방식을 Destructuring라고 한다.
*/
function fetchData() {
    return {
        data : {
            name : 'capt',
            age : 100
        },
        config : {},
        statusText : '',
        headers : {}
    }
}
var result = fetchData();
var { data,config,statusText,headers } = fetchData();
console.log(data);
console.log(config);
console.log(statusText);
console.log(headers);
/*
    이런씩으로 하나씩 꺼내서 접근할 수 있는 것이 바로 Destructuring라고 한다.
*/
var { data : captain } = fetchData();
console.log(captain);

/*
    Async & Await
        어싱크 어웨이트는 자바스크립트 비동기 처리 패턴 중 가장 최근에 나온 문법이다.
        기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단전을 보완하고 개발자가 읽기 
        좋은 코드를 작성 할 수 있게 도와준다.
    
    async & await 기본 문법
*/
async function 함수명() {
    await 비동기_처리_메서드_명();
}
/*
    먼저 함수의 앞에 async 라는 예약어를 붙인다. 그리고 나서 함수의 내부 로직 중 HTTP 통신을 하는 
    비동기 처리 코드 앞에 await를 붙인다. 
    여기서 주의해야할 점은 비동기 처리 메서다그 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작한다.

    일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios등 프로미스를 반환하는 API 호출 함수이다.
*/
function fetchData() {
    $.ajax('user/1', function(user) {
        console.log(user);
    });
    console.log(user);
}