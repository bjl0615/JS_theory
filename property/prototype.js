/*
    Prototype
        ������Ÿ���� �������ڸ� �����̶�� ������ �� �� �ִ�.
        �ڹٽ�ũ������ ������Ÿ���� �߱޿��� �������� �Ѿ�� ����ִٰ� �� �� ���� ������
        �߿��� �����̸� �ڹٽ�ũ��Ʈ�� Prototype language��� �Ѵ�.

        �ڵ带 �� �� ����
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
        ������ ���� ������ �Լ������� ���ο� ��ü�� ������ �� ����
        sum�̶�� ���� �żҵ尡 ���Ӱ� �����ǰ� �ִ�.
        �׸�ŭ �޸� ���� �߻��� ������ �������� �ȴ�.

        �� sum�̶�� �޼ҵ��� ������ �����ϰ� ���� ���
        ������� ��ü��ŭ ���� �۾��� �ݺ��ؾ��Ѵٴ� ������ �ִ�.
        �� ���꼺�� �������� �ȴ�.

        ���� Person �̶�� �����ڸ� �̿��ؼ� ���� ��� ��ü�� ���������� ����ϴ�
        �Լ��� ���� �� �ִٸ� ���? �� ���������� ����ϴ� �Ӽ��� ���� �� �ִٸ� ���?
        
        
*/