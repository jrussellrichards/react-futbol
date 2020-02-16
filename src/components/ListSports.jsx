import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className="search">
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Basketball 3 vs 3" icon={<i class='fas fa-basketball-ball fa-3x'></i>} {...a11yProps(0)} />
          <Tab label="Basketball 5 vs 5" icon={<i class='fas fa-basketball-ball fa-3x'></i>} {...a11yProps(1)} />
          <Tab label="Voleyball" icon={<i class='fas fa-volleyball-ball fa-3x'></i>} {...a11yProps(2)} />
          <Tab label="Rugby" icon={<i class='fas fa-football-ball fa-3x'></i>} {...a11yProps(3)} />
          <Tab label="fútbol 5 vs 5" icon={<i class='far fa-futbol fa-3x'></i>} {...a11yProps(4)} />
          <Tab label="fútbol 7 vs 7" icon={<i class='far fa-futbol fa-3x'></i>} {...a11yProps(6)} />
          <Tab label="fútbol 11 vs 11" icon={<i class='far fa-futbol fa-3x'></i>} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      
    </div>
  );
}