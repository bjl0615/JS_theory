/*
    Arrow Function
        - Arrow의 사전적 의미
            - 화살, 활살표 =>
        - 코드 형태
            - (param) => {함수 코드}
*/
const add = function(one, two){
    return one + two; 
}
log(add(1,2));

const total = (one,two) => {
    return one + two;
};

log(total(1,2));

// 1. function 키워드 대신에 활살표 => 사용
// 2. =>표 양쪽에 공백 작성 가능

/*
        - function(){}의 축약 형태이지만
            - 고려할 사항도 있음(this 참조가 다름)
        - 화살표 함수와 전통적인 함수의 구분이 필요할 때
            - 전통적인 형태를 일반 함수라고 부름
    
    함수 블록 사용
        - 함수 블록과 return 작성 생략
*/
const total = (one,two) => one + two;
log(total(1,2));
// 1. 함수 블록{}과 return을 생략한 형태로 {return one+two}와 같다.
// 2. => 앞에서 줄을 분리하면 SyntaxError
// 3. => 뒤에서는 줄을 분리할 수 있다. 
// (one,two) => 
// one + two;

/*
        - 함수 블록{}만 작성한 형태
*/
const total = (one) => {};
log(total(1));
// 1. 함수 블록{}만 작성하면 undefined 반환
// 2. 함수 블럭에 return을 작성하지 않은 것과 같은
// 3. return을 작성하지 않으면 디폴트로 undefined를 반환한다.
// 4. 화살표 함수이기 때문이 아니라 JS문법이다.

/*
        - {ket:value}를 반환하는 형태
*/
const point = (param) => ({book: param});
const result = point("책");
for (const key in result ){
    log(key + " : " + result[key]);
}
// 1. {key:value}를 소괄호()로 감싸면 {key:value}를 반환한다.
// 2. 소괄호()를 작성하지 않으면 undefined를 반환한다.

/*
    파라미터 사용
        - 파라미터가 하나일 때
*/
const get = param => param + 20;
log(get(10));
// 1. 파라미터가 하나이면 (param)에서 소괄호흫 생략할 수 있다.
// 2. get(10)에서 10이 param에 설정된다.

/*
        - 파라미터가 없으면 소괄호만 작성
*/
const get = () => 10 + 20;
log(get());
// 1. 파라미터가 없으면 소괄호만 적성할 수 있다.'

/*
    화살표 함수 구조
        - fucntion을 =>로 표기하는 것이 전부가 아님
        - 화살표 함수는 일반 함수와 구조가 다름
*/
const book = function(){
    return 100;
}
// 1. 오른쪽에 book을 전개하면 
//     -prototype과 constructor가 있다.

const point = () => 100;
// 1. 오른쪽의 point를 전개하면
//     - prototype과 constructor가 없다.
// 2. prototype에 메소드를 연결하여 확장할수 없다.
// 3. prototype이 없으므로 그만큼 가볍다.
// 4. new 연산자로 인스턴스를 생성할 수 없다.
// 5. 이것이 화살표 함수의 특직이며 용도이다.

/*
    arguments 사용불가
        - arguments 사용할 수 없음
        - arguments 대신에 rest 파라미터 사용
*/
{
    const point = () => {
        try{
            const args = arguments;
        } catch(error){
            console.log("arguments 사용 불가");
        };
    };
    point(10,20);

    // 1. point(10,20) 형태로 호출하면 
    //     - 일반 함수애소는 arguments에 10,20이 설정 되지만.
    // 2. 화살표 함수에서 ReferenceError가 발생한다.
    //     - 즉, arguments를 사용할수 없다.
    // 3. 오른쪽의 point 함수 구조를 전개하면 
    //     - arguments가 표시는 된다.
}