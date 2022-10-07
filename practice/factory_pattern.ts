/**
 * Factory Pattern : 팩토리 패턴은 어떤 객체를 만들지를 전적으로 팩토리에 위임한다.
 * 호출자는 팩토리가 특정 인터페이스를 만족하는 클래스를 제공할 것이라는 사실만 알 뿐, 어떤 구체 클래스가 이 일을 하는지 알 수 없도록 추상화 해야한다.
 *
 * TODO : 신발(shoe) 팩토리 구현.
 */

// Shoe 타입 정의 (interface를 사용해도 무방)
type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

// 컴패니언 객체 패턴으로 타입 Shoe와 값 Shoe를 같은 이름으로 선언 (타입스크립트는 값과 타입의 namespace를 따로 관리)
let Shoe = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    // type을 유니온 타입으로 지정해서 컴파일 타임에 호출자가 유효하지 않은 type을 전달하지 못하도록 방지. (.create의 타입 안정성을 최대한 강화)
    // switch문을 이용해 누락된 타입이 있는지 확인
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

// 이 팩토리를 이용하기 위해서는 그저 .create를 호출하면 됨
Shoe.create("balletFlat");
Shoe.create("boot");
Shoe.create("sneaker");
