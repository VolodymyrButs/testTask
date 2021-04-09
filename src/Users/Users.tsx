import { useEffect, useContext } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { myContext } from "contextProvider";
import { UsersList, UsersListIcon } from "components/UserListsTypes";
import { UsersHeader } from "components/Headers";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
  },
}));

const Users = () => {
  const queryClient = useQueryClient();
  const classes = useStyles();
  const { viewType = true, setIsLoading = () => {}, page = 1 } = useContext(
    myContext
  );

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
      <UsersHeader pageCount={Number(data?.total_page)} />

      {status === "error" && <div>Error: {error}</div>}
      {status === "success" &&
        (viewType ? <UsersList data={data} /> : <UsersListIcon data={data} />)}
    </Container>
  );
};

export default Users;
