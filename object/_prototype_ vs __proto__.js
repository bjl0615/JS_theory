/*
    �ڹٽ�ũ��Ʈ�� �Լ��� ��ü�̴�.
    ���� ������Ƽ�� ���� �� �ְ� �Ʒ��� ���� ��Ÿ�� ���� �ִ�.
        function Person(){}
        var Person = new Function();
    Person�̶�� �Լ��� �����ϸ� Person�̶�� ��ü�� Person�� prototype ��ü�� �����ǰ� �ȴ�.
        function Person(name,first,second){
            this.name = name;
            this.first = first;
            this.second = second;
        }
    �׸��� �� ��ü�� ���� �����Ǿ� �ֱ� ������ ������ ���縦 �˾ƾ� �Ѵ�.
    Person ��ü�� prototype�� Person�� Prototype ��ü�� ����Ų��.
    Person�� prototype ��ü�� Person�� �����ִٴ� ���� ǥ���ϱ� ���ؼ� constructor ������Ƽ�� Person ��ü�� ����Ѵ�.
    �� ���� �����ϴ� �����̴�.(image1 ����)
    ���⿡ sum�̶�� �޼ҵ带 �߰��� ����.
        Person.prototype.sum = function(){}
    Person�� prototype ��ü�� sum�̶�� �޼ҵ尡 �߰��ǰ� �ȴ�.(image2 ����)
    �����ڸ� �̿��� ���ο� ��ü�� ������ ����.
        var kim = new Person('kim',10,20)
    �� kim�̶�� ��ü�� constructor �Լ��� ����Ǹ鼭 this�� ���� ���õ� ��� ������Ƽ ������ �����ǰ�
    ���ÿ� __proto__��� ������Ƽ�� ������ �ȴ�.
    �ڹٽ�ũ��Ʈ�� __proto__�� ������ �ش� ��ü�� ������ �������� prototype�� ����Ű�� �ȴ�.(image3 ����)
    ���ο� ��ü�� �����ص� ���������� ���� ����� �ȴ�.(image4 ����)
        var lee = new Person('lee',10,10)
    � ��ü���� �޼ҵ峪 ������Ƽ�� ȣ���ҋ�
    �ڹٽ�ũ��Ʈ�� ���� �ش� ��ü���� ȣ���Ϸ��� ���� �ִ��� ���ǰ�
    ���ٸ� �� ��ü�� __proto__������Ƽ�� ����Ű�� �ִ� prtotype ��ü���� ȣ���Ϸ��� ���� ã�´�.(image5 ����)
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


