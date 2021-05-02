import React from "react";
import styles from "./styles.module.scss";
import logo from "./logo.jpeg";
import { Typography } from "@material-ui/core";

const HeaderContainer = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <img className={styles.image} src={logo} />
        <Typography variant="h5">{title}</Typography>
      </div>
      {children}
    </div>
  );
};

export default HeaderContainer;
