/*
    배열에서의 반복문
        가장 기본적인 while문을 사용해보자.
        i의 값은 0부터 memberArray의 길이보다 1작은 값까지 증가하기 때문에
        우리는 memberArray에 있는 값을 하나 하나 꺼내올 수 있게 된다.
        console.log을 사용하면 걀과값을 더 보기 좋게 정리할 수 있다.

            var memberArray = ['egoing','graphiite','leezche'];
            consoloe.group('array loop');
            var i = 0;
            while(i < memberArray.length){
                console.log(i, memberArray[i]);
                i = i + 1;
            }
            console.groupEnd('array loop');

    객체에서의 반복문
        배열에서 사용하는 for문과는 문법이 조금 다른 
        for-in 문을 사용해보자.
            console.group('object loop');
            var memberObject = {
                mananger: 'egoing'
                developer: 'grphitte'
                desinger: 'leezche'
            }

            for(var name in memberObject){ //(현재 원소의 이름이 들어갈 변수)in(객체)
                //객체에 있는 원소의 개수만큼 중괄호가 실행된다.
                consoloe.log(name);
            }
            console.log('object loop');
        객체의 각 속성 (객체가 가지고 있는 원소들)을 출력해보자.
            console.group('object loop');
            var memberObject = {
                manager: 'egoing',
                developer: 'grphitte',
                desinger: 'leezche'
            }

            for(var name in memberObject){ //(현재 원소의 이름이 들어갈 변수)in(객체)
                console.log(name, memberObject[name]);
            }

            console.groupEnd('object loop');

*/

var memberArray = ['egoing','graphittie','leezche'];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(memberArray[i]);
    i= i + 1;
}
console.groupEnd('array loop');
var memberObject = {
    manager : 'eoging',
    devleoper : 'graphiite',
    desingner : 'leezche'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');















