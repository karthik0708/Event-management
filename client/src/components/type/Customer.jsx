import React,{ useState,useEffect } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "./Cards";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function Customer() {
  const [temp,setTemp]=useState("")
  useEffect(() => {
    if (!temp) {
      axios.get('/'+'customer'+'/dis_ban')
        .then(res=>{console.log(res.data)})
        .catch(error=>console.log(error))
        
      axios.get('/'+'customer'+'/dis_cater')
        .then(res=>{console.log(res.data)})
        .catch(error=>console.log(error))

      axios.get('/'+'customer'+'/dis_photo')
        .then(res=>{console.log(res.data)})
        .catch(error=>console.log(error))
    }
  });

  // setTemp(res.data)
  function hc1(){
    // axios.get('/'+'customer'+'/dis_ban')
    //     .then(res=>{console.log(res.data)})
    //     .catch(error=>console.log(error))
  }

  function hc2(){
    // axios.get('/'+'customer'+'/dis_cater')
    //     .then(res=>{console.log(res.data)})
    //     .catch(error=>console.log(error))
  }

  function hc3(){
    // axios.get('/'+'customer'+'/dis_photo')
    //     .then(res=>{console.log(res.data)})
    //     .catch(error=>console.log(error))
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Banquet Hall" onClick ={hc1} {...a11yProps(0)} />
        <Tab label="Caterer" onClick = {hc2} {...a11yProps(1)} />
        <Tab label="Photographer" onClick = {hc3} {...a11yProps(2)} />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Card 
          company= "Aditya Banquet"
          contact= "9849358202"
          capacity="2000"
          location="Hyderabad"
          content="We are the best at what we do!"
        />
        <Card 
          company= ""
          contact= ""
          capacity=""
          location=""
          content=""
        />
        <Card 
          company= ""
          contact= ""
          capacity=""
          location=""
          content=""
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel> */}
    </div>
  );
}

export default Customer;