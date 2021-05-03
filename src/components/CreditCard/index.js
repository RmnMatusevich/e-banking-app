import React, { useState, useEffect } from "react";
import ItemContainer from "../ItemContainer";
import CardContainer from "../CardContainer";
import AddDialog from "../AddDialog";
import Timer from "react-compound-timer";
import {
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import api from "../../services";
import styles from "./styles.module.scss";

const percents = {
  12: 10,
  24: 8,
  36: 6,
};

const CreditCard = ({ account }) => {
  const [amount, setAmount] = useState({ value: "", error: "" });
  const [month, setMonth] = useState("3");
  const [open, setOpen] = useState({
    isOpen: false,
    id: null,
    address: "",
  });
  const [credits, setCredits] = useState([]);
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleClose = () => {
    setOpen({ ...open, isOpen: false });
  };

  const handleOpen = (credit) => {
    setOpen({ isOpen: true, id: credit.id, address: credit.address });
  };

  const handlePayFee = async () => {
    await api.credit.payFee({
      amount: Number(amount.value),
      id: open.id,
      accountId: account.id,
    });
    const credits = await api.credit.get({ accountId: account.id });
    setCredits(credits);
    setOpen({ ...open, isOpen: false });
  };

  const handleSave = async () => {
    const newCredit = await api.credit.create({
      amount: Number(amount.value),
      percent: percents[month],
      accountId: account.id,
      numberOfMonth: month,
    });
    if (newCredit.address) {
      const credits = await api.credit.get({ accountId: account.id });
      setCredits(credits);
    }
  };

  useEffect(() => {
    (async () => {
      const credits = await api.credit.get({ accountId: account.id });
      setCredits(credits);
    })();
  }, []);

  const Item = ({ item }) => {
    return (
      <CardContainer className={styles.item} onClick={() => handleOpen(item)}>
        <Typography variant="h5">Address: {item.address}</Typography>
        <Typography variant="h6">Amount: ${item.amount}</Typography>
        <Typography variant="h6">
          Number of months: {item.numberOfMonth}
        </Typography>
        <Typography variant="h6">Percent: {item.percent}%</Typography>
        <Typography variant="h6">
          Amount received: ${item.amountReceived}
        </Typography>
        <Typography variant="h6">
          Amount with percent: ${item.amountWithPercent}
        </Typography>
        <Typography variant="h6">
          Amount remained: ${item.amountRemained}
        </Typography>
        <Typography variant="h6">
          Time end:{" "}
          <Timer
            initialTime={Date.parse(item.timeEnd) - Date.now()}
            direction="backward"
          >
            {() => (
              <React.Fragment>
                <Timer.Days /> days <Timer.Hours />:
                <Timer.Minutes />:
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
        </Typography>
      </CardContainer>
    );
  };

  return (
    <>
      <ItemContainer
        title="Credits"
        onAdd={handleSave}
        Item={Item}
        items={credits}
        className={styles.item}
        addTitle="Create credit"
        addDescription="Please enter the amount and time for return money of new credit. It like pass the amount and time into input field and radio, then and new credit would be created with the amount that you passed in and time that you have picked."
      >
        <TextField
          label="Amount"
          variant="standard"
          className={styles.input}
          onChange={(e) => setAmount({ value: e.target.value })}
        />
        <RadioGroup
          aria-label="month"
          name="month"
          value={month}
          onChange={handleMonthChange}
        >
          <FormControlLabel
            value={"12"}
            control={<Radio color="primary" />}
            label="12 month"
          />
          <FormControlLabel
            value={"24"}
            control={<Radio color="primary" />}
            label="24 month"
          />
          <FormControlLabel
            value={"36"}
            control={<Radio color="primary" />}
            label="36 month"
          />
        </RadioGroup>
      </ItemContainer>
      <AddDialog
        title="Do you want to pay a fee for credit?"
        description={`Enter the fee value for credit with address ${open.address}`}
        open={open.isOpen}
        handleClose={handleClose}
        handleSave={handlePayFee}
      >
        <TextField
          label="Amount"
          variant="standard"
          className={styles.input}
          onChange={(e) => setAmount({ value: e.target.value })}
        />
      </AddDialog>
    </>
  );
};

export default CreditCard;
