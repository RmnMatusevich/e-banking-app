import React, { useState, useEffect } from "react";
import ItemContainer from "../ItemContainer";
import CardContainer from "../CardContainer";
import ConfirmDialog from "../ConfirmDialog";
import { TextField, Typography } from "@material-ui/core";
import api from "../../services";
import styles from "./styles.module.scss";

const DepositCard = ({ account }) => {
  const [amount, setAmount] = useState({ value: "", error: "" });
  const [open, setOpen] = useState({
    isOpen: false,
    id: null,
    address: "",
  });
  const [deposits, setDeposits] = useState([]);

  const handleClose = () => {
    setOpen({ ...open, isOpen: false });
  };

  const handleOpen = (deposit) => {
    setOpen({ isOpen: true, id: deposit.id, address: deposit.address });
  };

  const handleSubmit = async () => {
    await api.deposit.close({
      id: open.id,
      accountId: account.id,
    });
    const deposits = await api.deposit.get({ accountId: account.id });
    setDeposits(deposits);
    setOpen({ ...open, isOpen: false });
  };

  const handleSave = async () => {
    const newDeposit = await api.deposit.create({
      amount: Number(amount.value),
      percent: 0.01,
      accountId: account.id,
    });
    if (newDeposit.address) {
      const deposits = await api.deposit.get({ accountId: account.id });
      setDeposits(deposits);
    }
  };

  useEffect(() => {
    (async () => {
      const deposits = await api.deposit.get({ accountId: account.id });
      setDeposits(deposits);
    })();
  }, []);

  const Item = ({ item }) => {
    return (
      <CardContainer className={styles.item} onClick={() => handleOpen(item)}>
        <Typography variant="h5">Address: {item.address}</Typography>
        <Typography variant="h6">Amount: ${item.amount}</Typography>
        <Typography variant="h6">Percent: {item.percent}</Typography>
        <Typography variant="h6">
          Earned amount: ${item.earnedAmount}
        </Typography>
      </CardContainer>
    );
  };

  return (
    <>
      <ItemContainer
        title="Deposits"
        onAdd={handleSave}
        Item={Item}
        items={deposits}
        className={styles.item}
        addTitle="Create deposit"
        addDescription="Please enter the amount of new deposit account. It like pass the amount into input field and new deposit account would be created with the amount that you passed in."
      >
        <TextField
          label="Amount"
          variant="standard"
          className={styles.input}
          onChange={(e) => setAmount({ value: e.target.value })}
        />
      </ItemContainer>
      <ConfirmDialog
        title="Do you want to close the deposit?"
        description={`We would return your money and close deposit with address ${open.address}`}
        open={open.isOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default DepositCard;
