import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import UserCard from "../../components/UserCard";
import DepositCard from "../../components/DepositCard";
import CreditCard from "../../components/CreditCard";
import api from "../../services";
import styles from "./styles.module.scss";
import { useAccount } from "../../context/AccountProvider";

const Account = ({ location }) => {
  const accountFormRoute = location.state.account;
  const user = useUser();
  const account = useAccount();

  useEffect(() => {
    (async () => {
      const data = await api.user.getUser();
      user.setUser(data);
    })();

    (async () => {
      const accounts = await api.account.get();
      account.setAccount(accounts);
    })();
  }, []);

  return (
    <div className={styles.root}>
      <UserCard />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DepositCard account={accountFormRoute} />
        <CreditCard account={accountFormRoute} />
      </div>
    </div>
  );
};

export default withRouter(Account);
