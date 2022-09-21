{
    /**
     * Type Inference (타입 추론)
     */
    let text = 'hello';
    // text = 1; // 타입스크립트가 자동으로 타입을 보고 error를 발생시킴

    function print(message:string) {
        console.log(message);
    }

    print('hello');
    // print(1); // error

    function add(x:number, y:number) { // 리턴 타입을 자동으로 추론해줌
        return x+y;
    }
    
    const result = add(1,2); // 이 또한 자동으로 추론해줌
}