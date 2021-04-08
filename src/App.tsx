import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { myContext } from "contextProvider";

import Users from "Users/Users";
import User from "User/User";
import { useContext } from "react";
import { styled } from "@material-ui/core/styles";
import { LoadingModal } from "components/Loading";

const queryClient = new QueryClient();

const App = () => {
  const [page, setPage] = useState(1);
  const { isDarkTheme, isLoading } = useContext(myContext);

  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? "dark" : "light",
    },
  });

  const Wrapper = styled("div")({
    position: "relative",
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          {isLoading && <LoadingModal />}
          <Router>
            <Switch>
              <Route exact path="/">
                <Users page={page} setPage={setPage} />
              </Route>
              <Route path="/user/:id" children={<User />} />
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
