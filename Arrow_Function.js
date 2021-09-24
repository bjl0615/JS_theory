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

/*
    화살표 함수와 this
        - strict 모드에서 함술르 호출할 때
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
// 1. strict 모드에서는 window.book()처럼 호출하는 함수 앞에 오브젝트를 작성해야 한다. 이렇게 하지 않으면 book() 함수 안에서 this 값이 undefined이다.
// 2. 또한, getPoint()처럼 window를 앞에 작성하지 않으면 getPoint() 안에서 this 값이 undefined이다.
// 3. 이를 피하기 위해 window getPoint()로 호출하면 window 오브젝트에 getPoint()가 없으므로 에러가 난다.
// 4. strict 모드의 함수에서 this를 참조하기 위해서는 this를 별도롤 저장한 후 사용해야 하는 번거롭다.

/*
            - 화살표 함수로 해결
*/
"use strict"
var point = 100;
function sports(){
    const getPoint = () => {
        log(this.point);
    };
    getPoint();
};
window.sports();
// 1. 화살표 함수로 작성하면 getPoint()로 호출할 수 있다.
// 2. 또한, getPoint() 화살표 함수 안에서 this가 undefined가 아니라 글로벌(window) 오브젝트를 참조한다.
// 3. var point = 100을 작성했으므로 100이 출력된다.

/*
        - 화살표 함수에서 this가 글로벌 오브젝트 참조
    this가 정적 스코프 참조
        - 화살표 함수에서 정적 스코프의 this를 사용
        - 정적(렉시컬Lexical) 스코프란
            - 엔진이 해석할 때, 화살표 함수를 만나면
            - function 오브젝트를 생성하고
            - 화살표 함수가 속한 스코프를 생성한 오브젝트에 바인딩
        - 오브젝트에 비인딩된 스코프의 this를 
            - 화살표 함수에서 this로 사용        
*/
var title = "책";
const book = {
    show: () => log(this.title)
};
book.show();
// 1. show() 화살표 함수에서 this가 window 오브젝트를 참조하는 것은
// 2. 함수 밖 스코프의 변수를 사용하듯이 show()의 스코프인 book 오브젝트에 설정된 스코프의 this를 화살표 함수에서 this로 사용하기 때문이다.
// 3. book 오브젝트가 글로벌 오브젝트에 설정되므로 this가 window 오브젝트를 참조하게 된다.

/*
    - 화살표 함수와 인스턴스
        - 인스턴스에서
            - 화살표 함수의 작성 위치에 따라
            - this가 참조하는 오브젝트가 다름
        - proptotype에 메소드로 작성
*/
var point = 200;
const Point = function(){
    this.point = 100;
};
Point.prototype.getPoint = () => {
    log(this.point);
};
new Point().getPoint();
// 1. proptotype에 화살표 함수를 연결하면 함수 안에서 this가 글로벌 오브젝트를 참조한다.
// 2. log(this.point)에서 글로벌 오브젝트의 point 값인 200을 출력

/*
        - prototyupe의 메소드 안에 작성
*/
const Point = function(){
    this.point = 100;
};
Point.prototype.getPoint = function(){
    const add = () => this.point + 20;
    log(add());
    [1,2].forEach((value) =>{
        log(this.point + value);
    })
};
new Point().getPoint();
// 1. prototype에 일반 함수를 연결하고 함수 안에 화살표 함수를 작성한 형태이다.
// 2. getPoint()가 일반 함수이므로 this가 생성한 인스턴스 참조한다.
// 3. 또한, 화살표 함수에서도 this가 생성한 인스턴스를 참조한다. 
// 4. 화살표 함수의 스코프인 getPoint()의 this를 사용하기 때문이다. 

/*
    화살표 함수 특징
        - function 대신 => 사용, 함수 표현식 형태
            - prototype이 없으므로 함수가 가볍다.
            - constructor가 없으므로 new 연산자로 인스톤스를 생성할 수 없다.
        - 화살표 함수에 this가 없다.
            - 화살표 함수로 Function 오브젝틀르 생성할 때
            - 정적으로 화살표 함수가 속한 스코프의 this를 화살표 함수에 바인딩한다.
            - 바인딩된 this 참조가 바꾸지 안흥며 화살표 함수에서 this로 사용한다.
            - 일반 함수는 call() 등으로 바꿀 수 있다.
        - 메소드보다 함수로 사용하는 것이 효율성이 높다.
*/