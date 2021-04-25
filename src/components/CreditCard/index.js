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
  3: 18,
  6: 15,
  12: 12,
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
        addTitle="Create new Credit"
        addDescription="Let create new credit. Simply enter the amount of
      the new credit, time for return money."
      >
        <TextField
          label="Amount"
          variant="outlined"
          className={styles.input}
          onChange={(e) => setAmount({ value: e.target.value })}
        />
        <RadioGroup
          aria-label="month"
          name="month"
          value={month}
          onChange={handleMonthChange}
        >
          <FormControlLabel value={"3"} control={<Radio />} label="3 month" />
          <FormControlLabel value={"6"} control={<Radio />} label="6 month" />
          <FormControlLabel value={"12"} control={<Radio />} label="12 month" />
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
          variant="outlined"
          className={styles.input}
          onChange={(e) => setAmount({ value: e.target.value })}
        />
      </AddDialog>
    </>
  );
};

export default CreditCard;
