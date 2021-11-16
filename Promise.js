/*
    프로미스를 알기전 비동기 처리가 무엇인지 어떻게 사용 되는지 부터 알아야 된다.
    
    비동기 처리란?
        자바스크립트의 비동기 처리한 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성이다.

    비동기 처리의 첫 번째 사례
        비동기 처리의 가장 흔한 사례는 제이쿼리의 ajax이다. 제이쿼리로 실제 웹 서비스를 개발할때 
        ajax 통신을 빼놓을 수가 없다. 보통 화면에 표실할 이미지나 데이터를 서버에서 불러와 표시해야 하는데
        이때 ajax 통신으로 해당 데이터를 서버로부터 가져올 수 있기 때문이다.

        그럼 ajax 코드를 잠깐 보자
*/
function getData() {
    var tableData;
    $.get('https://domain.com/products/1', function(response) {
        tableData = response;
    });
    return tableData;
}

console.log(tableData); //undefined

/*
        여기서 $.get()이 ajax 통신을 하는 부분이다. 
        https://domain.com 에다가 HTTP GET 요첫을 날려 1번 상품(product) 정보를 요청하는 코드다.
        좀 더 쉽게 말하면 지정된 URL에 '데이터를 하나 보내주세요' 라는 요청을 날리는 것과 같다.

        그렇게 서버에서 받아온 데이터는 response 인지아 담긴다. 그리고 tableData = response; 코드로 받아온 데이터를
        tableData라는 변수에 저장한다 그럼 이제 이 getData()를 호출하면 어떻게 될까?
        받아온 데이터가 뭐든 일단 뭔가 찍혀야 된다. 근데 결과는 맨 아레에서 보는 것과 같이 undefined이다. 왜 그럴까?

        이렇게 특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 바로 비동기 처리이다.
        자바스크립트에서 비동기 처리가 필요한 이유를 생각해보면, 화면에서 서버로 데이터를 요청했을 때 서버가 언제 그 요청에 대한 응답을 줄지도 모르는데 마냥 다른 코드를 실행 안 하고 기다릴 순 없기 때문이다.
        위에선 간단한 요청 1개만 보냈는데 만약 100개 보낸다고 생각해보면.
        비동기 처리가 아니고 동기 처리라면 코드 실행하고 기다리고, 실행하고 기다리고.. 아마 웹 애플리케이션을 실행하는데 수십 분은 걸릴 것이다.

    콜백 함수로 비동기 처리 방식의 문제점 해결하기
        앞에서 자바스크립트 비동기 처리 방식에 의해 여기될 수 있는 문제들을 보았다.
        이러한 문제들은 어떻게 해결할 수 있을까?
        바로 콜백(callback) 함수를 이용하는 것이다.
            콜백 함수란?
                CallBack 함수란 이름 그대로 나중에 호출되는 함수를 말한다.
                콜백 함수는 코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 동록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.
                즉 콜백함수는 콜백함수라는 유니크한 문법적 특징을 가지고 있는 것이 아니라, 호출방식에 의한 구분이다.

                대표적인 콜백 함수의 사용 예로는 자바스크립트에서 이벤트 핸들러 처리이다.

                <button id="button1" onclick="button1_click();">버튼1</button>
                    <script>
                    function button1_click() {
                        alert("버튼1을 누르셨습니다.");
                    }
                    </script>

                Html에 onclick에 button1_click함수는 브라우저의 javascript API에서 DOM 이벤트 핸들러에 전달(등록)되고, 해당 버튼에 클릭이벤트가 발생했을 이벤트 핸들러가 콜백함수를 호출한다.

                    $( "#target" ).click(function() {
                        alert( "Handler for .click() called." );
                    });
                위처럼 Jquery에서도 콜백함수를 자주 사용하게 된다.

                콜백함수란 특정함수에 전달되어 특정함수가 어떤조건에 의해 호출하는 함수라고 후려칠수 있겠다.
*/
function getData(callbackFunc) {
    $.get('https://domain.com/products/1', function(response) {
        callbackFunc(response) // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
    }) 
}

getData(function(tableData) {
    console.log(tableData); // $.get()의 response 값이 tableData에 전달 됨
})

// 이렇게 콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행 시킬 수 있다.
/*
    비유로 이해하는 콜백 함수 동작 방식
        콜백 함수의 동작 방식은 일종의 식당 자리 예약과 같다.
        일반적으로 맛집을 가면 사람이 많아 자리가 없다. 그래서 대기자 명단에 이름을 쓴 다음ㅇ ㅔ다음에 자리가 날 때까지 주변 식당을 돌아다닌다.
        만약 식당에 자리가 생기면 전화로 자리가 났다고 연락이 온다.
        그 전화를 받는 시점이 여기서의 콜백 함수가 호출되는 시점과 같다. 
        손님 입장에서는 자리가 날 떄까지 식당에서 기다리지 않고 근처 가게에서 잠깐 쇼핑을 할 수도 있고 아니면 다른 식당 자리를 알아볼 수도 있다.

        자리가 났을 때만 연락이 오기 때문에 미리 가서 기다릴 필요도 없고, 직접 식당 안에 들어가서 자리가 비어 있는지 확인할 필요도 없디.
        자리가 준비된 심점, 즉 데이터가 준비된 시점에서만 우리가 원하는 원하는 동작(자리에 앉는다, 특정 값을 출략한다 등)을 수행할 수 있다.

    콜백 지옥 (Callback hell)
        콜백 지옥은 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제이다.
        아마 아래와 같은 코드를 본 적이 있을 것이다. 
*/
$.get('url', function(response) {
    paeseValue(response, function(id) {
        auth(id , function(result) {
            display(result, function(text) {
                console.log(text);
            })
        })
    })
})

/*
        웹 서비스를 개발하다 보면 서버에서 데이터를 받아와 화면에 표시하기까지 인코딩, 사용자 인증 등을 처리해야 하는 경우가 있다.
        만약 이 모든 과정을 비동기로 처리해야 한다고 하면 위와 같이 콜백 안에 콜백을 계속 무는 형식으로 코딩을 하게 된다.
        이러한 코드 구조는 가독성도 떨어지고 로직을 변경하기도 어렵다. 이와 같은 코드 구조를 콜백 지옥이라고 한다.

    콜백 지옥을 해결하는 방법
        일반적으로 콜백 지옥을 해결하는 방법에는 Promise나 Async를 사용하는 방법이 있다.
        만약 코딩 패턴으로만 콜백 지옥을 해걀하려면 아래와 같이 각 콜백 함수를 분리해주면 된다.
*/
function paeseValueDone(id) {
    auth(id, authDone);
} 
function authDone(result) {
    display(result, diplatDone);
}
function displayDone(text) {
    console.log(text);
}
$.get('url', function(response) {
    paeseValue(response. paeseValueDone);
})

/*
    위 코드는 앞의 콜백 지옥 예식를 개선한 코드이다.
    중첩해서 선언했던 콜백 익명 함수를 각각의 함수로 구분하였다. 정리된 코드를 간단하게 살펴보자.
    먼저 ajax 통신으로 받은 데이터를 paeseValue() 메서드로 파싱 한다.
    parseValueDone()에 파싱 한 결과값은 id가 잔달되고 auth() 메서드가 실행된다.
    auth() 메서드로 인증을 고치고 나면 콜백 함수 authDon() 이 실행 된다. 인증 결과 값인 result로 display()를 호출하면 마지막으로 displayDone() 메서드가 수행되면서 text가 콘솔에 출력도니다.

    Promise란?
        프로마스는 자바스크립트 비동기 처리에 사용되는 객체이다. 

    Promise가 필요한 이유
         프로미스는 주로 서버에서 받아온 데이터를 화면에 표실할 때 사용한다.
         일반적으로 웹 애플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 
         아래와 같은 API를 사용한다.
*/
$.get('url 주소/pruduct/1', function(response) {

});

/*
    위 API가 실행되면 서버에다가 '데이터 하나 보내주세요'라는 요청을 보낸다.
    그런데 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 
    데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜬다. 
    이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스이다.

    프로미스 코드 - 기초
        그럼 프로미스가 어떻게 동작하는지 이해하기 위해 예제 코드를 보자 먼저 아래 코드는 간단한 ajax 통신 코드이다.
*/
function getData(callbackFunc) {
    $.get('url 주소/product/1' , function(reponse){
        callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
    });
}

getData(function(tableData) {
    console.log(tableData);  // $.get()의 response 값이 tableData에 전달 됨
})

/*
    위 코드는 제이쿼리의 ajax 통신 API를 이용하여 지정된 utl에서 1번 상품 데이터를 받아오는 코드이다.
    비동기 처리를 위해 프로미스 대신에 콜백 함수를 사용했다.

    위 코드에 프로미스를 적용하면 아래와 같은 코드가 된다.
*/
function getData(callback) {
    // new Promise() 추가
    return new Promise(function(resolve, reject) {
        $.get('url 주소/product/1' , function(response) {
            // 데이터를 받으면 resolve() 호출
            resolve(response);
        });
    });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
    // resolve() 의 결과 값이 여기로 전달 됨
    console.log(tableData) // $.get()의 response 값이 tableData에 전달 됨
});

/*
    콜백 함수로 처리하던 구조에서 new Promise(), resolve(), then()와 같은 프로미스 API를 사용한 구조로 비뀌었
    다. 여기서 new Promise()는 좀 이해가 가는데 resolve(), then() 은 뭐하는 것일 까? 

    프로미스의 3가지 상태(states)
        프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)이다.
        여기서 말하는 상태란 프로미스의 처리 과정을 의미한다.
        new Promist()로 프로미스를 생성하고 종료될 때 3가지 상태를 갖는다.
            - Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
            - Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
            - Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
        Pending(대기)
            먼저 아래와 같이 new Promise() 메서드를 호출하면 대기(Pending) 상태가 된다. 
*/
new Promise();

/*
    new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve, reject이다.
*/
new Promise(function(resolve, reject) {
    // ...
  });

  /*
    Fulfilled(이행)
        여기서 콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 된다.
  */
 new Promise(function(resolve, reject) {
     resolve();
 })

 /*
    그리고 이행 상태가 되면 아래와 같이 then()을 이용하여 처리 결과 값을 받을 수 있다.
 */
function getData() {
    return new Promise(function(resolve, reject) {
        var data = 100;
        resolve(data);
    });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolveData){
    console.log(resolveData); // 100
})
// ※ 프로미스의 '이행' 상태를 좀 다르게 표현해보면 '완료' 이다.

/*
    Rejected(실패)
        new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다고 했다.
        여기서 reject를 아래와 같이 호출하면 실해(Rejected) 상태가 된다.
*/
new Promise(function(resolve, reject) {
    reject();
});

// 그리고, 실패 상태가 되면 실피한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있다.
function getData() {
    return new Promise(function(resolve, reject) {
        reject(new Error("Request is failed"));
    });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function(err) {
    console.log(err); // Error : Request is failed
})
