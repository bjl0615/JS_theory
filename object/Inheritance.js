/*
        Person class�� ����� ���ϴ� avg �޼ҵ带 �߰��غ���.
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
        class�� � ����� �߰��ϰ� ������ ���� ���� § �ڵ��
        ������ �� ���� ��쳪 �߰��ϰ� ���� ����� ���� ������ �ʴ� ���
        ��ü �ڵ带 �����ϴ� ���� �δ㽺���� ���� �� �� �ִ�.

        Person�� ��ó�� �ǵ������� ���ο� PersonPlus��� class�� ���� �����غ���.
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

        Person�� ������ PersonPlus�� �ߺ��ǰ� �ִٴ� �ƽ����� �ִ�.
        �ߺ��� �����Ϸ��� ��� �ؾ��ұ�?
        �̸� �����ϰ� ���ִ� ����� �ٷ� ����̴�.
        PersonPlus�� Person�� ����ϵ��� �����غ���.

            class PersonPlus extends Person{ //person�� personPlus�� ��ӵȴ�.
                avg(){
                    return(this.first+this.second)/2;
                }

                var kim = new PersonPlus('kim',10,20);
                console.log("kim.sum()",kim.sum());
                console.log("kim.sum()",kim.avg());
            }
        ���� ������ ����� ������ ���� Ȯ���� �� �ִ�.
        PersonPlus class�� avg �޼ҵ带 ������ ��� ����� Person class���� �������� �ֱ� ������
        Person class�� �����ϸ� PersonPlus�� ����ϴ� ��ü ��ΰ� ����ȴ�.

        �츮�� ����� �̿��� ���� Ŭ������ Ȯ���Ͽ�
        �ߺ��� �����ϰ� �ڵ��� ���� �ٿ����� ���� �ϴ� �ڵ带 �����ϸ�
        ��� �޴� ��� ��ü�鿡 ���ôٹ������� ��ȭ�� �Ͼ������ ���� ������ ������ ������.
        �̰��� ����̴�.
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