/*
    Arrow Function
        - Arrow�� ������ �ǹ�
            - ȭ��, Ȱ��ǥ =>
        - �ڵ� ����
            - (param) => {�Լ� �ڵ�}
*/
const add = function(one, two){
    return one + two; 
}
log(add(1,2));

const total = (one,two) => {
    return one + two;
};

log(total(1,2));

// 1. function Ű���� ��ſ� Ȱ��ǥ => ���
// 2. =>ǥ ���ʿ� ���� �ۼ� ����

/*
        - function(){}�� ��� ����������
            - ����� ���׵� ����(this ������ �ٸ�)
        - ȭ��ǥ �Լ��� �������� �Լ��� ������ �ʿ��� ��
            - �������� ���¸� �Ϲ� �Լ���� �θ�
    
    �Լ� ��� ���
        - �Լ� ��ϰ� return �ۼ� ����
*/
const total = (one,two) => one + two;
log(total(1,2));
// 1. �Լ� ���{}�� return�� ������ ���·� {return one+two}�� ����.
// 2. => �տ��� ���� �и��ϸ� SyntaxError
// 3. => �ڿ����� ���� �и��� �� �ִ�. 
// (one,two) => 
// one + two;

/*
        - �Լ� ���{}�� �ۼ��� ����
*/
const total = (one) => {};
log(total(1));
// 1. �Լ� ���{}�� �ۼ��ϸ� undefined ��ȯ
// 2. �Լ� ���� return�� �ۼ����� ���� �Ͱ� ����
// 3. return�� �ۼ����� ������ ����Ʈ�� undefined�� ��ȯ�Ѵ�.
// 4. ȭ��ǥ �Լ��̱� ������ �ƴ϶� JS�����̴�.

/*
        - {ket:value}�� ��ȯ�ϴ� ����
*/
const point = (param) => ({book: param});
const result = point("å");
for (const key in result ){
    log(key + " : " + result[key]);
}
// 1. {key:value}�� �Ұ�ȣ()�� ���θ� {key:value}�� ��ȯ�Ѵ�.
// 2. �Ұ�ȣ()�� �ۼ����� ������ undefined�� ��ȯ�Ѵ�.

/*
    �Ķ���� ���
        - �Ķ���Ͱ� �ϳ��� ��
*/
const get = param => param + 20;
log(get(10));
// 1. �Ķ���Ͱ� �ϳ��̸� (param)���� �Ұ�ȣň ������ �� �ִ�.
// 2. get(10)���� 10�� param�� �����ȴ�.

/*
        - �Ķ���Ͱ� ������ �Ұ�ȣ�� �ۼ�
*/
const get = () => 10 + 20;
log(get());
// 1. �Ķ���Ͱ� ������ �Ұ�ȣ�� ������ �� �ִ�.'

/*
    ȭ��ǥ �Լ� ����
        - fucntion�� =>�� ǥ���ϴ� ���� ���ΰ� �ƴ�
        - ȭ��ǥ �Լ��� �Ϲ� �Լ��� ������ �ٸ�
*/
const book = function(){
    return 100;
}
// 1. �����ʿ� book�� �����ϸ� 
//     -prototype�� constructor�� �ִ�.

const point = () => 100;
// 1. �������� point�� �����ϸ�
//     - prototype�� constructor�� ����.
// 2. prototype�� �޼ҵ带 �����Ͽ� Ȯ���Ҽ� ����.
// 3. prototype�� �����Ƿ� �׸�ŭ ������.
// 4. new �����ڷ� �ν��Ͻ��� ������ �� ����.
// 5. �̰��� ȭ��ǥ �Լ��� Ư���̸� �뵵�̴�.

/*
    arguments ���Ұ�
        - arguments ����� �� ����
        - arguments ��ſ� rest �Ķ���� ���
*/
{
    const point = () => {
        try{
            const args = arguments;
        } catch(error){
            console.log("arguments ��� �Ұ�");
        };
    };
    point(10,20);

    // 1. point(10,20) ���·� ȣ���ϸ� 
    //     - �Ϲ� �Լ��ּҴ� arguments�� 10,20�� ���� ������.
    // 2. ȭ��ǥ �Լ����� ReferenceError�� �߻��Ѵ�.
    //     - ��, arguments�� ����Ҽ� ����.
    // 3. �������� point �Լ� ������ �����ϸ� 
    //     - arguments�� ǥ�ô� �ȴ�.
}

/*
    ȭ��ǥ �Լ��� this
        - strict ��忡�� �Լ��� ȣ���� ��
            - �Լ� �տ� ������Ʈ �ۼ��� �ʼ�
*/
"use strict"
function book(){
    function getPoint(){
        log(this);
    }
    getPoint();
};
window.book;
// 1. strict ��忡���� window.book()ó�� ȣ���ϴ� �Լ� �տ� ������Ʈ�� �ۼ��ؾ� �Ѵ�. �̷��� ���� ������ book() �Լ� �ȿ��� this ���� undefined�̴�.
// 2. ����, getPoint()ó�� window�� �տ� �ۼ����� ������ getPoint() �ȿ��� this ���� undefined�̴�.
// 3. �̸� ���ϱ� ���� window getPoint()�� ȣ���ϸ� window ������Ʈ�� getPoint()�� �����Ƿ� ������ ����.
// 4. strict ����� �Լ����� this�� �����ϱ� ���ؼ��� this�� ������ ������ �� ����ؾ� �ϴ� ���ŷӴ�.

/*
            - ȭ��ǥ �Լ��� �ذ�
*/
"use strict"
var point = 100;
function sports(){
    const getPoint = () => {
        log(this.point);
    };
    getPoint();
};
window.sports();
// 1. ȭ��ǥ �Լ��� �ۼ��ϸ� getPoint()�� ȣ���� �� �ִ�.
// 2. ����, getPoint() ȭ��ǥ �Լ� �ȿ��� this�� undefined�� �ƴ϶� �۷ι�(window) ������Ʈ�� �����Ѵ�.
// 3. var point = 100�� �ۼ������Ƿ� 100�� ��µȴ�.

/*
        - ȭ��ǥ �Լ����� this�� �۷ι� ������Ʈ ����
    this�� ���� ������ ����
        - ȭ��ǥ �Լ����� ���� �������� this�� ���
        - ����(������Lexical) ��������
            - ������ �ؼ��� ��, ȭ��ǥ �Լ��� ������
            - function ������Ʈ�� �����ϰ�
            - ȭ��ǥ �Լ��� ���� �������� ������ ������Ʈ�� ���ε�
        - ������Ʈ�� ���ε��� �������� this�� 
            - ȭ��ǥ �Լ����� this�� ���        
*/
var title = "å";
const book = {
    show: () => log(this.title)
};
book.show();