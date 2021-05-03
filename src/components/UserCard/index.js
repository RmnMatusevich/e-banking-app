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
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    setUser,
    updatedAt,
    createdAt,
    country,
    city,
    address,
    postalCode,
    token,
    ...rest
  } = user;

  return (
    <CardContainer>
      <div className={classes.userWithAvatar}>
        <Avatar classes={{ root: classes.avatar }}>
          {firstName && firstName[0]}
          {lastName && lastName[0]}
        </Avatar>
        <Typography variant={"h3"}>
          {firstName} {lastName}
        </Typography>
      </div>
      <div className={classes.userDetails}>
        <div
          style={{
            margin: "4px 0",
            padding: 6,
            border: "1px dashed #394648",
            borderRadius: "5px",
          }}
        >
          <Typography variant={"h5"}>{email}</Typography>
          <Typography variant={"h5"}>{phone}</Typography>
          <Typography variant={"h6"}>
            {country}, {city}
          </Typography>
          <Typography variant={"h6"}>
            {address}, {postalCode}
          </Typography>
        </div>
        <div
          style={{
            margin: "4px 0",
            padding: 6,
            border: "1px dashed #394648",
            borderRadius: "5px",
          }}
        >
          {Object.keys(rest).map((i, idx) => {
            return (
              <Typography variant={"h6"} key={`${id}-${idx}-${rest[i]}`}>
                {rest[i]}
              </Typography>
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
};

export default UserCard;
