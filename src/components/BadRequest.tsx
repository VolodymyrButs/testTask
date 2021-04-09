import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    opacity: 0.8,
    zIndex: 1,
  },
  p: {
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: 30,
  },
}));

export const BadRequestModal = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.p}>Something went wrong</p>
      <Link to={"/?page=1"}>
        <Button variant="contained" color="primary">
          To Main Page
        </Button>
      </Link>
    </div>
  );
};
