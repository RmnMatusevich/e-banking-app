import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { countries, cities } from "../../../resources/geo";
import { useUser } from "../../../context/UserProvider";
import { verifyEmail, verifyPassword } from "../../../helpers/validate.helper";
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
  const [middleName, setMiddleName] = useState(defaultValues);
  const [birthDate, setBirthDate] = useState({
    ...defaultValues,
    value: "2000-05-24",
  });
  const [passportSeries, setPassportSeries] = useState(defaultValues);
  const [passportNumber, setPassportNumber] = useState(defaultValues);
  const [passportIssued, setPassportIssued] = useState(defaultValues);
  const [passportIdentity, setPassportIdentity] = useState(defaultValues);
  const [passportDate, setPassportDate] = useState({
    ...defaultValues,
    value: "2015-05-24",
  });
  const [phoneHome, setPhoneHome] = useState(defaultValues);
  const [jobPlace, setJobPlace] = useState(defaultValues);
  const [jobPosition, setJobPosition] = useState(defaultValues);
  const [placeOfResidence, setPlaceOfResidence] = useState({
    ...defaultValues,
    value: "false",
  });
  const [maritalStatus, setMaritalStatus] = useState(defaultValues);
  const [citizenship, setCitizenship] = useState(defaultValues);
  const [disability, setDisability] = useState(defaultValues);
  const [pensioner, setPensioner] = useState({
    ...defaultValues,
    value: false,
  });
  const [monthlyIncome, setMonthlyIncome] = useState(defaultValues);

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
      middleName: middleName.value,
      birthDate: `${birthDate.value}T15:23:30.803Z`,
      passportSeries: passportSeries.value,
      passportNumber: passportNumber.value,
      passportIssued: passportIssued.value,
      passportIdentity: passportIdentity.value,
      passportDate: `${passportDate.value}T15:23:30.803Z`,
      phoneHome: phoneHome.value,
      jobPlace: jobPlace.value,
      jobPosition: jobPosition.value,
      placeOfResidence: placeOfResidence.value,
      maritalStatus: maritalStatus.value,
      citizenship: citizenship.value,
      disability: disability.value,
      pensioner: pensioner.value,
      monthlyIncome: monthlyIncome.value,
    });

    setLoading(false);
    if (data.token) {
      user.setUser(data);
      history.replace("/wallet");
    }
  };

  const handleEmailChange = (value) => {
    const error = verifyEmail(value);
    setEmail({ value, error });
  };

  const handlePasswordChange = (value) => {
    const error = verifyPassword(value);
    setPassword({ value, error });
  };
  return (
    <FormControl className={styles.form}>
      <div className={styles.twoInLine}>
        <TextField
          style={{ width: "100%" }}
          label="Email"
          variant="standard"
          className={styles.input}
          onChange={(e) => handleEmailChange(e.target.value)}
          error={email.error.length !== 0}
          helperText={email.error}
        />
        <TextField
          style={{ width: "100%" }}
          label="Password"
          type="password"
          variant="standard"
          className={styles.input}
          onChange={(e) => handlePasswordChange(e.target.value)}
          error={password.error.length !== 0}
          helperText={password.error}
        />
      </div>
      <div className={styles.twoInLine}>
        <TextField
          style={{ width: "100%" }}
          label="First name"
          variant="standard"
          className={styles.input}
          onChange={(e) => setFirstName({ value: e.target.value })}
        />
        <TextField
          style={{ width: "100%" }}
          label="Last name"
          variant="standard"
          className={styles.input}
          onChange={(e) => setLastName({ value: e.target.value })}
        />
      </div>
      <div className={styles.twoInLine}>
        <Autocomplete
          style={{ width: "100%" }}
          id="countries-box"
          options={countries}
          getOptionLabel={(option) => option}
          onSelect={(e) => setCountry({ value: e.target.value })}
          className={styles.input}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="standard" />
          )}
        />
        <Autocomplete
          style={{ width: "100%" }}
          id="cities-box"
          options={cities}
          getOptionLabel={(option) => option}
          onSelect={(e) => setCity({ value: e.target.value })}
          className={styles.input}
          renderInput={(params) => (
            <TextField {...params} label="City" variant="standard" />
          )}
        />
      </div>
      <TextField
        label="Phone"
        variant="standard"
        className={styles.input}
        onChange={(e) => setPhone({ value: e.target.value })}
      />
      <div className={styles.twoInLine}>
        <TextField
          style={{ width: "100%" }}
          label="Address"
          variant="standard"
          className={styles.input}
          onChange={(e) => setAddress({ value: e.target.value })}
        />
        <TextField
          style={{ width: "100%" }}
          label="Postal code"
          variant="standard"
          className={styles.input}
          onChange={(e) => setPostalCode({ value: e.target.value })}
        />
      </div>
      <TextField
        label="Middle name"
        variant="standard"
        className={styles.input}
        onChange={(e) => setMiddleName({ value: e.target.value })}
      />
      <TextField
        label="Birth Date"
        variant="standard"
        className={styles.input}
        defaultValue={birthDate.value}
        type="date"
        onChange={(e) => setBirthDate({ value: e.target.value })}
      />
      <div className={styles.twoInLine}>
        <TextField
          label="Passport series"
          variant="standard"
          className={styles.input}
          onChange={(e) => setPassportSeries({ value: e.target.value })}
        />
        <TextField
          label="Passport number"
          variant="standard"
          className={styles.input}
          onChange={(e) => setPassportNumber({ value: e.target.value })}
        />
        <TextField
          label="Passport issued"
          variant="standard"
          className={styles.input}
          onChange={(e) => setPassportIssued({ value: e.target.value })}
        />
      </div>
      <div className={styles.twoInLine}>
        <TextField
          style={{ width: "100%" }}
          label="Passport identity"
          variant="standard"
          className={styles.input}
          onChange={(e) => setPassportIdentity({ value: e.target.value })}
        />
        <TextField
          style={{ width: "100%" }}
          label="Passport date"
          variant="standard"
          className={styles.input}
          defaultValue={passportDate.value}
          type="date"
          onChange={(e) => setPassportDate({ value: e.target.value })}
        />
      </div>
      <TextField
        label="Phone home"
        variant="standard"
        className={styles.input}
        onChange={(e) => setPhoneHome({ value: e.target.value })}
      />
      <div className={styles.twoInLine}>
        <TextField
          style={{ width: "100%" }}
          label="Job place"
          variant="standard"
          className={styles.input}
          onChange={(e) => setJobPlace({ value: e.target.value })}
        />
        <TextField
          style={{ width: "100%" }}
          label="Job position"
          variant="standard"
          className={styles.input}
          onChange={(e) => setJobPosition({ value: e.target.value })}
        />
      </div>
      <TextField
        label="Place of residence"
        variant="standard"
        className={styles.input}
        onChange={(e) => setPlaceOfResidence({ value: e.target.value })}
      />
      <TextField
        label="Marital status"
        variant="standard"
        className={styles.input}
        onChange={(e) => setMaritalStatus({ value: e.target.value })}
      />
      <TextField
        label="Citizenship"
        variant="standard"
        className={styles.input}
        onChange={(e) => setCitizenship({ value: e.target.value })}
      />
      <TextField
        label="Disability"
        variant="standard"
        className={styles.input}
        onChange={(e) => setDisability({ value: e.target.value })}
      />
      <FormLabel component="legend">Are you a pensioner?</FormLabel>
      <RadioGroup
        aria-label="pensioner"
        name="pensioner"
        value={pensioner.value}
        onChange={(e) => setPensioner({ value: e.target.value === "true" })}
      >
        <FormControlLabel
          value={true}
          control={<Radio color="primary" />}
          label="Yes"
        />
        <FormControlLabel
          value={false}
          control={<Radio color="primary" />}
          label="No"
        />
      </RadioGroup>
      <TextField
        label="Monthly Income"
        variant="standard"
        className={styles.input}
        type="number"
        onChange={(e) => setMonthlyIncome({ value: e.target.value })}
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
        disabled={password.error.length !== 0 || email.error.length !== 0}
      >
        Sign up
      </Button>
    </FormControl>
  );
};

export default withRouter(SignUpForm);
