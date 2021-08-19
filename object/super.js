/*
    PersonPlus class에만 third라는 새로운 인자를 추가하고 싶다면 어떻게 해야 할까?
    아래와 같이 PersonPlus에 Person의 기능을 모두 가져와 수정한다면 상속의 의의가 없어지게 되는 문제가 있다.
        class PersonPlus extends Person{
            constructor(name,first,second,third){
                this.name = name;
                this.first = first;
                this.second = second;
                this.third = third;
            }
            sum(){
                return this.first + this.second + this.third;
            }
            avg(){
                return (this.first+this.second+this.third)/3;
            }
        }
    이럴때 사용하는 키워드가 바로 Super 이다.

    Super을 이용하면 부모 클래스가 가지고 있는 기능을 실행할 수 있다.
    super의 용법에는 두 가지가 있다.
        1. 부모 클래스의 생성자 호출
            super();
        2. 부모 클래스
            super.sum();

    만약 PersonPlus의 constructor가 실행되기 전에 부모 클래스의 기능이 먼저 실행되도록 한다면
    이 문제를 해결할 수 있지 않을까?
        
        class Person{
            constructor(name,first,second){
                this.name = name;
                this.first = first;
                this.second = second;
            }
            sum(){
                return this.first+this.second;
            }
        }
        class PersonPlus extends Person{
            constructor(name,first,second,third){
                super(name,first,second);
                this.third = third;
            }
            sum(){
                return super.sum()+this.third;
            }
            avg(){
                return (this.first+this.second+this.second)/3;
            }
        }

        var kim = new PerosnPlus('kim',10,20,30);
        console.log("kim.sum()",kim.sum());
        console.log("kim.avg()",kim.avg());
        
        
*/  
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}
class PersonPlus extends Person{
    // constructor(name, first, second, third){
    //     this.name = name;
    //     this.first = first;
    //     this.second = second;
    //     this.third = third;
    // }
    // sum(){
    //     return this.first+this.second+this.third;
    // }
    constructor(name, first, second, third){
        super(name , first , second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }    
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}
var kim = new PersonPlus('kim', 10,20,30);
console.log("kim.sum()",kim.sum());
console.log("kim.avg()",kim.avg());