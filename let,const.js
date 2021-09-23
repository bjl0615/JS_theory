/*
    ���� ����
        - ����(����) ����, �۷ι�(����) ����
        - ������ �����ϴ� ������?
            - ��ɰ� ������ �ٸ��� ����
        - �۷ι� ������ ���, ����
            - �ٸ� js ���Ͽ��� ������ ����
            - ���Ͽ��� ���� ���� �������� ���
            - �ǵ��� ������ ó�� �ӵ��� ������
        - ���� ������ ���, ����
            - ������ �ĺ��ڸ� �ذ��ϱ� ���� ������ �������� ������ ����Ϸ��� ��
        - var Ű���� ����
    
    �۷ι� ���� ����
        - �۷ι� ������
            - �۷ι� ������Ʈ�� ���� ����
            - var value = 100ó��
            - var Ű���� ����� ����
        - var Ű���带 �ۼ����� ������
            - �۷��� ������ �����ϴµ�
            - �̰��� ����
*/
// "use strice";
value = 100;
function point(){
    value= 300;
    log("�Լ�", value);
};
point();

// 1. var Ű���带 ������� �ʰ� value�� �۷ι� ������ �����ϰ� 100�Ҵ�
// 2. point() �Լ� �ȿ��� value ������ 300�Ҵ� value ������ ���� ������ �ƴϹǷ� �۷ι� ������Ʈ�� value ������ 300 �Ҵ�
// 3. �Լ� �ȿ��� �۷ι� ������ ���� �����ϴ� ���� ���� ����� �ƴϴ�.
// 4. ���� ������ �۷ι� ������ ������ ������ �����ؾ� �Ѵ�.

/*
        - log()�� console.log()�� ��Ī
            - log() ���� ����� [���� ���]�� ǥ��

    use strict ���
        - �Լ� �ȿ���
            - var Ű���带 ������� ������ ���� �߻�
*/
// "use strice";
function point(){
    try{
        value = 300;
    } catch(e){
        log("�۷ι� ���� ��� �Ұ�");
    };
};
point();
/*
        - ES6+
            - "use strict"�� ����Ʈ ����
            - ��ü�� �ƴ�
*/

/*
    function ���
        - function name() {}�� ��� ������
        - function �Ȱ� �ۿ�
            - ���� �̸��� let ���� ���� ����
            - �������� �ٸ��� ����
*/
let sports = "�౸";
function show(){
    let sports = "��";
    log("��: ", sports);
};
show();
log("��: ", sports);
/*
        - function ���� let ������
            - function �ȿ��� ��� ����(Ŭ����)
*/     
let sports = "�౸";
function show(){
    log(sports);
};
show();
/*
    try-catch
        - try-catch ���� ��� ������
        - try ���{} ��������
            - �Ȱ� �ۿ� ���� �̸��� let ���� ���� ����
*/
let sports = "�౸";
try{
    let sports = "��";
    log("�� : ", sports);
} catch(e){};
log("��: ", sports);

// 1. try ����� �Ȱ� �ۿ� let sports�� ����������
// 2. �Ȱ� ���� �������� �ٸ��Ƿ� �������� ���� �����ȴ�.

/*
        - catch()���� try ���� ���� ���
*/
let sports = "�౸";
try{
    let sports = "��";
    log("�� : ", sports);
    abc= error;
} catch(e){
    log("catch: ", sports);
};
log("��: ", sports);
// 1. let sports = "��"; try ��Ͽ��� ���� �Ҵ��Ѵ�.
// 2. abc = error; error ������ �����Ƿ� ������ �߻��Ѵ�.
// 3. log("catch: ", sports) try ��� �ȿ��� ������ sports ���� ������� �ʰ� try ���� sports ���� ����Ѵ�.

/*
    switch-case
        - switch ���� ��� ������
        - switch ��� ��������
            - ���� �̸��� let ���� �ۼ� �Ұ�
*/
let item = 1;
switch (item) {
    case 1: 
        let sportsl
        break;
    case 2:
        // let sports;
    default:
        log(sports);
};

// 1. // let sports;
// 2. switch ��� �ȿ��� let�� ����Ͽ� ������ ������ �ִµ� �ٽ� let�� ����Ͽ� ������ �����ϹǷ� ������ �߻��Ѵ�.
// 3. �׷��� �ּ��� ó���ߴ�.
// 4. ���࿡���� �ƴ϶� ������ ����

