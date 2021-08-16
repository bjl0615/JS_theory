/*
    자바스크립트는 미리 정의된 여러가지 기능을 제공한다.
    날짜와 관련되 기능, 수학과 관련된 기능 등 여러가지 기능들이 존재한다.
    이러한 기능들을 잘 정돈하기 위해서 자바스크립트 개발자들은 객체를 이용하기로 했다.
    예를 들어 Math라는 객체에는 수학과 관련된 여러 함수들이 그룹화되어 있다.
        console.log("Math.PI", Math.PI) //파이 값을 출력을 해준다.
        console.log("Math.randon()", Math.random()); //랜덤 값을 출력한다.
        console.log("Math.floor(3.9), Math.floor(3.9)") //값을 반올림 한다.

    이번에는 우리가 Math 객체의 기능과 똑같은 객체를 직접 만들어 보자.
    객체 안에 포함된 함수를 우리는 메소드라고 부른다.
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
    객체를 사용하지 않는다면 아래와 같은 모습이 될 것이다.
        var MyMath_PI = Math.PI;
        function MyMath_random(){
            return Math.random();
        }
        function MyMath_floor(var){
            return Math.floor(val);
        }
    객체를 사용하면 관련된 기능을 그룹화하여 편히하게 사용할 수 있다.
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