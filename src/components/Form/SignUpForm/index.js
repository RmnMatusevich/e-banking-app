import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useUser } from "../../../context/UserProvider";
import styles from "./styles.module.scss";
import api from "../../../services";

const SignUpForm = ({ history }) => {
  const defaultValues = {
    value: "",
    error: "",
  };
  const [email, setEmail] = useState(defaultValues);
  const [password, setPassword] = useState(defaultValues);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState(defaultValues);
  const [lastName, setLastName] = useState(defaultValues);
  const [phone, setPhone] = useState(defaultValues);
  const [country, setCountry] = useState(defaultValues);
  const [city, setCity] = useState(defaultValues);
  const [address, setAddress] = useState(defaultValues);
  const [postalCode, setPostalCode] = useState(defaultValues);
  const user = useUser();
  const signUp = async () => {
    setLoading(true);
    const data = await api.auth.signUp({
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      country: country.value,
      city: city.value,
      address: address.value,
      postalCode: postalCode.value,
    });
    setLoading(false);
    if (data.token) {
      user.setUser(data);
      history.replace("/wallet");
    }
  };

  return (
    <FormControl className={styles.form}>
      <TextField
        label="Email"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setEmail({ value: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setPassword({ value: e.target.value })}
      />
      <TextField
        label="First name"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setFirstName({ value: e.target.value })}
      />
      <TextField
        label="Last name"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setLastName({ value: e.target.value })}
      />
      <TextField
        label="Country"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setCountry({ value: e.target.value })}
      />
      <TextField
        label="City"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setCity({ value: e.target.value })}
      />
      <TextField
        label="Phone"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setPhone({ value: e.target.value })}
      />
      <TextField
        label="Address"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setAddress({ value: e.target.value })}
      />
      <TextField
        label="Postal code"
        variant="outlined"
        className={styles.input}
        onChange={(e) => setPostalCode({ value: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        className={styles.input}
        onClick={signUp}
        startIcon={
          loading ? (
            <CircularProgress color="inherit" size={18} />
          ) : (
            <div style={{ width: 18, height: 18 }} />
          )
        }
      >
        Sign up
      </Button>
    </FormControl>
  );
};

export default withRouter(SignUpForm);
