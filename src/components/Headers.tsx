import { useContext } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

import { CustomSwitch, CustomSwitchTheme } from "components/CustomSwitchs";
import { myContext } from "contextProvider";

const useStylesHeaders = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
    height: 48,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
  navWrapper: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
  },
}));

export const UsersHeader = ({ pageCount }: { pageCount: number }) => {
  const classes = useStylesHeaders();
  const { page = 1, setPage = () => {} } = useContext(myContext);
  return (
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
          disabled={page === pageCount}
          size={"small"}
          edge={"end"}
        >
          <ArrowForwardIos />
        </IconButton>
      </span>
      <CustomSwitchTheme />
    </div>
  );
};

export const UserHeader = () => {
  const classes = useStylesHeaders();
  return (
    <div className={classes.header}>
      {" "}
      <Link to={`/`} className={classes.navLink}>
        <ArrowBackIos />
        BACK
      </Link>{" "}
      <CustomSwitchTheme />
    </div>
  );
};
