/*
    Object.create
        Object.create�� ����ؼ� ��ÿ�� ����ϴ� ���ο� ��ü�� ���� �� �ִ�.
        Object.create�� ���ڷ� �θ�� ������ ��ü�� �־� �ش�.
            var superObj = {superVal:'super'}
            var subObj = Object.create(superObj);
            subObje.subVal = 'sub';

            console.log('subObj.subVal => ' , subObj.subVal);
            console.log('subObj.superVal => ', subObj,superVal);

            subObj.superVal = 'sub';
            console.log('superObj.superVal => ', superObj.superVal);
        debuger�� ����� ��ü�� ����� �� �� �ڼ��� ���캸��.
        ������ hello.html ������ �����Ѵ�.
            <html>
                <body>
                    <script src="prototype-inheritance.js"></script>
                </body>
            </html>
        Object.create�� ������� �� ���¸� ���캸�� ���ؼ� subObj ���� �κ� �Ʒ��� debugger��� �ۼ����ش�.
        debugger Ű����� �ڹٽ�ũ��Ʈ�� �Ͻ� ���� ��ų �� �ְ� ��ü�� �ڼ��� �鿩�� �� �� �ִ�.
            var superObj = {superVal:'sub'}
            // var subObj = Object.create(superObj);
            // subObje.subVal = 'sub';

            var subObj = Object.create(superObj);
            subObj.subVal = 'sub';
            debugger;

            console.log('subObj.subVal => ',subObj.subVal);
            console.log('subObj.superVal => ', subObj.superVal);

            subObj.superVal = 'sub';
            console.log('superObj.superVal => ', superObj.superVal);
        
        
        
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
