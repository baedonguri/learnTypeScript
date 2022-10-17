/**
 * factory를 이용하여 profiler 클래스 작성하기
 * start() 호출시, 현재의 시간을 저장하고, end가 실행되면 경과 시간을 계산하여 결과를 출력
 * 다른 루틴의 실행 시간을 계산할 수 있음
 */
class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }
  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(`
    Timer "${this.label}" took ${diff[0]} second and ${diff[1]} nanoseconds`);
  }
}

// TODO : abstraction
module.exports = function (label) {
  // 개발모드에서 실행 중일 경우, new를 사용해 완전한 기능을 갖춘 Profiler 객체를 반환
  if (process.env.NODE_ENV === "development") {
    return new Profiler(label); // [1]
    // production 모드에서 실행 중이면, start와 end가 비어있는 모의 (mock) 객체를 반환
  } else if (process.env.NODE_ENV === "production") {
    return {
      // [2]
      start: function () {},
      end: function () {},
    };
  } else {
    throw new Error("Must set NODE_ENV");
  }
};
