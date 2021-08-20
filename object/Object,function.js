/*
    자바스크립트에서 함수는 단독으로 쓸일 수도 있다.
    new가 앞에 있으면 객체를 만든느 생성자로 쓰일 수도 있고
    call,bind 등 자유롭고 놀라운 사용법이 존재한다.
    자바스크립트 함수의 다양한 사용 방법에 대해서 알아보자.

    연관 없는 두 객체와 공통으로 가지고 sum이라는 함수를 만들어보자.
    또 한 객체가 다른 객체를 상속하도록 __proto__를 지정해보자.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',first:10,second:10}
        lee.__proto__ - kim

        function sum(){
            return this.first+this.second;
        }
    sum이라는 함수는 어떤 객체에도 속해 있지 않은 채 생성되었지만
    기괴하게도 객체들 안에 있는 first와 second라는 속성을 더하는 역할을 하고 있다.
    어떻게 이 기능을 쓸 수 있을까?

    자바스크립트의 모든 함수는 call이라는 메소드를 가진다.
    사실 자바스크립트에서는 함수도 객체이기 때문이다 ..!
    call 메소드의 인자로 객체를 지정하게 되면 해당 함수의 this는 인자로 받으 객체가 된다.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',first:10,second:10}
        lee.__proto__ = kim

        function sum(){
            return this.first + this.second;
        }

        console.log("sum.call(kim)",sum.call(kim)); //sum.call(kim) 30
        console.log("sum.call(lee)",sum.call(lee)); //sum.call(lee) 20
    call은 여러 인자를 가질 수 있다.
    첫번째 인자는 this로 지정할 객체가 오고 그 뒤로는 함수의 인자로 들어갈 값이 들어가게 된다.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',first:10,second:10}
        lee.__proto__ = kim

        function sum(prefix){
            return prefix + (this.first+this.second);
        }

        //sum();
        console.log("sum.call(kim)",sum.call(kim,'=>')); //sum.call(kim) => 30
        console.log("sum.call(lee)",sum.call(lee,': ')); //sum.call(lee) : 20
    
    지금까지 실행할 때 마다 어떤 함수의 this 값을 바꾸는, context를 바꾸는 call 이라는 함술에 대해서 알아봤다. 
    만약 call처럼 실행할 때 마다 this를 변경하는 것이 아니라
    내부적으로 고정시키고 싶다면 bind를 사용한다.
    bind는 호출한 함수를 변경하는 것이 아니라 인자로 받은 조건을 만족하는 새로운 함수를 리턴해준다.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',frist:10,second:10}
        lee.__proto__ = kim

        function sum(prefix){
            return prefix+(this.first+this.second);
        }

        //sum();
        console.log("sum.call(kim)",sum.call(kim,'=>'));
        console.log("sum.call(lee)",sum.call(kim,':'));

        var kimSum = sum.bind(kim, '-> ');
        console.log('kimSum()',kimSum());
}
*/

var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',frist:10,second:10}
lee.__proto__ = kim

function sum(prefix){
    return prefix+(this.first+this.second);
}
//sum();
console.log("sum.call(kim)"+sum.call(kim, '=> '));
console.log("sum.call(lee)"+sum.call(lee, ': '));
var kimSum = sum.bind(kim, '-> ');
console.log('kim.Sum()', kimSum());

