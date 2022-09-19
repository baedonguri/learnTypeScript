{
    /**
     * Enum : 여러가지의 관련된 상수값들을 한 곳에 모아서 정의할 수 있도록 하는 기능
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    // 이런 것들을 한번에 묶을 수 있도록 하는 것
    const DAYS_ENUM = Object.freeze({"MONDAY" : 0, "TUESDAY": 1});
    const dayOfToDay = DAYS_ENUM.MONDAY;

    // 여러가지 상수 값들을 한 곳에 모아서 타입이 보장되고, 타입의 값들이 바뀌지 않으니 안전한 장점이 있음


    // TypeScript
    enum Days { // enum은 첫글자만 대문자로.
        Monday, // 0 만약 1로 지정하면 1부터 시작
        Tuesday, // 1
        Wednesday, // 2
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Thursday);
    const day = Days.Saturday;
    console.log(day);

    /**
     * 타입 스크립트에서는 enum을 권장하지 않음
     * enum 타입이 지정된 변수에 다른 값을 지정할 수 있다는 문제점
     */
    let day2: Days = Days.Saturday;
    day2 = Days.Friday; // 가능 .. 

    // Union을 사용해도 같게 구현이 가능하므로 웬만하면 Union 사용하는 것이 안전함
}