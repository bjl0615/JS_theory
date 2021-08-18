/*
        Person class에 평균을 구하는 avg 메소드를 추가해보자.
            class Person{
                construct(name,first,second){
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('construct');
                }
                sum(){
                    return this.first+this.second;
                }
                avg(){
                    return(this.first+this.second)/2;
                }
            }    
        class에 어떤 기능을 추가하고 싶은데 만약 남이 짠 코드라
        수정할 수 없는 경우나 추가하고 싶은 기능이 거의 사용되지 않는 경우
        전체 코드를 수정하는 것은 부담스러운 일이 될 수 있다.

        Person은 이처럼 되돌려놓고 새로운 PersonPlus라는 class를 새로 정의해보자.
            class Person{
                construct(name,first,second){
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    consoloe.log('construct');
                }
                sum(){
                    return this.first + this.second;
                }
            }
            class PersonPlus{
                construct(name,first,second){
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('constructor');
                }
                sum(){
                    return this.first + this.second;
                }
                avg(){
                    return(this.first+tihs.second)/2;
                }
            }
            var kim = new PersonPlus('kim',10,20);
            console.log("kim.sum()",kim.sum());
            console.log("kim.sum()",kim.avg());

        Person의 내용이 PersonPlus에 중복되고 있다는 아쉬움이 있다.
        중복을 제거하려면 어떻게 해야할까?
        이를 가능하게 해주는 기능이 바로 상속이다.
        PersonPlus가 Person을 상속하도록 수정해보자.

            class PersonPlus extends Person{ //person이 personPlus에 상속된다.
                avg(){
                    return(this.first+this.second)/2;
                }

                var kim = new PersonPlus('kim',10,20);
                console.log("kim.sum()",kim.sum());
                console.log("kim.sum()",kim.avg());
            }
        위와 동일한 결과가 나오는 거을 확인할 수 있다.
        PersonPlus class는 avg 메소드를 제외한 모든 기능을 Person class에서 가져오고 있기 때문에
        Person class를 수정하면 PersonPlus를 사용하는 객체 모두가 변경된다.

        우리는 상속을 이용해 기존 클래스를 확장하여
        중복을 제거하고 코드의 양을 줄였으며 공유 하는 코드를 수정하면
        상속 받는 모든 객체들에 동시다발적으로 변화가 일어나도록해 유지 보수의 편리성을 높였다.
        이것이 상속이다.
*/
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
    // avg(){
    //     return (this.first+this.second)/2;
    // }
}

class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}

var kim = new PersonPlus('kim', 10,20);
console.log("kim.sum()",kim.sum());
console.log("kim.avg()",kim.avg());