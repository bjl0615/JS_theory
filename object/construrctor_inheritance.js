/*
        PersonPlus class�� ������ prototype�� ����Ͽ� �����غ���.
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
        PersonPlus�� Person�� ����ϵ��� �ϱ� ���ؼ� call �޼ҵ带 ����Ͽ���.
        Person�� this�� call�� ���� PerosnPlus�� ������� ��ü�� �����Ͽ�
        �θ� �����ڸ� ȣ���Ͽ���.

        ���� Person�� PerosnPlus�� �ƹ��� ������ ���� ������
        PersonPlus���� Person�� �ҼӵǾ� �ִ� sum �޼ҵ带 ȣ���ϸ� ������ ���� �ȴ�.
        ���� ���¸� �׸����� ���캸��.(construrctor_inheritance1.png ����)
        Person�� Person�� prototype �׸��� PersonPlus�� PersonPlus�� ������Ÿ�� ��ü�� ���θ� �����ϰ� �ִ�.
        �׸��� PersonPlus�� ���� ������ kim�̶�� ��ü�� __proto__��
        �ڽ��� ������ �������� prototype ��ü�� PersonPlus ��ü�� prototype ��ü�� ����Ű�� �ִ�.

        �̶� ���� kim���� avg��� �Լ��� ȣ���ϸ� kim�̶�� ��ü�� avg��� ������Ƽ�� ���� ������
        kim ��ü�� __proto__�� ����Ű�� PersonPlus���� avg��� ������Ƽ�� ã�Ƽ� �����ϰ� �ȴ�.(construrctor_inheritance2 ����)

        �̹����� kim�̶�� ��ü���� sum�̶�� �Լ��� ȣ���غ���.
        kim��ü �ȿ� sum�̶�� ������Ƽ�� ���� ������ __proto__�� ����
        PersonPlus�� prototype ��ü�� Ȯ���غ����� ���ó� sum�̶�� ������Ƽ�� ���� ���� �ʱ� ������
        ������ �߻��ϰ� �ȴ�.(construrctor_inheritance3 ����)

        ���� �츮�� PersonPlus�� prototype�� ã�� ������Ƽ�� �������� Person�� prototype ��ü�� Ȯ���ϵ���
        ��������� �Ѵ�.
        ���� PersonPlus�� prototype�� __prototype__�� Person�� prototype ��ü�� ����Ű���� �ϸ� �ȴ�.(construrctor_inheritance4 ����)

        ���� ���� ���� �����ϵ��� �ڵ带 �����غ���.
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
        ������ __proto__�� ǥ���� �ƴϱ� ������ ���� ���������� Object,create()�� ����Ѵ�.
        Object.create�� �̿��� Person.prototype�� __proto__�� �ϴ� ���ο� ��ü�� ������ ��
        PersonPlus�� prototype���� �����Ѵ�.
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
        �̶� constructor�� ����غ��� PersonPlus�� �ƴ� Person���� ������ ���� Ȯ���� �� �ִ�.
        
        Person�� __proto__��� ������Ƽ�� ���ؼ� Person�� prototype ��ü�� �����ϰ�
        Person�� prototype ��ü�� constructor��� ������Ƽ�� ���ؼ� Person ��ü�� �����Ѵ�.(construrctor_inheritance5 ����)
        �׷��ٸ� ���� Person�̶�� �����ڸ� ���ؼ� ������ kim�̶�� ��ü���� constructor�� ȣ���Ѵٸ�
        � ���� ���� �ɱ�?
        kim���� constructor��� ������Ƽ�� ���� ������ kim�� __proto__�� ����Ű��
        Person�� prototype ��ü�� constructor�� ����Ű�� Person�� ���ϵǰ� �ȴ�.

        �� �ڹٽ�ũ��Ʈ���� constructor��� ������Ƽ�� ���� �ǹ̷� ���Ǵµ�
        �� �߿� �ϳ��� ��� ��ü�� ���׷κ��� ������������� �˷��ִ� ���̴�.
        �� new Ű����� �Բ� constrictor()�� �����ϸ� constructor�� ����
        ���ο� ��ü�� ������ �� �ְ� �ȴ�.
            d = new Date()
            d2 = new d.constructor()
        
        PersonPlus�� ������ kim ��ü�� constructor�� Person���� ������ ������ �־���.
        ������ PersonPlus�� prototype�� Person.prototyped�� __proto__�� ���� ���ο� ��ü�� ����� ��ü �߱� ������
        ������ PersonPlus�� constructor�� ���� PersonPlus�� prototype�� �������� �����̴�.
        ���� PersonPlus.prototype�� constructor�� PersonPlus�� �������ָ� �ȴ�.
            function Person(name,first,second){
                this.name = name;
                this.first = first;
                this.second = second;
            }

            Person.portotype.sum = function(){
                return this.first + this.second;
            }

            functoin PersonPlus(name, first, second, third){
                Person.call(this,name,first,second);
                this.third = third;
            }

            PersonPlus.prototype = Object.create(Person.prototype);
            PersonPlus.prototype.constructor = PersonPlus;

            PersonPlus.prototype.avg = function(){
                return (this.first+this.second+this.third)/3;
            }

            var kim = new PersonPlus('kim',10,20,30);
            console.log("kim.sum()", kim.sum());
            console.log("kim.avg()", kim.avg());
            console.log("kim.constructor", kim.constructor);
        ��� �̷��� �ڵ带 ������ ����ϴ� �ͺ��ٴ� class�� ����ϴ� ���� �� ����ϰ� �������̴�.
        ������ class�� ���ο� �̷��� ������� ���۵ȴٴ� ���� �˰� �����ߴٸ� �ڹٽ�ũ��Ʈ�� ����� �߿��ϰ� ����� �κ��� 
        �����ϰԵǾ��ٴ� ����� ����.
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