/*
    this?
        �տ��� �츮�� ��ü�� ���� ������ ������ �Լ��� �׷�ȭ�Ͽ� �̸��� ���� ���̶�� �����.
        �ѱ���� ��� �ڱ� �ڽ��� ����Ű�� ���簡 �ֵ���
        ���α׷��ֿ����� �ڱ� �ڽ��� ����Ű�� ǥ���� �ִµ�
        �ٷ� this�̴�.

        �Ʒ��� ���� ��ü�� ����� sum �޼ҵ带 ȣ���غ���.
            var kim = {
                name = 'kim'
                first : 10. // ù��° ���� ����
                second : 20, // �ι�° ���� ����
                sum: function(f,s){ // ���� ���� �հ� �Լ�
                    return f+s;
                }
            }

            console.log("kim.sum(kim.first,kim.second"), kim.sum(kim.first,kim.second));
        �̹� ��ü ���ο��� first�� second�� �˰� �ֱ� ������
        ���� �ѹ� �� ����� �ʿ䰡 ����.
        sum�� ���ڸ� ������ �� �ֵ��� this�� �̿��� ��ü�� ������ �� �ִ�.
        � �޼ҵ忡�� �� �޼ҵ尡 ���� �ִ� ��ü�� ����Ű�� Ư���� Ű���带 this��� �Ѵ�.
            var kim{
                name: 'kim',
                first : 10, // ù��° ���� ����
                second : 20, // �ι�° ���� ����
                sum:function(){ // ���� ���� �հ� �Լ�
                    return this.first + this.second;
                }
            }

            console.log("kim.sum()",kim.sum());
        this��� Ű��Ʈ�� �ǹ̴� ����� �߿��ϴ�.
        this�� �ǹ̸� �� �����ϰ� �Ѿ��.
        
*/  

var k = {
    name:'kim',
    first: 10,
    second: 20,
    sum:function(){
        return this.first+this.second;
    }
}

// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.fitst, kim.second));
console.log("kim.sum(kim.first, kim.second)", k.sum());

