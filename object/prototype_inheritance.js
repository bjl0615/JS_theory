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
        �׸��� prototype link�� ����Ű�� ��ü�� prototype object����� �Ѵ�.

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

*/

var superObj = {superVal : 'super'}
var subObj = {subVal : 'sub'}
subObj.__proto__ = superObj;
console.log('subObj.subVal => ', subObj.subVal); 
console.log('subObj.superVal => ', subObj.superVal); 
subObj.superVal = 'sub';
console.log('superObj.superVal => ', superObj.superVal); 