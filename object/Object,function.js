/*
    �ڹٽ�ũ��Ʈ���� �Լ��� �ܵ����� ���� ���� �ִ�.
    new�� �տ� ������ ��ü�� ����� �����ڷ� ���� ���� �ְ�
    call,bind �� �����Ӱ� ���� ������ �����Ѵ�.
    �ڹٽ�ũ��Ʈ �Լ��� �پ��� ��� ����� ���ؼ� �˾ƺ���.

    ���� ���� �� ��ü�� �������� ������ sum�̶�� �Լ��� ������.
    �� �� ��ü�� �ٸ� ��ü�� ����ϵ��� __proto__�� �����غ���.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',first:10,second:10}
        lee.__proto__ - kim

        function sum(){
            return this.first+this.second;
        }
    sum�̶�� �Լ��� � ��ü���� ���� ���� ���� ä �����Ǿ�����
    �Ⱬ�ϰԵ� ��ü�� �ȿ� �ִ� first�� second��� �Ӽ��� ���ϴ� ������ �ϰ� �ִ�.
    ��� �� ����� �� �� ������?

    �ڹٽ�ũ��Ʈ�� ��� �Լ��� call�̶�� �޼ҵ带 ������.
    ��� �ڹٽ�ũ��Ʈ������ �Լ��� ��ü�̱� �����̴� ..!
    call �޼ҵ��� ���ڷ� ��ü�� �����ϰ� �Ǹ� �ش� �Լ��� this�� ���ڷ� ���� ��ü�� �ȴ�.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',first:10,second:10}
        lee.__proto__ = kim

        function sum(){
            return this.first + this.second;
        }

        console.log("sum.call(kim)",sum.call(kim)); //sum.call(kim) 30
        console.log("sum.call(lee)",sum.call(lee)); //sum.call(lee) 20
    call�� ���� ���ڸ� ���� �� �ִ�.
    ù��° ���ڴ� this�� ������ ��ü�� ���� �� �ڷδ� �Լ��� ���ڷ� �� ���� ���� �ȴ�.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',first:10,second:10}
        lee.__proto__ = kim

        function sum(prefix){
            return prefix + (this.first+this.second);
        }

        //sum();
        console.log("sum.call(kim)",sum.call(kim,'=>')); //sum.call(kim) => 30
        console.log("sum.call(lee)",sum.call(lee,': ')); //sum.call(lee) : 20
    
    ���ݱ��� ������ �� ���� � �Լ��� this ���� �ٲٴ�, context�� �ٲٴ� call �̶�� �Լ��� ���ؼ� �˾ƺô�. 
    ���� calló�� ������ �� ���� this�� �����ϴ� ���� �ƴ϶�
    ���������� ������Ű�� �ʹٸ� bind�� ����Ѵ�.
    bind�� ȣ���� �Լ��� �����ϴ� ���� �ƴ϶� ���ڷ� ���� ������ �����ϴ� ���ο� �Լ��� �������ش�.
        var kim = {name:'kim',first:10,second:20}
        var lee = {name:'lee',frist:10,second:10}
        lee.__proto__ = kim

        function sum(prefix){
            return prefix+(this.first+this.second);
        }

        //sum();
        console.log("sum.call(kim)",sum.call(kim,'=>'));
        console.log("sum.call(lee)",sum.call(kim,':'));

        var kimSum = sum.bind(kim, '-> ');
        console.log('kimSum()',kimSum());
}
*/

var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',frist:10,second:10}
lee.__proto__ = kim

function sum(prefix){
    return prefix+(this.first+this.second);
}
//sum();
console.log("sum.call(kim)"+sum.call(kim, '=> '));
console.log("sum.call(lee)"+sum.call(lee, ': '));
var kimSum = sum.bind(kim, '-> ');
console.log('kim.Sum()', kimSum());

