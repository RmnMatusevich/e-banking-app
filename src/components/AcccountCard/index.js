import React, { useState } from "react";
import { useHistory } from "react-router";
import ItemContainer from "../ItemContainer";
import CardContainer from "../CardContainer";
import { TextField, Typography } from "@material-ui/core";
import api from "../../services";
import { useAccount } from "../../context/AccountProvider";
import styles from "./styles.module.scss";

const AccountCard = () => {
  const [amount, setAmount] = useState({ value: "", error: "" });
  const account = useAccount();
  const history = useHistory();
  const handleSave = async () => {
    const newAccount = await api.account.create({ amount: amount.value });
    if (newAccount.address) {
      const accounts = await api.account.get();
      account.setAccount(accounts);
    }
  };

  const Item = ({ item }) => {
    return (
      <CardContainer
        className={styles.item}
        onClick={() => {
          // history.push(`/wallet/${item.address}`, item);
          history.push({
            pathname: `/wallet/${item.address}`,
            state: { account: item },
          });
        }}
      >
        <Typography variant="h5">Address: {item.address}</Typography>
        <Typography variant="h6">Amount: ${item.amount}</Typography>
      </CardContainer>
    );
  };

  return (
    <ItemContainer
      title="Accounts"
      onAdd={handleSave}
      Item={Item}
      items={account.account}
      addTitle="Create new Account"
      addDescription="Let create new account which you can manage. Simply enter the amount of
      the new account."
    >
      <TextField
        label="Amount"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setAmount({ value: e.target.value })}
      />
    </ItemContainer>
  );
};

export default AccountCard;
