import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./styles.module.scss";

const AuthContainer = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
