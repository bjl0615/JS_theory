/*
    �ڹٽ�ũ��Ʈ�� �̸� ���ǵ� �������� ����� �����Ѵ�.
    ��¥�� ���õ� ���, ���а� ���õ� ��� �� �������� ��ɵ��� �����Ѵ�.
    �̷��� ��ɵ��� �� �����ϱ� ���ؼ� �ڹٽ�ũ��Ʈ �����ڵ��� ��ü�� �̿��ϱ�� �ߴ�.
    ���� ��� Math��� ��ü���� ���а� ���õ� ���� �Լ����� �׷�ȭ�Ǿ� �ִ�.
        console.log("Math.PI", Math.PI) //���� ���� ����� ���ش�.
        console.log("Math.randon()", Math.random()); //���� ���� ����Ѵ�.
        console.log("Math.floor(3.9), Math.floor(3.9)") //���� �ݿø� �Ѵ�.

    �̹����� �츮�� Math ��ü�� ��ɰ� �Ȱ��� ��ü�� ���� ����� ����.
    ��ü �ȿ� ���Ե� �Լ��� �츮�� �޼ҵ��� �θ���.
        var MyMath = {
            PI : Math.PI,
            random:function(){
                return Math.random();
            }
            floor:function(val){
                return Math.floor(val);
            }
        }

        console.log("MyMath.PI", MyMath.PI);
        console.log("MyMath.random()", MyMath.random());
        console.log("MyMath.floor(3.9)", MyMath.floor(3.9));
    ��ü�� ������� �ʴ´ٸ� �Ʒ��� ���� ����� �� ���̴�.
        var MyMath_PI = Math.PI;
        function MyMath_random(){
            return Math.random();
        }
        function MyMath_floor(var){
            return Math.floor(val);
        }
    ��ü�� ����ϸ� ���õ� ����� �׷�ȭ�Ͽ� �����ϰ� ����� �� �ִ�.
*/

console.log("Math.PI", Math.PI);
console.log("Math.random()",Math.random()); //method
console.log("Math.floor(3.9)", Math.floor(3.9));

var MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}