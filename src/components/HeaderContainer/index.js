import React from "react";
import styles from "./styles.module.scss";
import logo from "./priorLogo.png";
import UserPreviewCard from "../UserPreviewCard";

const HeaderContainer = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={logo} />
        </div>
        <UserPreviewCard />
      </div>
      {children}
    </div>
  );
};

export default HeaderContainer;
