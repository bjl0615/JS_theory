/*
    PersonPlus class���� third��� ���ο� ���ڸ� �߰��ϰ� �ʹٸ� ��� �ؾ� �ұ�?
    �Ʒ��� ���� PersonPlus�� Person�� ����� ��� ������ �����Ѵٸ� ����� ���ǰ� �������� �Ǵ� ������ �ִ�.
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
    �̷��� ����ϴ� Ű���尡 �ٷ� Super �̴�.

    Super�� �̿��ϸ� �θ� Ŭ������ ������ �ִ� ����� ������ �� �ִ�.
    super�� ������� �� ������ �ִ�.
        1. �θ� Ŭ������ ������ ȣ��
            super();
        2. �θ� Ŭ����
            super.sum();

    ���� PersonPlus�� constructor�� ����Ǳ� ���� �θ� Ŭ������ ����� ���� ����ǵ��� �Ѵٸ�
    �� ������ �ذ��� �� ���� ������?
        
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