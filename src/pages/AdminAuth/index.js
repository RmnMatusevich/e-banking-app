import React from "react";
import AdminSignInForm from "../../components/Form/AdminSignInForm";
import AuthContainer from "../../components/AuthContainer";

const Auth = () => {
  return (
    <AuthContainer title="Sign in as Admin">
      <AdminSignInForm />
    </AuthContainer>
  );
};

export default Auth;
