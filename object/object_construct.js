/*
        construct�� ���� �Ǽ��Ǵ� �ۼ��̴�.
        ���ݱ��� �츮�� ��ü�� �ϳ� ���۾����� ����� �Դ�.
        ���� ���α׷��������� ��ü�� ���� ������ �־
        �츮�� ��ü�� ����� �� �ִٸ� ���?

        ������ ������� �ڵ忡 ��ü�� �߰��غ���
            var kim = {
                name : 'kim',
                first : 10,
                second : 20,
                sum:function(){
                    return this.fist_this.second;
                }
            }

            var lee = {
                name:'lee',
                first : 10,
                sceond : 20,
                sum:function(){
                    return this.first+this.second;
                }
            }

            console.log("kim.sum()",kim.sum());
            console.log("lee.sum()",lee.sum());
        ���α׷��� ������ ������ ������ ��ü ������ ������ �ٲ��
        ���� ������ �ϴ� ��� ��ü�� ������ �ٲ���Ѵٴ� ������ �ִ�.

        �ڹٽ�ũ��Ʈ ���� ��ü���� �ð��� ���õ� data ��ü�� �ִ�.
        new Ű���带 ����Ͽ� ���ο� Date ��ü�� �����غ���.
            var d1 = new Date('2019-4-10'); //2019�� 4�� 10���� ���� ������ Date ��ü�� �����Ѵ�.
            console.log('d1.getFullYear()',d1.getFullYear()); //�ش� ��ü�� �⵵�� ������ش�.
            console.log('d1.getMethod()',d1.getMonth()); //0���� ī��Ʈ�Ͽ� �ش� ��ü�� ���� ������ش�.
        ��ó�� ��ü�� ����� ������ �ִٸ� ���ϴ� ���� ������
        ��ü�� ����س� �� �ְ� �ȴ�.
    
    ������
        ��ü ���� �Լ��� ������.
            function Person(){
                this.name = 'kim';
                this.first = 10;
                this.second = 20;
                this.third = 30;
                this.sum = function(){
                    return this.first + this.second + this.third;
                }
            }

            console.log('Person()'Person()); // undefined
            console.log('new Person()'new Person()); // ��ü ����
        �׳� �Լ��� ȣ���� ��� �Ϲ� �Լ� ��޵�����
        new ��� Ű���带 ���� ��� ��ü�� �����ϴ� �����ڰ� �ȴ�.
        �����ڸ� constructor��� �Ѵ�.

        �����ڸ� �̿��� ���ο� ��ü�� �����غ���
            var kim = new Person();
            var lee = new Person();
            console.log("kim.sum()", kim.sum());
            console.log("lee.sum()", lee.sum());
        ���� ��ü�� �ٸ� ���� ���� �Ϸ��� ��� �ؾ� �ұ�?

        ������ ����ߴ� Date �Լ�ó�� ������ �Լ��� ����� �� �Է� ���� �ֵ��� �� �� �ִ�.
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
        �̰��� ��ü�� ���� ����� construct �Լ��� ����� ����̴�.
        
    

*/

function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum() " + kim.sum());
console.log("lee.sum() " + lee.sum());

var d1 =  new Date('2021-08-16');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

console.log('Date', Date);



// console.log('Person()', Person());
// construct

// console.log('new Person()', new Person());