import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { authenticationService } from '@/_services';

const button = {
  boxShadow: 'none',
  color: 'white',
  'text-decoration': 'none',
  'margin-left': '2em',
};
const Menu_style = {
  "display": "grid",
  "grid-gap": "3px",
  "grid-template-rows": "repeat(10,1fr) 3fr  ",
  "background-color": "black",
  "max-height": "100vh",
};
const login_style = {
  "grid-row-start": "-1"
};



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
  rowNav:{
    display: "grid",
    "grid-gap": "10px",
    "grid-template-columns": "10px 100%",
  }
}));

export const Menu = (props) => {
  const classes = useStyles();

  
  var compi = 'Hello Function Component!';

  

  // console.log(props.currentUser+"hola")
  if (props.currentUser) {
    compi = <Typography
    variant="h6"
    className={classes.title}
  >
  
    <Link
      to="./Login"
      style={button}
      onClick = {authenticationService.logout}
    >
      Log Out
    </Link>

  </Typography>;
  } else {
    compi = <div>
      
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
  <Typography
    variant="h6"
    className={classes.title}
  >
  
    <Link
      to="./CreateAccount"
      style={button}
    >
      Create Account
    </Link>

  </Typography>
  </div>
  }
  return (
    <aside className="menu" className="header">
      <div className="icon-sm-logo" />

      <ul className="menu-list"
         style={Menu_style}
      >
        <li
            className={classes.rowNav}
        >        
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
          </li>
        <li 
            className={classes.rowNav}
      Style = {login_style}

        
        >       
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
          </li>
        <li
            className={classes.rowNav}
        
        >       
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
              to="./CreateTournament"
              style={button}
            >
              Organize Tournaments
            </Link>

          </Typography>
          </li>
        <li
            className={classes.rowNav}
        
        >       
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
              to="./CreateMatch"
              style={button}
            >
              Create Match
            </Link>

          </Typography>
          </li>
        <li
            className={classes.rowNav}
        
        >       
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
              to="./CreateMatch"
              style={button}
            >
              Find Match
            </Link>

          </Typography>
          </li>
        <li
        className={classes.rowNav}
        style = {login_style}
        >       
        <i
            className="far fa-user fa-2x"
            style={{
              color: 'white',
              'margin-left': '10px',
            }}
          />
        {compi}
          </li>
       
      </ul>
      
    </aside>
  )
};
