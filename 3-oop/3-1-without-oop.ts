{
    /**
     * 절차지향적으로 커피기계 만들기
     */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMM_PER_SHOT: number = 7; // 샷 한잔에 필요한 원두의 그램 수
  let coffeeBeans: number = 0; // 현재 원두의 갯수

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;  // 커피콩 충전
  const coffee = makeCoffee(2);
  console.log(coffee);
}
