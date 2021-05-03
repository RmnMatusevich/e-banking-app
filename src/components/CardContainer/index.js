import React from "react";
import { makeStyles } from "@material-ui/core";
import cn from "classnames";
const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 6,
    border: `1px dashed #394648`,
    backgroundColor: theme.palette.yellow,
    borderStyle: "10px",
    backgroundSize: "3px 3px",
    padding: theme.spacing(2),
    cursor: "pointer",
    height: "min-content",
    "&:hover": {
      boxShadow: "16px 16px 17px -8px rgba(0, 0, 0, 0.27)",
    },
    transition: "0.1s ease",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    flex: "0 0 auto",
    color: theme.palette.dark,
    fontSize: 18,
    fontWeight: 500,
  },
  description: {
    width: "100%",
    overflow: "hidden",
    fontSize: 14,
    color: "#545e63",
    marginBottom: 10,
    lineHeight: 1.4,
  },
}));

const CardContainer = ({ children, onClick, className }) => {
  const classes = useStyles();

  return (
    <div
      className={cn(classes.card, className)}
      onClick={onClick ? onClick : null}
    >
      {children}
    </div>
  );
};

export default CardContainer;
