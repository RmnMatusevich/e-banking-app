class AccountService {
  constructor(api) {
    this.api = api;
  }

  async create(data) {
    const response = await this.api({
      method: "post",
      url: "account",
      data,
    });
    return response?.data;
  }

  async get() {
    const response = await this.api({
      method: "get",
      url: "account",
    });
    return response?.data;
  }
}

export default AccountService;
