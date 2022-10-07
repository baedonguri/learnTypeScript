const Calculator = require("../calculator");

describe("Calculator", () => {
  it("inits with 0", () => {
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });
});
