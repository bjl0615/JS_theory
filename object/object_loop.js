/*
    �迭������ �ݺ���
        ���� �⺻���� while���� ����غ���.
        i�� ���� 0���� memberArray�� ���̺��� 1���� ������ �����ϱ� ������
        �츮�� memberArray�� �ִ� ���� �ϳ� �ϳ� ������ �� �ְ� �ȴ�.
        console.log�� ����ϸ� �������� �� ���� ���� ������ �� �ִ�.

            var memberArray = ['egoing','graphiite','leezche'];
            consoloe.group('array loop');
            var i = 0;
            while(i < memberArray.length){
                console.log(i, memberArray[i]);
                i = i + 1;
            }
            console.groupEnd('array loop');

    ��ü������ �ݺ���
        �迭���� ����ϴ� for������ ������ ���� �ٸ� 
        for-in ���� ����غ���.
            console.group('object loop');
            var memberObject = {
                mananger: 'egoing'
                developer: 'grphitte'
                desinger: 'leezche'
            }

            for(var name in memberObject){ //(���� ������ �̸��� �� ����)in(��ü)
                //��ü�� �ִ� ������ ������ŭ �߰�ȣ�� ����ȴ�.
                consoloe.log(name);
            }
            console.log('object loop');
        ��ü�� �� �Ӽ� (��ü�� ������ �ִ� ���ҵ�)�� ����غ���.
            console.group('object loop');
            var memberObject = {
                manager: 'egoing',
                developer: 'grphitte',
                desinger: 'leezche'
            }

            for(var name in memberObject){ //(���� ������ �̸��� �� ����)in(��ü)
                console.log(name, memberObject[name]);
            }

            console.groupEnd('object loop');

*/

var memberArray = ['egoing','graphittie','leezche'];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(memberArray[i]);
    i= i + 1;
}
console.groupEnd('array loop');
var memberObject = {
    manager : 'eoging',
    devleoper : 'graphiite',
    desingner : 'leezche'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');















