{
    /**
     * JavaScript
     * Primitive (원시형) : number, string, boolean, bigint, symbol, null, undefined
     * Object : function, array ...
     */

    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined : 값이 있는지 없는지 알 수 없는 상태
    // let name: undefined; // 보통 이렇게 작성하지 않음 -> undefined한 값만 할당이 가능함
    // name = 'james'; // error

    let age : number | undefined; // 보통은 이렇게 사용. 초기화되지 않았을 때 optional하게 사용
    age = undefined;
    age = 0.11;

    function find() : number | undefined {
        return undefined;
    }

    // null : undefined보다 조금 더 명확하게 텅 비어있다고 나타내는 상태
    let person : string | null;


    // unknown : 어떤 데이터 타입이 담길지 모르는 상태의 타입 -> 어떠한 형태의 데이터도 담을 수 있음
    let notSure : unknown;
    notSure = 'he';
    notSure = true;
    
    // any : 어떠한 데이터 타입도 담을 수 있는 타입
    let anything : any = 0;
    anything = 'hello'

    // void : 아무것도 리턴하지 않을 때 사용하는 타입 & 명시적으로 선언해주지 않아도 됨
    function print() : void {
        console.log('hello');
    }
    // let unusable : void = undefined; // 이렇게는 no

    // never : 아무것도 리턴하지 못하도록 지정하는 타입
    function throwError(msg : string): never {
        // msg -> server (log);
        throw new Error(msg);
        // while (true) {}
    }
    // let neverEnding: never; // no

    // object
    let obj: object;
    function acceptSomeObject(obj: object) {
    
    }
    acceptSomeObject({name : 'donguri'}); // object 전달
    acceptSomeObject([1,4]); // array 전달
    
}