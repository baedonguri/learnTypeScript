{
  /**
   * Generic을 사용하면 컴파일 시간에 타입을 보장받을 수 있는 장점이 있다.
   */
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid value!");
    }
    return arg;
  }

  //   const result = checkNotNullAnyBad(123);

  function checkNotNull<T>(arg: T | null) {
    if (arg == null) {
      throw new Error("not valid value!");
    }
  }

  const number = checkNotNull(123); // number로 타입 결정
  const bool = checkNotNull(true); // boolean으로 타입 결정
  const string = checkNotNull("aiden"); // string으로 타입 결정
}
