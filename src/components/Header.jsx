import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../resources/styles/grid.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const button = {
  boxShadow: 'none',
  color: 'white',
  'text-decoration': 'none',
  'margin-left': '2em',
};

export default function Header() {
  const classes = useStyles();

  return (
    <div
      className="header"
    >
      <div className={classes.root}>

        <div className="icon-sm-logo" />

        <div className="navWrapper">

          <i
            className="fas fa-home fa-2x"
            style={{
              color: 'white',
              'margin-left': '10px',
            }}
          />
          <Typography
            variant="h6"
            className={classes.title}
          >

            <Link
              to="./"
              style={button}
            >
              Home
            </Link>

          </Typography>
          <i
            className="fa fa-trophy fa-2x"
            style={{
              color: 'white',
              'margin-left': '10px',
            }}
          />
          <Typography
            variant="h6"
            className={classes.title}
          >

            <Link
              to="./Tournaments"
              style={button}
            >
              Browse Tournaments
            </Link>

          </Typography>
          <i
            className="fas fa-futbol fa-2x"
            style={{
              color: 'white',
              'margin-left': '10px',
            }}
          />
          <Typography
            variant="h6"
            className={classes.title}
          >

            <Link
              to="./Organize"
              style={button}
            >
              Organize Tournaments
            </Link>

          </Typography>

          {/* login */}
          <i
            className="far fa-user fa-2x"
            style={{
              color: 'white',
              'margin-left': '10px',
            }}
          />
          <Typography
            variant="h6"
            className={classes.title}
          >

            <Link
              to="./Login"
              style={button}
            >
              Login
            </Link>

          </Typography>


        </div>


        <Button color="inherit">Login</Button>


      </div>
    </div>
  );
}
