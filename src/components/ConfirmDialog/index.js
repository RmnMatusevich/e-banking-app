import React from "react";
import { Dialog, Typography, Slide } from "@material-ui/core";
import ButtonGroup from "../ButtonGroup";
import styles from "./styles.module.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ConfirmDialog = ({
  title,
  description,
  open,
  handleClose,
  handleSubmit,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      classes={{ paper: styles.dialogRoot, container: styles.container }}
    >
      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="h6">{description}</Typography>
      <ButtonGroup
        saveTitle="Ok"
        cancelTitle="Cancel"
        handleCancel={handleClose}
        handleSave={handleSubmit}
      />
    </Dialog>
  );
};
export default ConfirmDialog;
