import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";
import { AppContext } from "contextProvider";

import Users from "Users/Users";
import User from "User/User";
import { useContext } from "react";
import { BadRequestModal } from "components/BadRequest";

const Wrapper = withStyles((theme) => ({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
}))(({ classes, ...props }: { classes: any }) => {
  return <div className={classes.root} {...props} />;
});

const App = () => {
  const { isDarkTheme } = useContext(AppContext);

  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router basename="/testTask">
          <Switch>
            <Route exact path="/" children={<Users />} />
            <Route path="/user/:id" children={<User />} />
            <Route path="*" children={<BadRequestModal />} />
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
