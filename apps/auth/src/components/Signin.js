import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' to='/'>
        Made by Sharkawy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ onAuth }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserSingIn = () => {
    const localUserObject = localStorage.getItem("auth-user");
    if (!localUserObject) return toast.error("User not exist. Try to register");
    try {
      const user = JSON.parse(localUserObject);
      if (email !== user.email || password !== user.password) return toast.error("Invalid user credentials!");
      onAuth(user);
    } catch (error) {
      console.error(JSON.stringify({ error }));
      return toast.error("User not exist. Register and try again!");
    }
  };
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
          <TextField
            id='email'
            label='Email Address'
            variant='outlined'
            margin='normal'
            autoFocus
            fullWidth
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <TextField
            label='Password'
            type='password'
            id='password'
            variant='outlined'
            autoFocus
            fullWidth
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} onClick={handleUserSingIn}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/auth/signup'>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
