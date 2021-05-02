import React, { useEffect, useState } from "react";
import { Typography, Avatar, makeStyles } from "@material-ui/core";
import CardContainer from "../../components/CardContainer";
import ConfirmDialog from "../../components/ConfirmDialog";
import api from "../../services";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    marginBottom: 16,
  },
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

const AdminPanel = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [open, setOpen] = useState({
    isOpen: false,
    id: null,
  });
  const classes = useStyles();

  const handleClose = () => {
    setOpen({ ...open, isOpen: false });
  };

  const handleOpen = (user) => {
    setOpen({ isOpen: true, id: user.id });
  };

  const handleSubmit = async () => {
    await api.admin.deleteUser({
      id: open.id,
    });
    const users = await api.admin.getAllUsers();
    setAllUsers(users);
    setOpen({ ...open, isOpen: false });
  };
  useEffect(() => {
    (async () => {
      const data = await api.admin.getAllUsers();
      setAllUsers(data);
    })();
  }, []);

  return (
    <div className={classes.root}>
      {allUsers.map((user) => {
        return (
          <CardContainer
            className={classes.card}
            key={user.id}
            onClick={() => handleOpen(user)}
          >
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
      })}
      <ConfirmDialog
        title="Do you want to delete the user?"
        description={`User with ID: ${open.id} will be forever deleted.`}
        open={open.isOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdminPanel;
