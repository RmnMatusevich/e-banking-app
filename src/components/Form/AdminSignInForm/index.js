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

const AdminSignInForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const signIn = async () => {
    setLoading(true);
    const data = await api.auth.signInAdmin({ email, password });
    setLoading(false);
    if (data.token) {
      user.setUser(data);
      history.replace("/admin");
    }
  };

  return (
    <FormControl className={styles.form}>
      <TextField
        label="Email"
        variant="standard"
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="standard"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={styles.input}
        onClick={signIn}
        startIcon={
          loading ? (
            <CircularProgress color="inherit" size={18} />
          ) : (
            <div style={{ width: 18, height: 18 }} />
          )
        }
      >
        Sign in
      </Button>
    </FormControl>
  );
};

export default withRouter(AdminSignInForm);
