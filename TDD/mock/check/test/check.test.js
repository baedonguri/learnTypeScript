const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn(); // mock func 선언
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onFail.mock.calls.length).toBe(0);
  });
});
