import { withStyles, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import { myContext } from "contextProvider";
import Brightness6 from "@material-ui/icons/Brightness6";
import Menu from "@material-ui/icons/Menu";
import Apps from "@material-ui/icons/Apps";
import { IconButton } from "@material-ui/core";

const SwitchWrapperTheme = withStyles((theme) => ({
  root: {
    marginLeft: 10,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 110,
    },
  },
}))(({ classes, ...props }: { classes: any }) => {
  return <span className={classes.root} {...props} />;
});

const Icon = withStyles((theme) => ({
  root: {
    padding: "12px 5px",
    [theme.breakpoints.up("sm")]: {
      padding: 12,
    },
  },
}))(({ classes, onClick, ...props }: { classes: any; onClick: () => void }) => {
  return <IconButton className={classes.root} {...props} />;
});

const SwitchStyled = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    color: theme.palette.common.white,
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[400],
      "& + $track": {
        opacity: 1,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[400],
      },
    },
    "&$focusVisible $thumb": {
      color: theme.palette.grey[400],
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `2px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.white,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
    boxSizing: "border-box",
  },
  checked: {},
  focusVisible: {},
}))(
  ({
    classes,
    checked,
    onChange,
    ...props
  }: {
    classes: any;
    checked: boolean;
    onChange: () => void;
  }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        checked={checked}
        onChange={onChange}
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  }
);

export const CustomSwitch = () => {
  const { viewType, setViewType } = useContext(myContext);
  return (
    <span>
      <Icon onClick={() => setViewType(false)}>
        <Apps />
      </Icon>
      <span>
        <SwitchStyled
          checked={viewType}
          onChange={() => setViewType(!viewType)}
        />
      </span>
      <Icon onClick={() => setViewType(true)}>
        <Menu />
      </Icon>
    </span>
  );
};

export const CustomSwitchTheme = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(myContext);
  return (
    <SwitchWrapperTheme>
      <IconButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
        <Brightness6 />
      </IconButton>
    </SwitchWrapperTheme>
  );
};
