/*
    async & await란?
        async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이다.
        기존의 비동기 처리 방식은 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성 할 수 있게 도와준다.

    개발자에게 읽기 좋은 코드란?
        처음 프로그래밍을 배웠을 때 아래와 같이 변수와 조건문을 사용했던 기억이 날거디.
*/
var user = {
    id : 1,
    name : 'Josh'
};
if(user.id === 1) {
    console.log(user.name);
}

/*
    이 코드는 user라는 변수에 객체를 할당한 뒤 조건문으로 사용자의 아이디를 확인하고 콘솔에 사용자의 name을 찍는 간단한 코드이다.
    우리는 이렇게 위에서부터 아래로 한 줄 한 줄 차근히 읽으면서 사고하는 것이 편하다.

    이렇게 이해한 방식대로 코드르 구성하는 것이 async, await 문법의 목적이다. 
*/
var user = fetchUser('domiain.com/user/1');
if(user.id === 1) {
    console.log(user.name);
}
/*
        fetchUSer()라는 메서드를 호출하면 앞에서 봤던 코드처럼 사용자 객체를 반환한다고 해보자.
        그리고 여기서 fetchUser() 메서드가 서버에서 사용자 정보를 가져오는 HTTP 통신 코드라고 가정한다면 위 코드는 async & await 문법이 적용된 형태라고 보면 된다.
    async & aswait 맛보기
         먼저 앞에서 살펴본 코드를 logName() 이라는 간단한 함수로 감싸봤다.
*/
    function logName() {
        var user = fetchUser('domain.com/user/1');
        if (user.id === 1 ){
            console.log(user.name);
        }
    }
/*
        이제 위 함수를 실행하면 아까와 동일하게 코드가 동작할 것이다. 
        그리고 여기서 아래와 같이 async와 await를 추가해주면 
*/
    async function logName() {
        var user = await fetchUser('domain.com/user/1');
        if(user.id === 1) {
            console.log(user.name);
        }
    }

/*
        이게 바로 async await 코드이다.

    async & await 적용된 코드와 그렇지 않은 코드
*/
function logName() {
    var user = fetchUser('domain.com/users/1 ');
    if(user.id === 1) {
        console.log(user.name);
    }
}
/*
        여기서 fetchUser()라고 하는 코드는 서버에서 데이터 받아오는 HTTP 통신 코드라고 가정 했다.
        일반적으로 자바스크립트의 비동기 처리 코드는 아래와 같이 콜백을 사용해야지 코드의 실행 순서를 보장 받을 수 있다.
*/
function logName() {
    // 아래의 user 변수는 위의 코드와 비교하기 위해 일부러 남겨놓았다.
    var user = fetchUser('domain.com/users/1', function(user) {
        if(user.id === 1) {
            console.log(user.name);
        }
    });
}
/*
        위와 같이 콜백으로 비동기 처리 코들르 작상하는 게 익숙한 사람이면 문제가 없지만,
        이 사고방식에 익숙하지 않으면 어려울 것이다.
*/

// 비동기 처리를 콜백으로 안해도 된다면..
function logName() {
    var user = fetchUser('domain.com/users/1');
    if(user.id === 1) {
        console.log(user.name);
    }
}

/*
    서버에 사용자 데이터를 불러와서 변수에 담고, 사용자 아이디가 1이면 사용자 이름을 출력한다.

    이렇게 하려면 async await만 붙이면 된다.
*/

// async & await 적용 후  
async function logName()  {
    var user = await fetchUser('domain.com/users/1');
    if(user.id === 1) {
        console.log(user.name);
    }
} 

/*
    async & await 기본 문법
        이제 async와 await의 기본 문법을 알아보자.

        async function 힘수먕() {
            await 비동기_처리_메서드_명();
        }
        
        먼저 함수의 앞에 async 라는 예약어를 붙인다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙인다.
        여기서 주의해야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 움직인다.

        일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios등 프로미스를 반환하는 API 호출 함수이다.

    async & await 간단한 예제
        그럼 문법을 좀 더 정확하게 이해하기 위해서 간단한 async await 코드를 써보자.
*/
function fetchItems() {
    return new Promise(function(resolove, reject) {
        var items = [1,2,3];
        resolove(items)
    });
}

async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems); // [1,2,3]
}

/*
    먼저 fetchItems() 함수는 프로미스 객체를 반환하는 함수이다. 프로미스는 "자바스크립트 비동기처리를 위한 객체" 라고 알고있다.
    fetchItems() 함수를 실행하면 프로미스가 이행(Resolved)되먀 결과 값은 items 배열이 된다.

    그리고 이제 logItems() 함수를 보자. logItems()함수를 실행하면 fetchItems() 함수의 결과 값인 items 배열이 resultItems 변수에 담긴다.
    따라서, 콘솔에는 [1,2,3]이 출력된다.

    await를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 .then()등을 사용해야 했을 것이다.
    하지만 async await 문법 덕택에 비동기에 대한 사고를 하지 않아도 되는 것 이다.

    ※참고: 만약 위 코드가 왜 비동기 처리 코드인지 잘 이해가 안 간다면 fetchItems()를 아래의 함수들로 바꿔서 실행해봐도 괜찮다.
*/

// HTTP 통신 동작을 모방한 코드
function fetchItems() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var items = [1,2,3];
            resolve(items)
        }, 3000);
    });
}

// jQuert ajax 코드
function fetchItems() {
    return new Promis(function(resolce, reject) {
        $.ajax('domain.com/items', function(response){
            resolve(response);
        });
    });
}

