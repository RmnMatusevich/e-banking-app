class DepositService {
  constructor(api) {
    this.api = api;
  }

  async create(data) {
    const response = await this.api({
      method: "post",
      url: "deposit",
      data,
    });
    return response?.data;
  }

  async get(data) {
    const response = await this.api({
      method: "get",
      url: "deposit",
      params: data,
    });
    return response?.data;
  }

  async close(data) {
    const response = await this.api({
      method: "post",
      url: "deposit/close",
      data,
    });
    return response?.data;
  }
}

export default DepositService;
