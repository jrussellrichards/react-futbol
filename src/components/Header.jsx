import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../resources/styles/grid.css'



export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className="icon-sm-logo"></div> 
            
            <div className="navWrapper">

                <i
                    class="fas fa-home fa-2x"
                    style = {{
                        color: "white",
                        "margin-left": "10px"}}

                    
                    
                ></i>
                <Typography variant="h6" className={classes.title}
                >

                    <Link
                        to="./"
                        style={button}
                    >
                        Home
                        </Link>

                </Typography>
                <i
                    class="fa fa-trophy fa-2x"
                    style = {{
                        color: "white",
                        "margin-left": "10px"}}

                    
                    
                ></i>
                <Typography variant="h6" className={classes.title}
                >

                    <Link
                        to="./Tournaments"
                        style={button}
                    >
                        Browse Tournaments
                        </Link>

                </Typography>
                <i
                    class="fas fa-futbol fa-2x"
                    style = {{
                        color: "white",
                        "margin-left": "10px"}}

                    
                    
                ></i>
                <Typography variant="h6" className={classes.title}
                >

                    <Link
                        to="./Organize"
                        style={button}
                    >
                        Organize Tournaments
                        </Link>

                </Typography>


            </div>




            <Button color="inherit">Login</Button>


        </div>
    )


}


const useStyles = makeStyles(theme => ({
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
    boxShadow: "none",
    color: "white",
    "text-decoration": "none",
    "margin-left": "2em"
}

const icon = {
    height: "4em",
    width: "6em"
}