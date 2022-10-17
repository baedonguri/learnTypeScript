const fetchProduct = require("../async");

describe("Async", () => {
  it("async-done", () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      //   done(); // test가 실패하는 시점을 설정
    });
  });

  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async-resolves", async () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async-reject", async () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
