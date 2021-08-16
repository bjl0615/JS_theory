/*
        construct의 뜻은 건설또는 작성이다.
        지금까지 우리는 객체를 하나 수작업으로 만들어 왔다.
        만약 프로그래밍적으로 객체를 찍어내는 공장이 있어서
        우리가 객체를 양산할 수 있다면 어떨까?

        이전에 만들었던 코드에 객체를 추가해보자
            var kim = {
                name : 'kim',
                first : 10,
                second : 20,
                sum:function(){
                    return this.fist_this.second;
                }
            }

            var lee = {
                name:'lee',
                first : 10,
                sceond : 20,
                sum:function(){
                    return this.first+this.second;
                }
            }

            console.log("kim.sum()",kim.sum());
            console.log("lee.sum()",lee.sum());
        프로그래밍 상으로 문제는 없지만 객체 내부의 내용이 바뀌면
        같은 동작을 하는 모든 객체의 내용을 바꿔야한다는 단점이 있다.

        자바스크립트 내장 객체에는 시간과 관련된 data 객체가 있다.
        new 키워드를 사용하여 새로운 Date 객체를 생성해보자.
            var d1 = new Date('2019-4-10'); //2019년 4월 10일의 값을 가지는 Date 객체를 생성한다.
            console.log('d1.getFullYear()',d1.getFullYear()); //해당 객체의 년도를 출력해준다.
            console.log('d1.getMethod()',d1.getMonth()); //0부터 카운트하여 해당 객체의 월을 출력해준다.
        이처럼 객체를 만드는 공장이 있다면 원하는 값을 가지는
        객체를 양산해낼 수 있게 된다.
    
    생성자
        객체 생성 함수를 만들어보자.
            function Person(){
                this.name = 'kim';
                this.first = 10;
                this.second = 20;
                this.third = 30;
                this.sum = function(){
                    return this.first + this.second + this.third;
                }
            }

            console.log('Person()'Person()); // undefined
            console.log('new Person()'new Person()); // 객체 생성
        그냥 함수를 호출할 경우 일반 함수 취급되지만
        new 라는 키워드를 붙일 경우 객체를 생성하는 생성자가 된다.
        생성자를 constructor라고 한다.

        생성자를 이용해 새로운 객체를 생성해보자
            var kim = new Person();
            var lee = new Person();
            console.log("kim.sum()", kim.sum());
            console.log("lee.sum()", lee.sum());
        각각 객체가 다른 값을 갖게 하려면 어떻게 해야 할까?

        이전에 사용했던 Date 함수처럼 생성자 함수가 실행될 때 입력 값을 주도록 할 수 있다.
            function Person(name,first,second,third){
                this.name = name;
                this.first = first;
                this.second = second;
                this.third = third;
                this.sum = function(){
                    return this.first + this.second + this.third;
                }
            }

            var kim = new Person('kim',10,20,30);
            var lee = new Person('lee',10,10,10);
        이것이 객체르 찍어내는 방법인 construct 함수를 만드는 방법이다.
        
    

*/

function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum() " + kim.sum());
console.log("lee.sum() " + lee.sum());

var d1 =  new Date('2021-08-16');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

console.log('Date', Date);



// console.log('Person()', Person());
// construct

// console.log('new Person()', new Person());