/*
    classes
        자바스크립트는 가장 빠르게 발전하는 언어 중에 하나이다.
        전통적인 객체 지향의 문법을 채택하므로써 이미 객체 지향울 사용할 수 있는 
        사람들이 문법적인 거부감 없이 자바스크립트에 안착할 수 있도록 한다.

        구 중에 하나가 class 이다.
        다른 많은 언어들은 객체를 만드는 공장으로써 class를 지원하고 있다.
        construct의 대체재라고 할 수 있는 class에 대해서 살펴보자.
    
    호환성과 치환
        자바스크립트는 ECMA script라는 표준을 따르는데
        class는 EMCA script 6부터 도입 된 문법이다.
        이전 버전에서는 동작히지 않는다는 단점을 가지고 있다.
        하지만 오늘날 많은 웹브라우저와 Node.js와 같은 플랫폼들이 ECMA script 6이상의
        버전을 지원하고 있기 때문에 크게 문제가 되지는 않는다.

        자바스크립트는 원래 객체 지향 언어였고 prototype 기반 언어이다.
        그리고 새롭게 도입된 문법은 이미 존재하던 기능을 변형한 문법이다.
        즉 기존에 존재하는 문법으로도 똑같은 기능을 낼 수 있다.

    class를 이용한 객체 생성
        기존에 만들었던 Person 생성자 함수와 동일하게 class를 정의해 보자.
        생성자 함수의 역할은 두가지였다.
            1. 객체를 만든다.
            2, 객체의 초기 상태를 정의한다.
        이것을 class에서는 어떻게 하는지 살펴보자.
        우선 객체를 생성하자.
            class Person{

            }
            var kim = new Person();
            console.log('kim',kim);
        코드를 실행 시켜보면 객체가 생성된 것을 확인할 수 있다.
        객체의 초기 상태는 어떻게 정의해야할까?

    construct 함수
        class는 객체의 초기 값을 지정하기 위해서 객체가 생성될 때 실행되기로 약속된 함수가 있다.
        바로 construct 함수이다.
        우리는 이 함수를 이용해 객체의 초기 값을 설정할 수 있다.
        자바스크립트는 객체를 생성할때 자동으로 construct 함수를 호출한다.
            class Person{
                construct(){ //약속된 이름으로 바꾸면 안된다.
                    console.log('constructor');
                }
            }
            var kim = new Person();
            console.log('kim',kim);
        construct 함수에 입력을 받아 객체의 초기값을 설정해보자
            class Person{
                constructor(name,first,second){ //약속된 이름으로 바꾸면 안된다.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('constructor');
                }
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);
*/
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}

var kim = new Person('kim', 10,20);
console.log('kim', kim);


// kim.sum = function(){
//     return 'this : ' + (this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log("kim.sum()",kim.sum());
// console.log("lee.sum()",lee.sum());