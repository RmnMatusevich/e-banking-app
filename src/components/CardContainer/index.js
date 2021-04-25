import React from "react";
import { makeStyles } from "@material-ui/core";
import cn from "classnames";
const useStyles = makeStyles((theme) => ({
  card: {
    border: "1px solid #e4e6e7",
    borderRadius: 6,
    backgroundColor: theme.palette.white,
    padding: theme.spacing(3),
    cursor: "pointer",
    height: "min-content",
    "&:hover": {
      boxShadow:
        "0 3px 4px 0 rgba(15, 28, 36, 0.06), 0 20px 24px -6px rgba(15, 28, 36, 0.12)",
      "& $editIcon": {
        opacity: 1,
      },
    },
    transition: "0.3s ease",
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
