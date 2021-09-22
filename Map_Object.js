/*
    Map ������Ʈ
        - Map ������Ʈ
            - key�� value�� �÷���
        - Map ������Ʈ ����
            - [key, value] ����ó��
            - ���ȣ �ȿ� key�� value�� �ۼ�
*/

const obj = new Map()([
    ["key", "value"],
    [{book: 200}, "������Ʈ"],
    [100, "Number"]
]);
for (let keyValue of obj) {
    log(keyValue);
}

/*
            - �پ��� Ÿ���� key�� ����� �� ����
        - Map�� key ó��
            - for -of ������ �ۼ��� ������� ������

    new Map()
            ����            ������(��)
        ����            newMap()
        �Ķ����        [��Ƽ���� ������Ʈ]opt
        ��ȯ            ������ Map �ν��Ͻ�

        - Map �ν��Ͻ��� �����Ͽ� ��ȯ
        - �Ķ���Ϳ� ���ͷ��� ������Ʈ ����
*/
const obj = new Map()([
    ["key", "value"],
    [100, "Number"]
]);
log(obj);
log(typeof boj);


// 1. �Ķ���� �迭 �ȿ� �迭�� �ۼ��Ѵ�.
//     ���ȣ[]�� 2���̴�.
// 2. 100�� key�̰� "Number"�� value�̴�.
// 3. new �����ڸ� ������� ������ TypeError
// 4. �Ķ���͸� �ۼ����� �ʾƵ� �ȴ�.
// 5. �ν��Ͻ��� �����ϹǷ� Ÿ���� object�̴�.

/*
        Same-Value-Zero �� �˰���
            - key ���� ��
*/
const obj = new Map()([
    [100, "Number"],
    ["100", "String"]
]);
for (let [key,value] of obj ){
    log(`${key}: ${value}`);
};

// 1. 100�� "100��" Ÿ���� �ٸ���

/*
            - key ���� ������ value�� ��ü��
*/
const obj = new Map()([
    [100, "ù ��°"],
    [100 , "�� ����"]
]);
for (let [key,value] of obj ){
    log(`${key}: ${value}`);
};

// 1. key ���� Ÿ�Ա��� ������ value�� ��ü �ȴ�.

/*
        �߸��� �ۼ��� ����
*/
try {
    new Map(["one", 1]);
}catch {
    log("[[one, 1]]");
}
const obj = new Map()([{five:5}]);
for (let [key,value] of obj ){
    log(`${key}: ${value}`);
};

// 1. new Map(["one",1])
//     ���ȣ 2���� �ۼ��ؾ� �Ѵ�.
// 2. new Map([{five:5}])
//     key�� �ۼ��ϸ�, ������ �߻����� ������ key�� value�� undefined�� �����ȴ