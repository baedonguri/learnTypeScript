{
    /**
     * Type Assertions : 타입 지정 시 타입을 강요할 때 사용하지만, 권장되지 않음
     */
    function jsStrFunc(): any { // any를 리턴하도록 지정
        return 'hello';         // 내부적으로는 string을 리턴하도록 되어 있음
    }
    const result = jsStrFunc(); // 그렇다면 result에는 string이 담길 것 같지만 실제로는 any임
    console.log(result.length);
    (result as string) // 캐스팅
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    // console.log((wrong as Array<number>).push(1)); 


    function findNumber(): number[] | undefined {
        return undefined;
    }
    const numbers=  findNumber();
    // numbers.push(2);// no
    numbers?.push(2);
    console.log(numbers);


    const button = document.querySelector('class')!;
}