/*
    let ���� ����
        - let book = "å";
            - ���block �������� ���� ����
            - ������ ����� ����� ������
        - ������ ���� ����
            - ��� {}, ��, ǥ����
*/
let sports = "�౸";
if(sports){
    let sports = "��";
    log("��: " , sports);
}
log("�� : " , sports);
/*
        - ���{} �Ȱ� ���� �������� �ٸ�
            - ���� �̸��� ���Ƶ� ���� ��ü���� ���� 
    let ���� ����
        - Syntax
            - let name1 [=value1] [,name2 = [value2]]
        - name1, name2�� ���� �̸� �ۼ�
            - �ĺ��ڷ� ���
            - []�� ���� ������ ��Ÿ��
            - ���� �Ҵ����� �ʾƵ� ��
*/
let book;
let one,two;
// 1. let book; ���� �Ҵ����� �ʰ� ������, ������ �� �ִ�. �ʱ갪���� undefined�� �Ҵ�ȴ�.
// 2. let one,two; �޸��� �����Ͽ� �ټ��� ������ �� �ִ�.

/*
        - value1, value2�� �ʱ갪 �ۼ�
            - ǥ���� �ۼ� ����, �� ��� ���
*/
let book = "å";
let one = 1, two = (10+20);
// 1. let book="å";  ������ �����ϰ� �ʱ갪�� �Ҵ��ߴ�.
// 2. let one = 1, two = (10+20); �޸��� �����Ͽ� �ټ��� ������ �����ϰ� ���� �Ҵ��� �����̴�.
// 3. let five = 5, let six = 6; SyntaxError �߻�
// 4. let five = 5, var six = 6; �޸��� �����Ͽ� let�� var�� ���� ����� �� ����.

/*
    ��� ������
        - ��� ����
            - �߰�ȣ { �ڵ� }
            - function name() { �ڵ� }
            - if( a === 1){ �ڵ� }
        - ��� �Ȱ� ���� �������� �ٸ�
            - ���� �̸��� ���Ƶ� ���� ��ü���� ����
*/
let sports = "�౸";
if(sports){
    let sports = "��";
    log("�� : " , sports);
};
log("�� : ", sports);
// 1. if(sports){...} ��� {} �Ȱ� �ۿ� let sports�� �ۼ������� �������� �ٸ��Ƿ�
// 2. �������� ��ü���� �ʰ� �����ȴ�.
// 3. ��� �ȿ��� ��� ���� ������ ������ �� ������
// 4. ��� �ۿ��� ��� ���� ������ ������ �� ����.

let sports = "�౸";
sports = "��";
log(sports);
{
    let sports = "Ź��";
    log(sports);
};

let sports = "�౸";
sports = "��"
log(sports);

{
    let sports = "Ź��";
    log(sports);
};

// 1. sports = "��";  ���������� sports �ĺ��ڸ� �ذ��Ѵ�. �ٷ� �ٿ� �����Ƿ� ���� �Ҵ��Ѵ�.
// 2. let sports = "�豸"; let�� ����Ͽ� ���� �������� ���� �̸��� ������ ������ �� ����.
// 3. { let sports = "Ź��"; } ���()�� ��������� �������� �ٸ��Ƿ� let�� ����Ͽ� ������ ������ �� �ִ�.

/*
        - �������� ���� �̸� ��� �Ұ�
*/

/*
    let ������ var ���� ����
        - for() ������ �ݺ��� ������.
            - var ������ �������� ���� ����
            - let ������ �������� ����

        var ������ ������

            ���� Ŭ��
                - �౸
                - �� 
                - �߱�
            
            **html ����**
            <ul class=sports>
                <li>�౸</li>
                <li>��</li>
                <li>�߱�</li>
            </ul>
*/
var node = document.querySelector(".sports");
for( var k = 0; k < node.children.length; k++){
    node.children[k].onClick = function(event){
        event.target.style.backgroundColor = "yellow";
        log(k);
    };
};
// 1. � ���� Ŭ���ϴ��� �׻� for() ���� ������ ���� ���� 3�� ����Ѵ�.
// 2. var k = 0;���� k ������ �������� �Լ��̴�.

