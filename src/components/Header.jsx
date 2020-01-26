import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";



export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
            >
                <Toolbar>
                    <Grid container className={classes.root} spacing={4}>

                        <Grid item xs={2}>
                        </Grid>

                        <Typography variant="h6" className={classes.title}
                        >
                            {/* <img 
                            style = {icon}
                            src='src/resources/img/logo.png' /> */}

                                               
                            <Link
                                to="./"
                                style={button}
                            >
                                ¿Por qué React Fútbol?
                        </Link>
                     
                            <Link
                                to="./tournaments"
                                style={button}
                            >
                                Torneos
                        </Link>
                        </Typography>
                    </Grid>


                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>
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