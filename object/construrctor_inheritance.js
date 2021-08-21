/*
        PersonPlus class의 내용을 prototype을 사용하여 구현해보자.
            function Person(name,first,second){
                this.name = name;
                this.first = first;
                this.second = second;
            }

            Person.prototype.sum = function(){
                reutrn this.first + this.second;
            }

            function PersonPlus(name, first, second, third){
                Person.call(this,name,first,second);
                this.third = third;
            }
            PersonPlus.prototype.avg = function(){
                return (this.first+this.second+this.third)/3;
            }

            var kim = new PerosnPlus('kim',10,20,30);
            console.log("kim.sum()",kim.sum());
            console.log("kim.avg()",kim.avg());
        PersonPlus가 Person을 상속하도록 하기 위해서 call 메소드를 사용하였다.
        Person의 this를 call를 통해 PerosnPlus로 만들어진 객체로 저장하여
        부모 생성자를 호출하였디.

        아직 Person과 PerosnPlus가 아무런 연관이 없기 때문에
        PersonPlus에서 Person에 소속되어 있는 sum 메소드를 호출하면 오류가 나게 된다.
        현재 상태를 그림으로 살펴보자.(construrctor_inheritance1.png 참조)
        Person과 Person의 prototype 그리고 PersonPlus와 PersonPlus의 프로토타입 객체는 서로를 참조하고 있다.
        그리고 PersonPlus를 통해 생성된 kim이라는 객체의 __proto__는
        자신을 생성한 생성자의 prototype 객체인 PersonPlus 객체의 prototype 객체를 가리키고 있다.

        이때 만약 kim에서 avg라는 함수를 호출하면 kim이라는 객체에 avg라는 프로퍼티가 없기 때문에
        kim 객체의 __proto__가 가리키는 PersonPlus에서 avg라는 프로퍼티를 찾아서 실행하게 된다.(construrctor_inheritance2 참조)

        이번에는 kim이라는 객체에서 sum이라는 함수를 호출해보자.
        kim객체 안에 sum이라는 프로퍼티가 없기 때문에 __proto__를 따라서
        PersonPlus의 prototype 객체를 확인해보지만 역시나 sum이라는 프로퍼티가 존재 하지 않기 때문에
        에러가 발생하게 된다.(construrctor_inheritance3 참조)

        따라서 우리는 PersonPlus의 prototype에 찾는 프로퍼티가 없을때는 Person의 prototype 객체를 확인하도록
        연결해줘야 한다.
        따라서 PersonPlus의 prototype의 __prototype__이 Person의 prototype 객체를 가리키도록 하면 된다.(construrctor_inheritance4 참조)

        이제 위와 같이 동자하도록 코드를 수정해보자.
            function Person(name,first,second){
                this.name = name;
                this.first = first;
                this.second = second;
            }

            Person.prototype.sum = function(){
                return this.first+this.second;
            }

            function PersonPlus(name,first,second,third){
                Person.call(this,name,first,second);
                this.third = third;
            }

            PersonPlus.prototype.__proto__ = Person.prototype;

            PersonPlus.prototype.__proto__ = Person.prototype;

            PersonPlus.prototype.avg = function(){
                return (this.first+this.second+this.third)/3;
            }

            var kim = new PersonPlus('kim', 10,20,30);
            console.log("kim.sum()", kim.sum());
            console.log("kim.avg()", kim.avg());
        하지만 __proto__는 표준이 아니기 떄문에 많은 예제에서는 Object,create()를 사용한다.
        Object.create를 이용해 Person.prototype을 __proto__로 하는 새로운 객체를 생성한 후
        PersonPlus의 prototype으로 지정한다.
            function Person(name,first.second){
                this.name = name;
                this.first = first;
                this.second = second;
            }

            Person.prottype.sum = function(){
                return this.first + this.second;
            }

            function PersonPlus(name,first,second,third){
                Person.call(this,name,first,second);
                this.third = third;
            }

            PersonPlus.prototype = Object.create(Person.prototype);

            PersonPlus.prototype.avg = function(){
                retunr(this.first+this.second+this.third)/3;
            }

            var kim = new PersonPlus('kim',10,20,30);
            console.log("kim.sum()", kim.sum());
            console.log("kim.avg()", kim.avg());
            console.log("kim.consoructor", kim.constructro());
        이때 constructor를 출력해보면 PersonPlus가 아닌 Person으로 나오느 것을 확인할 수 있다.
        
        Person은 __proto__라는 프로퍼티를 톨해서 Person의 prototype 객체를 참조하고
        Person의 prototype 객체는 constructor라는 프로퍼티를 통해서 Person 객체를 참조한다.(construrctor_inheritance5 참조)
        그렇다면 만약 Person이라는 생성자를 통해서 생성된 kim이라는 객체에서 constructor을 호출한다면
        어떤 값이 리턴 될까?
        kim에는 constructor라는 프로퍼티가 없기 때문에 kim의 __proto__가 가리키는
        Person의 prototype 객체의 constructor가 가리키는 Person이 리턴되게 된다.

        즉 자바스크립트에서 constructor라는 프로퍼티는 여러 의미로 사용되는데
        그 중에 하나는 어떠한 객체가 누그로부터 만들어졌는지를 알려주는 것이다.
        또 new 키워드와 함께 constrictor()를 실행하면 constructor를 몰라도
        새로운 객체를 생성할 수 있게 된다.
            d = new Date()
            d2 = new d.constructor()
            
*/
function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
}
function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);
    this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}
var kim = new PersonPlus('kim',10,20,30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);