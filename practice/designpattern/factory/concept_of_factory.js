// createImage factory는 전혀 필요없는 것처럼 보임
function createImage(name) {
  return new Image(name);
}

// 직접 new 연산자를 사용해 Image 클래스를 인스턴스화 하는 방법도 존재
// 하지만 new를 사용하면 하나의 특정한 유형의 객체 만을 코드에 바인딩 할 수 있음.
const image = new Image(name);

// 팩토리를 사용할 경우, 더 많은 유연성을 제공.
// 다음과 같이 Image Class를 각각의 이미지 형식에 맞는 더 작은 객체들로 나누어 리팩토링.

function createImageFactory(name) {
  if (name.match(/\.jpeg$/)) {
    return new JpegImage(name);
  } else if (name.match(/\.gif$/)) {
    return new GifImage(name);
  } else if (name.match(/\.png/)) {
    return new PngImage(name);
  } else {
    throw new Execption("Unsupported Format");
  }
}

// factory는 생성된 객체의 생성자를 노출시키지 않고 객체를 확장하거나 수정하지 못하도록 함.
