class AuthService {
  constructor(api) {
    this.api = api;
  }

  async signIn(data) {
    const response = await this.api({
      method: "post",
      url: "auth/user/login",
      data,
    });
    if (response.data) {
      localStorage.setItem("token", response.data.token);
    }
    return response?.data;
  }

  async signUp(data) {
    const response = await this.api({
      method: "post",
      url: "auth/user/register",
      data,
    });
    if (response.data) {
      localStorage.setItem("token", response.data.token);
    }
    return response?.data;
  }
}

export default AuthService;
