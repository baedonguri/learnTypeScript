{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log(`full time!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log(`part time!`);
    }
    workPartTime() {}
  }
  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 bad.
  // 모든 직원을 받아와서, 직원에 상관없이 지불을 한 다음, employee를 리턴하기 때문에 full or part에 대한 정보(세부 클래스의 정보)를 잃어버림
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  //
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const aiden = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  aiden.workFullTime();
  bob.workPartTime();

  const aidenAfterPay = pay(aiden);
  const bodAfterPay = pay(bob);

  //   const test=  pay(13); // error
  // T의 key중의 하나를 상속
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj = {
    name: "aiden",
    age: 20,
  };

  const obj2 = {
    animal: "dog",
  };

  console.log(getValue(obj, "name")); // aiden
  console.log(getValue(obj, "age")); // 20
  console.log(getValue(obj2, "animal"));
}
