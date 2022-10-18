class UserService {
  constructor(UserClient) {
    this.UserClient = UserClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      return this.UserClient.login(id, password).then(
        (data) => (this.isLogedIn = true)
      );
    }
  }
}

module.exports = UserService;
