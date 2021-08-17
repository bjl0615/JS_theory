/*
    Prototype
        프로토타입을 번역하자면 원형이라는 뜻으로 볼 수 있다.
        자바스크립에서 프로토타입은 중급에서 고급으로 넘어가는 길목에있다고 할 수 있을 정도로
        중요한 개념이며 자바스크립트를 Prototype language라고 한다.

        코드를 한 번 보자
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
        저번에 만든 생성자 함수에서는 새로운 객체가 생설될 때 마다
        sum이라는 내부 매소드가 새롭게 생성되고 있다.
        그만큼 메모리 낭비가 발생해 성능이 떨어지게 된다.

        또 sum이라는 메소드의 내용을 수정하고 싶을 경우
        만들어진 객체만큼 수정 작업을 반복해야한다는 문제가 있다.
        즉 생산성이 떨어지게 된다.

        만약 Person 이라는 생성자를 이용해서 만든 모든 객체가 공통적으로 사용하는
        함수를 만들 수 있다면 어떨까? 또 공통적으로 사용하는 속성을 만들 수 있다면 어떨끼?
        
        
*/