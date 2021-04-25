import React from "react";
import CardContainer from "../CardContainer";
import { useUser } from "../../context/UserProvider";
import { makeStyles, Typography, Avatar } from "@material-ui/core";

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
  userDetails: {
    marginLeft: 6,
  },
}));

const UserCard = () => {
  const user = useUser();
  const classes = useStyles();

  return (
    <CardContainer>
      <div className={classes.userWithAvatar}>
        <Avatar classes={{ root: classes.avatar }}>
          {user.firstName && user.firstName[0]}
          {user.lastName && user.lastName[0]}
        </Avatar>
        <Typography variant={"h3"}>
          {user.firstName} {user.lastName}
        </Typography>
      </div>
      <div className={classes.userDetails}>
        <Typography variant={"h5"}>{user.email}</Typography>
        <Typography variant={"h5"}>{user.phone}</Typography>
        <Typography variant={"h6"}>
          {user.country}, {user.city}
        </Typography>
        <Typography variant={"h6"}>
          {user.address}, {user.postalCode}
        </Typography>
      </div>
    </CardContainer>
  );
};

export default UserCard;
