{
    // // JavaScript π©
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript π©
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
    function printName(firstName: string, lastName?: string){ // ?λ₯Ό λΆμ΄λ©΄ λ¬Έμμ΄ νμμ μ λ¬ν΄λ λκ³  μ λ¬νμ§ μμλ λ¨
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