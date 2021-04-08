import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Link } from "react-router-dom";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export const UsersList = ({ data }: { data: { data: User[] } }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));

  const useStylesList = makeStyles({
    root: {
      maxHeight: "calc(100vh - 65px)",
      overflowY: "scroll",
    },

    link: {
      textDecoration: "none",
    },
    item: {
      display: "flex",
      margin: "5px",
      padding: "16px",
      boxShadow: "inset 0 0 10px #888",
      "&:hover": { boxShadow: "inset 0 0 20px #888" },
    },
    avatar: {
      height: "40px",
      width: "40px",
      objectFit: "contain",
      marginRight: "10px",
      [theme.breakpoints.up("sm")]: {
        height: "50px",
        width: "50px",
      },
    },
    info: {
      color: "black",
      display: "inline-block",
    },
    p: {
      margin: "3px",
      width: 240,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.palette.text.primary,
      [theme.breakpoints.up("sm")]: {
        width: 280,
      },
    },
  });

  const classes = useStylesList();
  return (
    <Grid container className={classes.root}>
      {data ? (
        data.data.map((user) => (
          <Grid item xs={desktop ? 6 : 12} key={user.id}>
            <Link to={`/user/${user.id}`} className={classes.link}>
              <div className={classes.item}>
                <img
                  src={user.avatar}
                  alt="user_avatar"
                  className={classes.avatar}
                />{" "}
                <div className={classes.info}>
                  <p className={classes.p}>
                    Name: {user.first_name} {user.last_name}
                  </p>
                  <p className={classes.p}>Email: {user.email}</p>
                </div>
              </div>
            </Link>
          </Grid>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Grid>
  );
};

export const UsersListIcon = ({ data }: { data: { data: User[] } }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));

  const useStylesIcon = makeStyles({
    root: {
      maxHeight: "calc(100vh - 65px)",
      overflowY: "scroll",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 5,
      padding: 5,
      boxShadow: "inset 0 0 10px #888",
      "&:hover": { boxShadow: "inset 0 0 30px #888" },
    },
    link: { textDecoration: "none" },
    avatar: {
      height: 200,
      objectFit: "contain",
      maxWidth: "100%",
      margin: "10px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      color: "black",
      width: "100%",
      textAlign: "center",
      alignItems: "center",
    },
    p: {
      margin: "3px",
      maxWidth: 280,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.palette.text.primary,
    },
  });

  const classes = useStylesIcon();
  return (
    <Grid container className={classes.root}>
      {data ? (
        data.data.map((user) => (
          <Grid item xs={desktop ? 6 : 12} key={user.id}>
            <Link to={`/user/${user.id}`} className={classes.link}>
              <div className={classes.item}>
                <img
                  src={user.avatar}
                  alt="user_avatar"
                  className={classes.avatar}
                />{" "}
                <div className={classes.info}>
                  <p className={classes.p}>
                    Name: {user.first_name} {user.last_name}
                  </p>
                  <p className={classes.p}>Email: {user.email}</p>
                </div>
              </div>
            </Link>
          </Grid>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Grid>
  );
};