/*
        let ������ ������
            ���� Ŭ��
                    - �౸
                    - �� 
                    - �߱�
                
                **html ����**
                <ul class=sports>
                    <li>�౸</li>
                    <li>��</li>
                    <li>�߱�</li>
                </ul>
*/
var node = document.querySelector(".sports");
for( let k = 0; k < node.children.length; k++){
    node.children[k].onClick = function(event){
        event.target.style.backgroundColor = "yellow";
        log(k);
    };
};
// 1. var k = 0;�� let k = 0; ���� �ٲپ���.
// 2. �̺�Ʈ�� ������ ���� k ���� ����Ѵ�.

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
// 1. strict ��忡�� window.book()ó�� ȣ���ϴ� �Լ� �տ� ������Ʈ�� �ۼ��ؾ� �Ѵ�. �̷��� ���� ������ book() �Լ� �ȿ��� this ���� undefined�̴�.
// 2. ����, getPoint()ó�� window�� ���� �ۼ����� ������ getPoint() �ȿ��� this ���� undefined�̴�.
// 3. �̸� ���ϱ� ���� window.getPoint()�� ȣ���ϸ� window ������Ʈ�� getPoint()�� �����Ƿ� ������ ����.
// 4. strict ����� �Լ����� this�� �������ϱ� ���ؼ��� this�� ������ ������ �� ����ؾ� �ϴµ� ���ŷӴ�.

/*
            - ȭ��ǥ �Լ��� �ذ�
*/
"use strict"
var point = 100;
function sports(){
    const getPoint = () => {
        log(this.point);
    }
    getPoint();
};
window.sports;
// 1. ȭ��ǥ �Լ��� �ۼ��ϸ� getPoint()�� ȣ���� �� �ִ�.
// 2. ����, getPoint() ȭ��ǥ �Լ� �ȿ��� this�� undefined�� �ƴ϶� �۷ι�(window) ������Ʈ�� �����Ѵ�.
// 3. var point = 100�� �ۼ������Ƿ� 100�� ��µȴ�.

/*
        - ȭ��ǥ �Լ����� this�� �۷ι� ������Ʈ ����
            - this���� undefined

    this�� ���� ������ ����
        - ȭ���� �Լ����� ���� �������� this�� ���
        - ����(������Lexical) ��������
            - ������ �ؼ��� ��, ȭ��ǥ �Լ��� ������
            - function ������Ʈ�� �����ϰ�
            - ȭ��ǥ �Լ��� ���� �������� ������ ������Ʈ�� ���ε�
        - ������Ʈ�� ���ε� �� �������� this��
            - ȭ��ǥ �Լ����� this�� ���
*/
var title = "å";
const book = {
    show: () => log(this.title)
};
book.show();
// 1. show() ȭ��ǥ �Լ����� this�� window ������Ʈ�� �����ϴ� ����
// 2. �Լ� �� �������� ������ ����ϵ��� show()�� �������� book ������Ʈ�� ������ �������� this�� ȭ��ǥ �Լ����� this�� ����ϱ� �����̴�.
// 3. book ������Ʈ�� �۷ι� ������Ʈ�� �����ǹǷ� this�� window ������Ʈ�� �����ϰ� �ȴ�.

/*
    let ������ this
        - �۷ι� ������Ʈ����
            - let ������ this�� ���� �Ұ�
*/
var music = "����";
let sports = "�౸";
log(this.music, this.sports);
// 1. ���� ��ġ�� �۷ι� ������Ʈ
// 2. var music = "����"; window ������Ʈ�� �����ȴ�.
// 3. let sports = "�౸"; window ������Ʈ�� �������� �ʴ´�.
// 4. this.music���� this�� window ������Ʈ�� �����ϸ� music�� window ������Ʈ�� �����Ǿ� �����Ƿ� ������ ��µȴ�.
// 5. this.sports���� sports�� window�� �������� �����Ƿ� undefined�� ��µȴ�.

/*
        - �۷ι� ������Ʈ����
            - var�� let ������ �����Ǵ� ��ġ ����

    js ���� �ټ� ���
        - ��� js ���Ͽ���
            - �۷ι� ������Ʈ�� �ۼ��� var ������ let ������ ����
        - ��� �ȿ� �ۼ��ϸ� ������ �ʴ´�.

    �ټ��� js ���� ��� ����
        - �۷ι� ������Ʈ�� �ۼ�
*/
var globalVar = "var ����";
let globalLet = "let ����";
{
    let globalBlock = "bloack����";
};
/*
            - var ���� : window�� ����, ����
            - let ���� : Scriptdp ����, ����
                - window.sports = {}ó�� �ǵ������� �ۼ����� �ʾƵ� ��
            - { let ���� } : Block�� ����, �������� ����
                - �۷ι� ������Ʈ������ ����ϴ� ���� ������ ���
        - �Լ��� �ۼ�
*/
function showLocal(){
    var localVar = "var ����";
    let localLet = "let ����";
    {
        let bloackLet = "block ����";
    };
};
/*
            - var ����, let ���� : Local
            - {let ���� }: Block;
*/