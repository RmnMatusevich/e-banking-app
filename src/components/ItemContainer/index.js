import React, { useState } from "react";
import CardContainer from "../CardContainer";
import { Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddDialog from "../AddDialog";
import styles from "./styles.module.scss";

const ItemContainer = ({
  title,
  onAdd,
  addTitle,
  addDescription,
  items,
  Item,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSave = async () => {
    onAdd();
    handleClose();
  };

  return (
    <CardContainer className={styles.card}>
      <div className={styles.root}>
        <div className={styles.topBar}>
          <Typography variant="h1">{title}</Typography>
          <AddCircleIcon style={{ fontSize: 44 }} onClick={handleOpen} />
        </div>
        {items &&
          items.map((item) => {
            return <Item key={item.address} item={item} />;
          })}
        {!items ||
          (items.length === 0 && <Typography variant="h2">No data</Typography>)}
      </div>
      <AddDialog
        title={addTitle}
        description={addDescription}
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      >
        {children}
      </AddDialog>
    </CardContainer>
  );
};

export default ItemContainer;
