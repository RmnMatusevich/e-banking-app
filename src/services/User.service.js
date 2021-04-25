class UserService {
  constructor(api) {
    this.api = api;
  }

  async getUser() {
    const response = await this.api({
      method: "get",
      url: "user/token",
    });
    return response?.data;
  }
}

export default UserService;
