import React from "react";
import { Dialog, DialogActions, Slide, Typography } from "@material-ui/core";
import ButtonGroup from "../ButtonGroup";
import styles from "./styles.module.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const AddDialog = ({
  title,
  description,
  open,
  handleClose,
  handleSave,
  children,
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
      {children}
      <ButtonGroup
        saveTitle="Save"
        cancelTitle="Cancel"
        handleCancel={handleClose}
        handleSave={handleSave}
      />
    </Dialog>
  );
};
export default AddDialog;
