import { useContext } from "react";
import { Container } from "@material-ui/core";
import { makeStyles, Grid } from "@material-ui/core";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { UserHeader } from "components/Headers";
import { myContext } from "contextProvider";

async function fetchUser(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
  return data.data;
}

const useStylesUser = makeStyles((theme) => ({
  container: {
    margin: "0px auto",
    padding: 0,
  },
  root: {
    maxHeight: "calc(100vh - 45px)",
    overflowY: "scroll",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontStyle: "italic",
  },
  avatar: {
    width: 300,
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
    color: theme.palette.text.primary,
    margin: "3px",
    maxWidth: 280,
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: 500,
  },
}));

const User = () => {
  const { id }: { id: string } = useParams();
  const { setIsLoading = () => {} } = useContext(myContext);

  const { data, status, error } = useQuery(["user", id], () => fetchUser(id), {
    staleTime: 5000,
  });
  switch (status) {
    case "loading":
      setIsLoading(true);
      break;
    default:
      setIsLoading(false);
      break;
  }
  const classes = useStylesUser();
  return (
    <Container maxWidth="md" className={classes.container}>
      {status === "error" && <div>Error: {error}</div>}
      {status === "success" && (
        <>
          <UserHeader />
          <Grid item key={data.id} className={classes.root}>
            <div className={classes.item}>
              <img
                src={data.avatar}
                alt="user_avatar"
                className={classes.avatar}
              />{" "}
              <div className={classes.info}>
                <p className={classes.p}>
                  Name: {data.first_name} {data.last_name}
                </p>
                <p className={classes.p}>
                  Email:{" "}
                  <a className={classes.link} href={`mailto:${data.email}`}>
                    {data.email}
                  </a>
                </p>
              </div>
            </div>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default User;
