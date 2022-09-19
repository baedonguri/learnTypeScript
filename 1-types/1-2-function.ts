{
    // // JavaScript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // // TypeScript
    // function fetchNum(id : string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }


    
    // JavaScript -> TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string){ // ?를 붙이면 문자열 타입을 전달해도 되고 전달하지 않아도 됨
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Donguri'); 
    printName('Anna', undefined);


    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();
    printMessage('Success!!');


    // Rest parameter
    function addNumbers(...numbers : number[]): number {
        return numbers.reduce((a,b) => a+b);
    
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,0));
}