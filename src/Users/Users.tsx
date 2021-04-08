import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { IconButton, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CustomSwitch, CustomSwitchTheme } from "components/CustomSwitchs";
import { myContext } from "contextProvider";
import { UsersList, UsersListIcon } from "components/UserListsTypes";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

const Users = () => {
  const queryClient = useQueryClient();
  const classes = useStyles();
  const { viewType, setIsLoading, page, setPage } = useContext(myContext);

  async function fetchUsers(page: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    return data;
  }

  const { status, data, error } = useQuery(
    ["users", page],
    () => fetchUsers(page),
    {
      staleTime: 5000,
    }
  );
  useEffect(() => {
    if (page < data?.total_pages) {
      queryClient.prefetchQuery(["users", page + 1], () =>
        fetchUsers(page + 1)
      );
    }
  }, [data, page, queryClient]);
  switch (status) {
    case "loading":
      setIsLoading(true);
      break;
    default:
      setIsLoading(false);
      break;
  }
  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.header}>
        <CustomSwitch />
        <span className={classes.navWrapper}>
          <IconButton
            color="primary"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            size={"small"}
          >
            <ArrowBackIos />
          </IconButton>
          <span>Page: {page} </span>
          <IconButton
            color="primary"
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === data?.total_pages}
            size={"small"}
            edge={"end"}
          >
            <ArrowForwardIos />
          </IconButton>
        </span>
        <CustomSwitchTheme />
      </div>

      {status === "error" && <div>Error: {error}</div>}
      {status === "success" &&
        (viewType ? <UsersList data={data} /> : <UsersListIcon data={data} />)}
    </Container>
  );
};

export default Users;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
    height: 48,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  navWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));
