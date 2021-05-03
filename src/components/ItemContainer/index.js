import React, { useState } from "react";
import CardContainer from "../CardContainer";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddBlock from "../AddBlock";
import cn from "classnames";
import styles from "./styles.module.scss";

const ItemContainer = ({
  title,
  onAdd,
  addTitle,
  addDescription,
  items,
  Item,
  className,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const toggleOpen = () => {
    setOpen(!open);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSave = async () => {
    onAdd();
    handleClose();
  };

  return (
    <CardContainer className={cn(styles.card, className)}>
      <div className={styles.root}>
        <div className={styles.topBar}>
          <Typography variant="h1">{title}</Typography>
        </div>
        {items &&
          items.map((item) => {
            return <Item key={item.address} item={item} />;
          })}
        <Accordion
          classes={{ root: styles.accordion, rounded: styles.accordion }}
          expanded={open}
        >
          <AccordionSummary
            classes={{
              root: styles.accordionSummary,
              content: styles.accordionSummary,
            }}
            onClick={toggleOpen}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <CardContainer className={styles.addCard}>
              <AddCircleIcon
                style={{ fontSize: 60, color: "white" }}
                onClick={handleOpen}
              />
            </CardContainer>
          </AccordionSummary>
          <AccordionDetails
            classes={{
              root: styles.accordionDetails,
            }}
          >
            <AddBlock
              title={addTitle}
              description={addDescription}
              handleClose={handleClose}
              handleSave={handleSave}
            >
              {children}
            </AddBlock>
          </AccordionDetails>
        </Accordion>
      </div>
    </CardContainer>
  );
};

export default ItemContainer;
