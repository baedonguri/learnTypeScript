{
    // 
    /**
     * Type Aliases : 기본적인 타입 정의부터, 복잡한 타입을 정의할 수 있음
     */
    type Text = string;
    const name: Text = 'donguri';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string,
        age: number
    };

    const student: Student = {
        name : 'donguri',
        age : 12,
    };

    /**
     * String Literal Types : 실제로 값 자체를 타입으로 사용할 수 있음
     * 
     */
    type Name = 'name';
    let donguriName: Name;
    donguriName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;

}