/*  
    (���)
    ��ü ���� ���α׷���
        ��ü ���� ���α׷����� ũ�� �� ���� ��ҷ� �������� �ִ�.
        ù��°�� ��ü�� ������ ����, ���赵��� �� �� �ִ� class�̰�
        �ι�°�� class�� ���� ������� ��ü���� ��ü�� �ִ�.
        
        �� �ΰ����� ��� ��ȣ�ۿ��� �ϴ��Ŀ� ���� ����� �ٸ� ������ ��ü ���� ������ ���������.
        �ַ��� �ڹ��� ��ü ����� �ڹٽ�ũ��Ʈ�� ��ü ������ ����� �ٸ���
    
    �ַ� ��ü ���� ������ ���
        �ڹٿ� ���� ���� sub class�� super class�� ����� ���� �ޱ� ���ؼ��� 
        sub class�� �ƴ� super class�� �ڽ��� �Ǿ�� �Ѵ�.
        �׸��� �̷��� ������� sub class�� ���ؼ� ��ü�� �����س���.

        ���� �� ��ü�� ��� ����� ���� �� �������� class �ܿ��� �����ȴ�.
        ��ü�� �ٸ� ��ü�� ����� �޴� ���� ���� �Ұ����ϴ�.

    �ڹ� ��ũ��Ʈ�� ���
        �ڹٽ�ũ��Ʈ���� class��� Ű����� ������ �̰��� ��Ŀ� �Ұ��ϰ�,
        ���� ���� ����� �ٲ� ���� �ƴϴ�.
        �ڹٽ�ũ��Ʈ�� �̰ͺ��� �� �����Ӱ� �����ϰ� ����� �����Ѵ�.

        ���� � super object�� �ְ� �� ��ü�� ����� ��� �����鼭 ���ο� ����� �߰��ϰ� ���� 
        sub object�� �ִٰ� �غ���.
        sub object�� super object�κ��� �ٷ� ����� ���� �� �ִ�.

        class�� ����� �޴� �������� ����� �޸� �ڹٽ�ũ��Ʈ������ ��ü�� ���� �ٸ� ��ü�� ��� ���� �� �ְ�, �󸶵��� ��� ���踦 �ٲ� �� �ִ�.

        ���� super object�κ��� ����� �ް� �ִ� sub object��
        �ٸ� ��ü�κ��� ����� �ް� �ʹٸ� ��ũ�� �ٲ��ָ� �ȴ�.
        �̷��� ��ũ�� prototype link��� �Ѵ�.
        �׸��� prototype link�� ����Ű�� ��ü�� prototype object��� �Ѵ�.

        �ڹٽ�ũ��Ʈ���� ��ü ������ ��� �ٸ��� ���캸��

        ������ ��ü�� ����� ����غ���.
        _proto_��� prototype link�� ���ؼ� ��ü�� ��� ���� �� �ִ�.
            var superObj = {superVal:'super'}
            var subObj = {subVal : 'sub'}
            subObj.__proto__ = superObj;
            console.log('subObj.subVal =>',subObj.subVal);
            console.log('subObj.superVal =>',subObj.superVal);
        ��ü�� �Ӽ��� �ٲ㵵 __proto__�� �Ӽ��� �ٲ��� �ʴ´�.
        �׷��� ������ subObj,superVal�� ���� �ٲ㵵 superObj.superVal()�� ���� �����ȴ�.
            subObj.superVal = 'sub';
            console.log('superObj.superVal => ',superObj.superVal);
            //superObj.superVal => super

        __proto__�� ����� ��ü�� ��ӹ޴� ��ü�� ����� �޼ҵ带 �߰��غ���.
            kim = {
                name : 'kim',
                first:10, second:20,
                sum:function(){return this.first+this.second}
            }

            lee = {
                name:'lee',
                first:10,second:10,
                avg:function(){
                    return(this.first+this.second)/2;
                }
            }
            lee.__proto__ = kim;
            console.log('lee.sum()', lee.sum());
            console.log('lee.avg()', lee.avg());
        ���� ������ object.create()�� ����� ������.
            kim{
                name:'kim',
                first:10,second:20,
                sum:function(){return this.first+this.second}
            }

            var lee = Object.create(kim);
            lee.name = 'lee';
            lee.first = 10;
            lee.first = 10;
            lee.avg = function(){
                return(this.first+this.second)/2;
            }

            lee.__proto__ = kim;
            console.log('lee.sum()', lee.sum());
            console.log('lee.avg()', lee.avg());



*/

var superObj = {superVal : 'super'}
// var subObj = {subVal : 'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
superObj.subVal = 'sub';
debugger;
console.log('subObj.subVal => ', subObj.subVal); 
console.log('subObj.superVal => ', subObj.superVal); 
subObj.superVal = 'sub';
console.log('superObj.superVal => ', superObj.superVal); 


var kim = {
    name : 'kim',
    fitst : 10,second:20,
    sum:function(){return this.fitst+this.second}
}

// var lee = {
//     name:'lee',
//     first:10,second:10,
//     avg:function(){
//         return (this.first+this.second)/2
//     }
// }
// lee.__proto__ = kim;

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}
console.log('lee.sum() :', lee.sum());
console.log('lee.avg() :', lee.avg());

