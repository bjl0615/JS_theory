/*
    Prototype
        ������Ÿ���� �������ڸ� �����̶�� ������ �� �� �ִ�.
        �ڹٽ�ũ������ ������Ÿ���� �߱޿��� ������� �Ѿ�� ����ִٰ� �� �� ���� ������
        �߿��� �����̸� �ڹٽ�ũ��Ʈ�� Prototype language��� �Ѵ�.

        �ڵ带 �� �� ����
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
        ������ ���� ������ �Լ������� ���ο� ��ü�� ������ �� ����
        sum�̶�� ���� �żҵ尡 ���Ӱ� �����ǰ� �ִ�.
        �׸�ŭ �޸� ���� �߻��� ������ �������� �ȴ�.

        �� sum�̶�� �޼ҵ��� ������ �����ϰ� ���� ���
        ������� ��ü��ŭ ���� �۾��� �ݺ��ؾ��Ѵٴ� ������ �ִ�.
        �� ���꼺�� �������� �ȴ�.

        ���� Person �̶�� �����ڸ� �̿��ؼ� ���� ��� ��ü�� ���������� ����ϴ�
        �Լ��� ���� �� �ִٸ� ���? �� ���������� ����ϴ� �Ӽ��� ���� �� �ִٸ� ���?
        
        Person �����ڿ� prototype�� sum�̶�� �Լ��� �����غ���.
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
        ������ �Լ� �ȿ� �޼ҵ带 �����ϴ� �ڵ尡 ��� ���� �ʱ� ������
        ��ü�� ������ ������ ȣ����� �ʰ� �ѹ��� �����ϰ� �ȴ�.
        �� �޸𸮸� ������ �� �ִ�.

        ���� sum�� ������ �����ȴ��ص� �� ���� �����ϸ� �ȴ�.
            Person.prototype.sum = function(){
                return 'prototype:' + (this.first+this.second+this.third);
            }

            var kim = new Person('kim',10,20,30);
            var lee = new Person('lee',10,10,10);
            console.log("kim.sum()",kim.sum());
            console.log("lee.sum()",lee.sum());
        �������� ��ü�� �ϳ��� �Լ��� �����ϹǷ� ������ ���̰� �޸𸮸� ������ �� �ִ�.

        ���� �ϳ��� ��ü������ sum�̶�� �Լ��� �ٸ��� ���۽�Ű�� �ʹٸ� ��� �ؾ��ұ�?
        kim�̶�� ��ü�� sum �޼ҵ带 �߰��غ���.
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
        kim�� lee���� ���� sum�� ȣ���� ����� �ٸ��� ������ ���� Ȯ���� �� �ִ�.

        �ڹٽ�ũ��Ʈ�� ��ü���� ��� �޼ҵ� �Ǵ� �Ӽ��� ����Ҷ�
        �ش� ��ü�� �� �޼ҵ� �Ǵ� �Ӽ��� ������ �ִ����� Ȯ���Ѵ�.
        ���� ������ �ִٸ� ��ü ���� �޼ҵ� �Ǵ� �Ӽ��� ȣ���ϰ�
        ���ٸ� �� ��ü�� �������� prototype�� �ش� �޼ҵ� �Ǵ� �Ӽ��� ���� �Ǿ� �ִ����� Ȯ���Ѵ�.

    �����ڸ� �̿��� ��ü ����
        ��ü�� �Ӽ��� (������)�� ������ �Լ� �ȿ� �ִ� ���� �Ϲ����̴�.
        ��ü�� �޼ҵ���� �������� prototype�� �߰��ϴ� ���� �Ϲ����̴�.
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