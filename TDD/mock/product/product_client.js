class ProductClient {
  fetchItems() {
    return fetch("http://naver.com").then((response) => {
      response.json();
    });
  }
}

module.exports = ProductClient;
