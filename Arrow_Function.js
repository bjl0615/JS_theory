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