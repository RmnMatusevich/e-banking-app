class CreditService {
  constructor(api) {
    this.api = api;
  }

  async create(data) {
    const response = await this.api({
      method: "post",
      url: "credit",
      data,
    });
    return response?.data;
  }

  async get(data) {
    const response = await this.api({
      method: "get",
      url: "credit",
      params: data,
    });
    return response?.data;
  }

  async payFee(data) {
    const response = await this.api({
      method: "post",
      url: "credit/payfee",
      data,
    });
    return response?.data;
  }
}

export default CreditService;
