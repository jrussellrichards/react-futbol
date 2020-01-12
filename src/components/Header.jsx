import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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
    // m = "20"
}
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
                            <img src='C:\apps\react-futbol\src\resources\img\logo.png' />

                            React Fútbol
                            
                        <Button
                                style={button}
                                variant="contained" color="primary">
                                ¿Por qué React Fútbol?
                        </Button>
                        <Button
                                style={button}
                                variant="contained" color="primary">
                                Torneos
                        </Button>
                        </Typography>
                        </Grid>


                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>
        </div>
    )


}