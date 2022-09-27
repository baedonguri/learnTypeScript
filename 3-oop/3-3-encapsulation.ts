{
  /**
   * 객체지향적으로 커피기계 만들기
   * getter & setter
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public : 기본적으로는 public으로 설정. 외부에서도 값을 볼 수 있는 특징
  // private : 외부에서 볼 수 없고, 접근도 할 수 없는 특징
  // protected : 나중에 상속을 할 때, 외부에서 접근할 수 없지만, 클래스를 상속한 클래스에서는 접근이 가능한 특징
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // private로 지정시 외부에서 보이지 않음
    protected coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      // constructor는 class를 이용하여 object를 만들 때, 항상 처음 호출되는 함수
      this.coffeeBeans = coffeeBeans; // this를 사용하면 클래스 내의 멤버 변수를 가르킨다.
    }
    // 새로운 커피머신을 만들고 싶을 때
    // static을 사용하면 new 객체를 사용하지 않아도 사용이 가능하지만, 없다면 new가 필요함
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // static을 사용하면 클래스로 접근해서 사용해야함
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
        
      if (num < 0){
        throw new Error('Invalid age!');
      }else {
        this.internalAge = num;
      }
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
  console.log(user.age);
}
