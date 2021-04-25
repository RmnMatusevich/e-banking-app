import axios from "axios";
import AuthService from "./Auth.service";
import UserService from "./User.service";
import AccountService from "./Account.service";
import CreditService from "./Credit.service";
import DepositService from "./Deposit.service";

const token = localStorage.getItem("token") || "";

const instance = axios.create({
  baseURL: "http://localhost:9000/api/",
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
});

const api = {
  auth: new AuthService(instance),
  user: new UserService(instance),
  account: new AccountService(instance),
  credit: new CreditService(instance),
  deposit: new DepositService(instance),
};

export default api;
