/*
    classes
        �ڹٽ�ũ��Ʈ�� ���� ������ �����ϴ� ��� �߿� �ϳ��̴�.
        �������� ��ü ������ ������ ä���ϹǷν� �̹� ��ü ����� ����� �� �ִ� 
        ������� �������� �źΰ� ���� �ڹٽ�ũ��Ʈ�� ������ �� �ֵ��� �Ѵ�.

        �� �߿� �ϳ��� class �̴�.
        �ٸ� ���� ������ ��ü�� ����� �������ν� class�� �����ϰ� �ִ�.
        construct�� ��ü���� �� �� �ִ� class�� ���ؼ� ���캸��.
    
    ȣȯ���� ġȯ
        �ڹٽ�ũ��Ʈ�� ECMA script��� ǥ���� �����µ�
        class�� EMCA script 6���� ���� �� �����̴�.
        ���� ���������� �������� �ʴ´ٴ� ������ ������ �ִ�.
        ������ ���ó� ���� ���������� Node.js�� ���� �÷������� ECMA script 6�̻���
        ������ �����ϰ� �ֱ� ������ ũ�� ������ ������ �ʴ´�.

        �ڹٽ�ũ��Ʈ�� ���� ��ü ���� ���� prototype ��� ����̴�.
        �׸��� ���Ӱ� ���Ե� ������ �̹� �����ϴ� ����� ������ �����̴�.
        �� ������ �����ϴ� �������ε� �Ȱ��� ����� �� �� �ִ�.

    class�� �̿��� ��ü ����
        ������ ������� Person ������ �Լ��� �����ϰ� class�� ������ ����.
        ������ �Լ��� ������ �ΰ�������.
            1. ��ü�� �����.
            2, ��ü�� �ʱ� ���¸� �����Ѵ�.
        �̰��� class������ ��� �ϴ��� ���캸��.
        �켱 ��ü�� ��������.
            class Person{

            }
            var kim = new Person();
            console.log('kim',kim);
        �ڵ带 ���� ���Ѻ��� ��ü�� ������ ���� Ȯ���� �� �ִ�.
        ��ü�� �ʱ� ���´� ��� �����ؾ��ұ�?

    construct �Լ�
        class�� ��ü�� �ʱ� ���� �����ϱ� ���ؼ� ��ü�� ������ �� ����Ǳ�� ��ӵ� �Լ��� �ִ�.
        �ٷ� construct �Լ��̴�.
        �츮�� �� �Լ��� �̿��� ��ü�� �ʱ� ���� ������ �� �ִ�.
        �ڹٽ�ũ��Ʈ�� ��ü�� �����Ҷ� �ڵ����� construct �Լ��� ȣ���Ѵ�.
            class Person{
                construct(){ //��ӵ� �̸����� �ٲٸ� �ȵȴ�.
                    console.log('constructor');
                }
            }
            var kim = new Person();
            console.log('kim',kim);
        construct �Լ��� �Է��� �޾� ��ü�� �ʱⰪ�� �����غ���
            class Person{
                constructor(name,first,second){ //��ӵ� �̸����� �ٲٸ� �ȵȴ�.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('constructor');
                }
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);

    �޼ҵ� �����
        1. prototype�� �̿��� �߰��Ѵ�.
            class Person{
                constructor(name,first,second){ //��ӵ� �̸����� �ٲٸ� �ȵȴ�.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('constructor');
                }
            }
            Person.protutype.sum = function(){
                return 'prototype:' + (this.first+this.second+this.third); 
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);
        2. class ���ο� �����ϱ�
            class Person(){
                constructor(name,first,second){ //��ӵ� �̸����� �ٲٸ� �ȵȴ�.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                }
                sum(){
                    return 'prototype:' + (this.first+this.second);
                }
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);
            console.log("kim.sum()",kim.sum());

            var lee = new Person('lee',10,10);
            console.log('lee',lee);
            console.log("lee.sum()",lee.sum());
        ���� class�� ���� �ִ� ��� ��ü���� �����ϴ� �޼ҵ� ���� �� �� �ִ�.
        
        Ư�� ��ü�� �޼ҵ常 �����ϰ� �ʹٸ� ������ �Ȱ��� ����� ����ϸ� �ȴ�.
            var kim = new Person('kim',10,20);
            kim.sum = function(){
                return 'this:' + (this.first+this.second);
            }
        � ��ü�� Ư���� ȣ���ϸ� �ڹٽ�ũ��Ʈ�� �� ��ü�� �ش� Ư���� ������ �ִ��� Ȯ���ϰ�
        �ִٸ� �� Ư���� ȣ���Ѵ�. ���� ���ٸ� �� ��ü�� ���� �ִ� class���� �ش� Ư���� ������ 
        ȣ���Ѵ�.
        
*/
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : ' + (this.first+this.second);
    }
}

// Person.prototype.sum = function(){
//     return 'prototype:' + (this.first+this.second);
// }

var kim = new Person('kim', 10,20);
kim.sum = function(){
    return 'this : ' + (this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());