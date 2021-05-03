import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import SignInForm from "../../components/Form/SignInForm";
import SignUpForm from "../../components/Form/SignUpForm";
import AuthContainer from "../../components/AuthContainer";
import { useUser } from "../../context/UserProvider";
import styles from "./styles.module.scss";

const Auth = () => {
  const [step, setStep] = useState(0);
  const user = useUser();
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
      {step === 0 && (
        <Typography variant="h6">
          Go to{" "}
          <span onClick={goToSignUp} className={styles.link}>
            Sign up
          </span>
        </Typography>
      )}
      {step === 1 && (
        <Typography variant="h6">
          Go to{" "}
          <span onClick={goToSignIn} className={styles.link}>
            Sign in
          </span>
        </Typography>
      )}
      {step === 0 && <SignInForm />}
      {step === 1 && <SignUpForm />}
    </AuthContainer>
  );
};

export default Auth;
