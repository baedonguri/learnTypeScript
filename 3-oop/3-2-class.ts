{
  /**
   * 객체지향적으로 커피기계 만들기
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level : 중복되는 데이터는 static을 이용. 변하지 않는 값으로 선언하고 싶다면 static readonly
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) { // constructor는 class를 이용하여 object를 만들 때, 항상 처음 호출되는 함수
        this.coffeeBeans = coffeeBeans; // this를 사용하면 클래스 내의 멤버 변수를 가르킨다.
    }
    // 새로운 커피머신을 만들고 싶을 때
    // static을 사용하면 new 객체를 사용하지 않아도 사용이 가능하지만, 없다면 new가 필요함
    static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) { // static을 사용하면 클래스로 접근해서 사용해야함
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32); // 생성자 호출
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3); // static을 붙였을 때
  console.log(maker3);
}
