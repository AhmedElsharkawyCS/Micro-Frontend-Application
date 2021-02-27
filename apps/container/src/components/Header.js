import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Header({ isAuthenticated, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (isAuthenticated && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar position='fixed' color='default' elevation={1} className={classes.appBar} dir='auto'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' color='inherit' noWrap component={RouterLink} to='/' title={"Home Page"}>
            Home
          </Typography>
          <div>
            {isAuthenticated && (
              <Button
                color='primary'
                title={"Go To Main Dashboard"}
                variant='contained'
                className={classes.link}
                component={RouterLink}
                to={"/dashboard"}
              >
                {"Dashboard"}
              </Button>
            )}
            <button style={{ visibility: "hidden" }}>{"s"}</button>
            <Button
              color='secondary'
              variant='contained'
              title={"Logout and remove your account account"}
              className={classes.link}
              component={RouterLink}
              to={isAuthenticated ? "/" : "/auth/signin"}
              onClick={onClick}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
