/*
    자바스크립트의 함수는 객체이다.
    따라서 프로퍼티를 가질 수 있고 아래와 같이 나타낼 수도 있다.
        function Person(){}
        var Person = new Function();
    Person이라는 함수를 생성하면 Person이라는 객체와 Person의 prototype 객체가 생성되게 된다.
        function Person(name,first,second){
            this.name = name;
            this.first = first;
            this.second = second;
        }
    그리고 두 객체는 서로 연관되어 있기 떄문에 서로의 존재를 알아야 한다.
    Person 객체의 prototype은 Person의 Prototype 객체를 가리킨다.
    Person의 prototype 객체도 Person에 속해있다는 것을 표시하기 위해서 constructor 프로퍼티에 Person 객체를 기록한다.
    즉 서로 참조하는 상태이다.(image1 참조)
    여기에 sum이라는 메소드를 추가해 보자.
        Person.prototype.sum = function(){}
    Person의 prototype 객체에 sum이라는 메소드가 추가되게 된다.(image2 참조)
    생성자를 이용해 새로운 객체를 생성해 보자.
        var kim = new Person('kim',10,20)
    이 kim이라는 객체는 constructor 함수가 실행되면서 this의 값이 새팅된 결과 프로퍼티 값들이 생성되고
    동시에 __proto__라는 프로퍼티도 생성디 된다.
    자바스크립트는 __proto__의 값으로 해당 객체를 생성한 생성자의 prototype을 가리키게 된다.(image3 참조)
    새로운 객체를 생성해도 마찬가지로 같은 모습이 된다.(image4 참조)
        var lee = new Person('lee',10,10)
    어떤 객체에서 메소드나 프로퍼티를 호출할떄
    자바스크립트는 먼저 해당 객체에서 호출하려는 값이 있는지 살피고
    없다면 그 객체의 __proto__프로퍼티가 가리키고 있는 prtotype 객체에서 호출하려는 값을 찾는다.(image5 참조)
        console.log(kim.name);
        kim.sum();

*/
function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){}

var kim = new Person('kim',10,20)

var lee = new Person('lee',10,10)


