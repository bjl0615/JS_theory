/*
    Prototype
        프로토타입을 번역하자면 원형이라는 뜻으로 볼 수 있다.
        자바스크립에서 프로토타입은 중급에서 고급으로 넘어가는 길목에있다고 할 수 있을 정도로
        중요한 개념이며 자바스크립트를 Prototype language라고 한다.

        코드를 한 번 보자
            function Person(name,first,second,third){
                this.name = name;
                this.first = first;
                this.second = second;
                this.third = third;
                this.sum = function(){
                    return this.first + this.second + this.third;
                }
            }


            var kim = new Person('kim',10,20,30);
            var lee = new Person('lee',10,10,10);
        저번에 만든 생성자 함수에서는 새로운 객체가 생설될 때 마다
        sum이라는 내부 매소드가 새롭게 생성되고 있다.
        그만큼 메모리 낭비가 발생해 성능이 떨어지게 된다.

        또 sum이라는 메소드의 내용을 수정하고 싶을 경우
        만들어진 객체만큼 수정 작업을 반복해야한다는 문제가 있다.
        즉 생산성이 떨어지게 된다.

        만약 Person 이라는 생성자를 이용해서 만든 모든 객체가 공통적으로 사용하는
        함수를 만들 수 있다면 어떨까? 또 공통적으로 사용하는 속성을 만들 수 있다면 어떨끼?
        
        Person 생성자에 prototype에 sum이라는 함수를 정의해보자.
            function Person(name,first,second,third){
                this.name = name;
                this.first = first;
                this.second = second;
                this.third = third;
            }

            Person.prototype.sum = function(){
                return this.first + this.second + this.third;
            }

            var kim = new Person('kim',10,20,30);
            var lee = new Person('lee',10,10,10);
            console.log("kim.sum()", kim.sum());
            console.log("lee.sum()", lee.sum());
        생성자 함수 안에 메소드를 정의하는 코드가 들어 있지 않기 때문에
        객체가 생성될 떄마다 호출되지 않고 한번만 생성하게 된다.
        즉 메모리를 절약할 수 있다.

        만약 sum의 내용이 수정된다해도 한 번만 수정하면 된다.
            Person.prototype.sum = function(){
                return 'prototype:' + (this.first+this.second+this.third);
            }

            var kim = new Person('kim',10,20,30);
            var lee = new Person('lee',10,10,10);
            console.log("kim.sum()",kim.sum());
            console.log("lee.sum()",lee.sum());
        여러개의 객체가 하나의 함수를 공유하므로 성능을 높이고 메모리를 절약힐 수 있다.

        만약 하나의 객체에서만 sum이라는 함수를 다르게 동작시키고 싶다면 어떻게 해야할까?
        kim이라는 객체에 sum 메소드를 추가해보자.
            function.Person(name,first,second,third){
                this.name = name;
                this.second = second;
                this.third = third;
            }
            Person.prototype.sum = function(){
                return "prototype:" + (this.first+this.second+this.third);
            }

            var kim = new Person('kim'+10,20,30);

            kim.sum = function(){
                return 'this' + (this.first+this.second+this.third);
            }
            var lee = new Person('lee',10,10,10);
            console.log("kim.sum()",kim.sum());
            console.log("lee.sum()",lee.sum());
        kim과 lee에서 각각 sum을 호출한 결과가 다르게 나오는 것을 확인할 수 있다.

        자바스크립트는 객체에서 어떠한 메소드 또는 속성을 출력할때
        해당 객체가 그 메소드 또는 속성을 가지고 있는지를 확인한다.
        만약 가지고 있다면 객체 내의 메소드 또는 속성을 호출하고
        없다면 이 객체의 생성자의 prototype에 해당 메소드 또는 속성이 정의 되어 있는지를 확인한다.

    생성자를 이용한 객체 생성
        객체의 속성들 (변수들)은 생성자 함수 안에 넣는 것이 일반적이다.
        객체의 메소드들은 생성자의 prototype에 추가하는 것이 일반적이다.
            function Person(name,first,second,third){
                this.name = name;
                this.first = first;
                this.second = second;
                this.third = third;
            }
            Person.prototype.sum = function(){
                return 'prototype:' + (this.first+this.second+this.third);
            }
        
*/
function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
    
}

Person.prototype.sum = function(){
    return 'prototype : '+(this.first + this.second);
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : ' + (this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());