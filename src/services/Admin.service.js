class AdminService {
  constructor(api) {
    this.api = api;
  }

  async getAllUsers() {
    const response = await this.api({
      method: "get",
      url: "user",
    });
    return response?.data;
  }

  async deleteUser(data) {
    const response = await this.api({
      method: "delete",
      url: "user",
      params: data,
    });
    return response?.data;
  }
}

export default AdminService;
