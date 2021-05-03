import React from "react";
import { Typography } from "@material-ui/core";
import ButtonGroup from "../ButtonGroup";
import styles from "./styles.module.scss";

const AddBlock = ({
  title,
  description,
  handleClose,
  handleSave,
  children,
}) => {
  return (
    <div onClose={handleClose} className={styles.root}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h6">{description}</Typography>
      {children}
      <ButtonGroup
        handleCancel={handleClose}
        handleSave={handleSave}
        cancelTitle="Cancel"
        saveTitle="Save"
      />
    </div>
  );
};
export default AddBlock;
