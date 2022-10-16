{
  /**
   * Generic을 사용하면 좋은 점
   * - 컴파일 타임에 타입을 보장 받을 수 있다.
   * - 들어오는 타입에 대해 유연하게 대처할 수 있다.
   * - 재사용성을 높일 수 있다.
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
