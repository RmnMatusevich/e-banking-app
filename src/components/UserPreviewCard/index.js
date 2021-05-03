import React, { useState } from "react";
import CardContainer from "../CardContainer";
import { useUser } from "../../context/UserProvider";
import { makeStyles, Typography, Avatar, Menu } from "@material-ui/core";
import UserCard from "../UserCard";

const useStyles = makeStyles((theme) => ({
  userWithAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  MuiListPadding: {
    padding: 0,
  },
  root: {
    marginTop: -11,
  },
}));

const UserPreviewCard = () => {
  const user = useUser();
  const classes = useStyles();
  const { firstName, lastName } = user;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (user.firstName)
    return (
      <>
        <CardContainer onClick={handleClick}>
          <div className={classes.userWithAvatar}>
            <Avatar classes={{ root: classes.avatar }}>
              {firstName && firstName[0]}
              {lastName && lastName[0]}
            </Avatar>
            <Typography variant={"h3"}>
              {firstName} {lastName}
            </Typography>
          </div>
        </CardContainer>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{ list: classes.MuiListPadding, paper: classes.root }}
        >
          <UserCard />
        </Menu>
      </>
    );
  else return null;
};

export default UserPreviewCard;
