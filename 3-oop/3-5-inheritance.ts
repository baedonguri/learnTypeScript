{
  /**
   * 객체지향적으로 커피기계 만들기
   * abstraction 및 interface
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface CoffeeMaker {
    // interface 얼마만큼의 행동을 허용, 보장할 것인지 정의
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0)
        throw new Error("value for beans should be greater than 0");
      this.coffeeBeans += beans;
    }
    clean() {
      console.log("cleaning the machine..!");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preHeat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  /**
   * 상속을 이용하면, 공통적인 기능을 그대로 사용하면서
     자식 클래스에 특화된 기능을 생성할 수 있고, 부모 클래스에 있는 기능을 가져다 쓸 수 있음
   * */
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식클래스에서 생성자를 따로 구현하는 경우, 부모의 생성자를 호출해주어야 함
      super(beans); // 전달
    }

    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeCoffee(shots: number): CoffeeCup {
      // overwriting
      const coffee = super.makeCoffee(shots); // 자식 클래스에서 부모 클래스에 있는 함수를 사용(호출)하고 싶다면 super
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(32, "SASS");
  const coffee = latteMachine.makeCoffee(1);

  console.log(coffee);
  console.log(latteMachine.serialNumber); // 라떼머신에서만 접근이 가능!
}
