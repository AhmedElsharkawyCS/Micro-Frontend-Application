import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import faker from "faker";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <MaterialLink component={Link} to='https://github.com/AhmedElsharkawyCS/Micro-Frontend-Application' color='inherit'>
        A.Sharkawy
      </MaterialLink>{" "}
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#ececec", //theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  iconButton: {
    marginRight: 30,
    marginTop: 15,
  },
}));

const logos = [
  "https://picsum.photos/id/0/5616/3744",
  "https://picsum.photos/id/1/5616/3744",
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/1024/1920/1280",
  "https://picsum.photos/id/1022/6000/3376",
];
export default function Album({ isAuthenticated }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='md'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              Shopping application
            </Typography>
            <Typography variant='body2' align='center' color='textSecondary' style={{ paddingTop: 25, paddingBottom: 20 }}>
              <Fab
                variant='extended'
                className={classes.iconButton}
                target={"blank"}
                href={"https://github.com/AhmedElsharkawyCS/Micro-Frontend-Application"}
              >
                <GithubIcon />
                Source Code
              </Fab>
              <Fab variant='extended' className={classes.iconButton} target={"blank"} href={"https://github.com/AhmedElsharkawyCS"}>
                <GithubIcon />
                Github
              </Fab>
              <Fab
                variant='extended'
                className={classes.iconButton}
                target={"blank"}
                href={"https://www.linkedin.com/in/ahmed-elsharkawy-3684a5140/"}
              >
                <LinkedInIcon />
                LinkedIn
              </Fab>
              <Fab variant='extended' className={classes.iconButton} target={"blank"} href={"tel:+0201061554024"}>
                <PhoneIcon />
                Contact Me
              </Fab>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Link to='/pricing'>
                    <Button variant='contained' color='primary'>
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/pricing'>
                    <Button variant='outlined' color='primary'>
                      Packages
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Array.from(Array(10).keys()).map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={logos[Math.floor(Math.random() * logos.length)]} title='Food title' />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {faker.lorem.word()}
                    </Typography>
                    <Typography> {faker.lorem.paragraph()}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          Micro-Frontend E-commerce application
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
