/*
    this?
        앞에서 우리는 객체란 서로 연관된 변수와 함수를 그룹화하여 이름을 붙인 것이라고 배웠다.
        한국어와 영어에 자기 자신을 가리키는 대명사가 있듯이
        프로그래밍에서도 자기 자신을 가리키는 표현이 있는데
        바로 this이다.

        아래와 같이 객체를 만들고 sum 메소드를 호출해보자.
            var kim = {
                name = 'kim'
                first : 10. // 첫번째 게임 점수
                second : 20, // 두번째 게임 점수
                sum: function(f,s){ // 게임 점수 합계 함수
                    return f+s;
                }
            }

            console.log("kim.sum(kim.first,kim.second"), kim.sum(kim.first,kim.second));
        이미 객체 내부에서 first와 second을 알고 있기 때문에
        굳이 한번 더 언급할 필요가 없다.
        sum의 인자를 생략할 수 있도록 this를 이용해 객체를 수정할 수 있다.
        어떤 메소드에서 그 메소드가 속해 있는 객체를 가리키는 특스한 키워드를 this라고 한다.
            var kim{
                name: 'kim',
                first : 10, // 첫번째 게임 점수
                second : 20, // 두번째 게임 점수
                sum:function(){ // 게임 점수 합계 함수
                    return this.first + this.second;
                }
            }

            console.log("kim.sum()",kim.sum());
        this라는 키워트의 의미는 상당히 중요하다.
        this의 의미를 꼭 이해하고 넘어가자.
        
*/  

var k = {
    name:'kim',
    first: 10,
    second: 20,
    sum:function(){
        return this.first+this.second;
    }
}

// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.fitst, kim.second));
console.log("kim.sum(kim.first, kim.second)", k.sum());

