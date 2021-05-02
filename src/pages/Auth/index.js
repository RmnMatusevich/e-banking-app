import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import SignInForm from "../../components/Form/SignInForm";
import SignUpForm from "../../components/Form/SignUpForm";
import AuthContainer from "../../components/AuthContainer";
import styles from "./styles.module.scss";

const Auth = () => {
  const [step, setStep] = useState(0);

  const goToSignIn = () => {
    if (step !== 0) {
      setStep(0);
    }
  };

  const goToSignUp = () => {
    if (step !== 1) {
      setStep(1);
    }
  };

  return (
    <AuthContainer title={step === 0 ? "Sign in" : "Sign Up"}>
      {step === 0 && <SignInForm />}
      {step === 1 && <SignUpForm />}
      {/* <div className={styles.buttons}>
        <Button variant="outlined" color="primary" onClick={goToSignIn}>
          Sign In
        </Button>
        <Button variant="outlined" color="primary" onClick={goToSignUp}>
          Sign Up
        </Button>
      </div> */}
      {step === 0 && (
        <Typography variant="h6">
          Don't have profile now?{" "}
          <span onClick={goToSignUp} className={styles.link}>
            Sign up here
          </span>
        </Typography>
      )}
      {step === 1 && (
        <Typography variant="h6">
          Do you already had profile?{" "}
          <span onClick={goToSignIn} className={styles.link}>
            Sign in here
          </span>
        </Typography>
      )}
    </AuthContainer>
  );
};

export default Auth;
