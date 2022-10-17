const Calculator = require("../calculator");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });
  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      // Error를 검출하기 위해서는 expect의 callback을 이용해, 내부에 검증하고자 하는 코드를 넣으면 된다.
      cal.add(101);
    }).toThrow("Value can not be geater than 100"); // 에러 메시지도 일치하는지 검증할 수 있다.
  });

  it("subtract", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiply", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe("devides", () => {
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
