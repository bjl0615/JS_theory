/*  
    (계승)
    객체 지향 프로그래밍
        객체 지향 프로그래밍은 크게 두 가지 요소로 나누어져 있다.
        첫번째는 객체를 만들어내는 공장, 설계도라고 할 수 있는 class이고
        두번째는 class를 통해 만들어진 구체적인 객체가 있다.
        
        이 두가지가 어떻게 상호작용을 하느냐에 따라 상당히 다른 형태의 객체 지향 언어들이 만들어진다.
        주류인 자바의 객체 지향과 자바스크립트의 객체 지향은 상당히 다르다
    
    주류 객체 지향 언어에서의 상속
        자바와 같은 언어에서 sub class가 super class의 기능을 물려 받기 위해서는 
        sub class가 아닌 super class의 자식이 되어야 한다.
        그리고 이렇게 만들어진 sub class를 통해서 객체를 생성해낸다.

        따라서 이 객체가 어떠한 기능을 갖게 될 것인지는 class 단에서 결정된다.
        객체가 다른 객체의 상속의 받는 등의 경우는 불가능하다.

    자바 스크립트의 상속
        자바스크립트에도 class라는 키워드는 있지만 이것은 장식에 불과하고,
        내부 동작 방식이 바뀐 것은 아니다.
        자바스크립트는 이것보다 더 자유롭고 복잡하게 상속을 구현한다.

        여기 어떤 super object가 있고 이 객체의 기능을 상속 받으면서 새로운 기능을 추가하고 싶은 
        sub object가 있다고 해보자.
        sub object는 super object로부터 바로 상속을 받을 수 있다.

        class가 상속을 받는 전통적인 방법과 달리 자바스크립트에서는 객체가 직접 다른 객체를 상속 받을 수 있고, 얼마든지 상속 관계를 바꿀 수 있다.

        만약 super object로부터 상속을 받고 있는 sub object가
        다른 객체로부터 상속을 받고 싶다면 링크만 바꿔주면 된다.
        이러한 링크를 prototype link라고 한다.
        그리고 prototype link가 가리키는 객체를 prototype object라고도 한다.

        자바스크립트에서 객체 지향은 어떻게 다른지 살펴보지

        간단한 객체를 만들어 상속해보자.
        _proto_라는 prototype link를 통해서 객체를 상속 받을 수 있다.
            var superObj = {superVal:'super'}
            var subObj = {subVal : 'sub'}
            subObj.__proto__ = superObj;
            console.log('subObj.subVal =>',subObj.subVal);
            console.log('subObj.superVal =>',subObj.superVal);
        객체의 속성을 바꿔도 __proto__의 속성은 바뀌지 않는다.
        그렇기 떄문에 subObj,superVal의 값을 바꿔도 superObj.superVal()의 값은 유지된다.
            subObj.superVal = 'sub';
            console.log('superObj.superVal => ',superObj.superVal);
            //superObj.superVal => super

        __proto__를 사용해 객체를 상속받는 객체를 만들고 메소드를 추가해보자.
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
        같은 내용을 object.create()를 사용해 만들어보자.
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


        기존의 class를 이용한 코드를 다시 살펴보자
            class Perosn{
                constructor(name,first,second){
                    this.name = name;
                    this.first = first;
                    this.second = second;
                }
                sum(){
                    return this.first+this.second;
                }
            }
            class PersonPlus extends Person{
                constructor(name.first.second.third){
                    super(name,first,second);
                    this.third = third;
                }
                sum(){
                    return super.sum()+this.third;
                }
                avg(){
                    return(this.first+this.second+this.third)/3;
                }
            }

            var kim = new PersonPlus('kim',10,20,30);
            console.log("kim.sum()",kim.sum());
            console.log("kim.avg()",kim.avg());
*/

// var superObj = {superVal : 'super'}
// var subObj = {subVal : 'sub'}
// subObj.__proto__ = superObj;
// var subObj = Object.create(superObj);
// superObj.subVal = 'sub';
// debugger;
// console.log('subObj.subVal => ', subObj.subVal); 
// console.log('subObj.superVal => ', subObj.superVal); 
// subObj.superVal = 'sub';
// console.log('superObj.superVal => ', superObj.superVal); 


// var kim = {
//     name : 'kim',
//     fitst : 10,second:20,
//     sum:function(){return this.fitst+this.second}
// }

// var lee = {
//     name:'lee',
//     first:10,second:10,
//     avg:function(){
//         return (this.first+this.second)/2
//     }
// }
// lee.__proto__ = kim;

// var lee = Object.create(kim);
// lee.name = 'lee';
// lee.first = 10;
// lee.second = 10;
// lee.avg = function(){
//     return (this.first+this.second)/2;
// }
// console.log('lee.sum() :', lee.sum());
// console.log('lee.avg() :', lee.avg());

class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second =second;
    }
    sum(){
        return this.first+this.second;
    }
}

class PersonPlus extends Person{
    constructor(name,first,second,third){
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum(){
        return super.sum+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim',10,20,30);
console.log("kim.sum()"+kim.sum());
console.log("kim.avg()"+kim.avg());

