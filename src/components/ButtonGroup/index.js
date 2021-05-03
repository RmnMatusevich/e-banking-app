import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";

const ButtonGroup = ({ handleCancel, cancelTitle, handleSave, saveTitle }) => {
  return (
    <div className={styles.container}>
      <Button
        onClick={handleCancel}
        variant="contained"
        color="primary"
        style={{ marginRight: 10 }}
      >
        {cancelTitle}
      </Button>
      <Button
        onClick={handleSave}
        variant="contained"
        color="primary"
        style={{ marginLeft: 10 }}
      >
        {saveTitle}
      </Button>
    </div>
  );
};

export default ButtonGroup;
