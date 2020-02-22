import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChangeSports(valu) {
    // Here, we invoke the callback with the new value
    props.onChangeSport(valu);
  }

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
          <Tab label="Basketball 3 vs 3" icon={<i className="fas fa-basketball-ball fa-3x" />} {...a11yProps(0)}
            onClick={() => handleChangeSports("basket3")}
          />
          <Tab label="Basketball 5 vs 5" icon={<i className="fas fa-basketball-ball fa-3x" />} {...a11yProps(1)}
          onClick={() => handleChangeSports("basket5")} />
          <Tab label="Voleyball" icon={<i className="fas fa-volleyball-ball fa-3x" />} {...a11yProps(2)} 
          onClick={() => handleChangeSports("volley")}/>
          <Tab label="Rugby" icon={<i className="fas fa-football-ball fa-3x" />} {...a11yProps(3)} 
          onClick={() => handleChangeSports("rugby")}/>
          <Tab label="fútbol 5 vs 5" icon={<i className="far fa-futbol fa-3x" />} {...a11yProps(4)} 
          onClick={() => handleChangeSports("futbol5")}/>
          <Tab label="fútbol 7 vs 7" icon={<i className="far fa-futbol fa-3x" />} {...a11yProps(6)} 
          onClick={() => handleChangeSports("futbol7")}/>
          <Tab label="fútbol 11 vs 11" icon={<i className="far fa-futbol fa-3x" />} {...a11yProps(5)} 
          onClick={() => handleChangeSports("futbol11")}/>
        </Tabs>
      </AppBar>

    </div>
  );
}
