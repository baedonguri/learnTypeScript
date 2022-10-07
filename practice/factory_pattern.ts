/**
 * Factory Pattern : 팩토리 패턴은 어떤 객체를 만들지를 전적으로 팩토리에 위임한다.
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

let Shoe = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    // type을 유니온 타입으로 지정해서 컴파일 타임에 호출자가 유효하지 않은 type을 전달하지 못하도록 방지.
    switch (
      type // switch문을 이용해 누락된
    ) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};
