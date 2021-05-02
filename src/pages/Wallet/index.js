import React, { useEffect } from "react";
import { useUser } from "../../context/UserProvider";
import UserCard from "../../components/UserCard";
import AccountCard from "../../components/AcccountCard";
import api from "../../services";
import styles from "./styles.module.scss";
import { useAccount } from "../../context/AccountProvider";
import HeaderContainer from "../../components/HeaderContainer";

const Wallet = () => {
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
    <HeaderContainer>
      <div className={styles.root}>
        <UserCard />
        <AccountCard />
      </div>
    </HeaderContainer>
  );
};

export default Wallet;
