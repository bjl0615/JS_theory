/*
    Object.create
        Object.create를 사용해서 객첼르 상속하는 새로운 객체를 만들 수 있다.
        Object.create의 인자로 부모로 지정할 객체를 넣어 준다.
            var superObj = {superVal:'super'}
            var subObj = Object.create(superObj);
            subObje.subVal = 'sub';

            console.log('subObj.subVal => ' , subObj.subVal);
            console.log('subObj.superVal => ', subObj,superVal);

            subObj.superVal = 'sub';
            console.log('superObj.superVal => ', superObj.superVal);
        debuger를 사용해 객체의 모습을 좀 더 자세히 살펴보자.
        기존의 hello.html 파일을 수정한다.
            <html>
                <body>
                    <script src="prototype-inheritance.js"></script>
                </body>
            </html>
        Object.create가 실행됐을 때 상태를 살펴보기 위해서 subObj 생성 부분 아래에 debugger라고 작성해준다.
        debugger 키워드로 자바스크립트를 일시 중지 시킬 수 있고 객체를 자세히 들여다 볼 수 있다.
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
