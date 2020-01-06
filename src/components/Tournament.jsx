import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

  
export default function SelectedItem(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  
    return (
      
   
    <ListItem 
    button
    selected={selectedIndex === 3}
    onClick={event => handleListItemClick(event, 1)}
    alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={props.img} />
          </ListItemAvatar>
          <ListItemText
            primary={
                props.name
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {props.date_tournament}
                </Typography> <br></br>
                {props.sport}
              </React.Fragment>
            }
          />
        </ListItem>
  
       
    );
  }