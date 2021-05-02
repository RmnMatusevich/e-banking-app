import React from "react";
import styles from "./styles.module.scss";
import logo from "./logo.jpeg";

const HeaderContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <img className={styles.image} src={logo} />
      </div>
      {children}
    </div>
  );
};

export default HeaderContainer;
