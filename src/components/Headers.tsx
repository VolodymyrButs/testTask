import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import { Link, useLocation } from "react-router-dom";

import { CustomSwitch, CustomSwitchTheme } from "components/CustomSwitchs";

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

function useQueryParam() {
  return new URLSearchParams(useLocation().search);
}

export const UsersHeader = ({ pageCount }: { pageCount: number }) => {
  const classes = useStylesHeaders();
  let query = useQueryParam();
  const page = query.get("page");
  const ID = Number(page) || 1;
  return (
    <div className={classes.header}>
      <CustomSwitch />
      <span className={classes.navWrapper}>
        <Link to={ID === 1 ? `/?page=${ID}` : `/?page=${ID - 1}`}>
          <IconButton color="primary" disabled={ID === 1} size={"small"}>
            <ArrowBackIos />
          </IconButton>
        </Link>
        <span>Page: {ID} </span>
        <Link to={ID === pageCount ? `/?page=${ID}` : `/?page=${ID + 1}`}>
          <IconButton
            color="primary"
            disabled={ID === pageCount}
            size={"small"}
            edge={"end"}
          >
            <ArrowForwardIos />
          </IconButton>
        </Link>
      </span>
      <CustomSwitchTheme />
    </div>
  );
};

export const UserHeader = () => {
  const classes = useStylesHeaders();
  const location = useLocation<any>();

  return (
    <div className={classes.header}>
      <Link
        to={location.state ? `/?page=${location.state.page}` : `/?page=1`}
        className={classes.navLink}
      >
        <ArrowBackIos />
        BACK
      </Link>
      <CustomSwitchTheme />
    </div>
  );
};
