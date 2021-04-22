import React,{ useState,useEffect } from 'react';
import {useLocation} from 'react-router-dom';
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
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email_id = params.get('email');
  const username = params.get('username');
  

  const [temp1,setTemp1]=useState([])
  const [temp2,setTemp2]=useState([])
  const [temp3,setTemp3]=useState([])
  const [cart,setCart]=useState([])
  useEffect(() => {
    if (temp1) {
      axios.get('/'+'customer'+'/dis_ban')
        .then(res=>{setTemp1(res.data)})
        .catch(error=>console.log(error))
    }
  },[]);
  useEffect(() => {
    if (temp2) {
       axios.get('/'+'customer'+'/dis_cater')
        .then(res=>{setTemp2(res.data)})
        .catch(error=>console.log(error))
    }
  },[]);
  useEffect(() => {
    if (temp3) {
      axios.get('/'+'customer'+'/dis_photo')
        .then(res=>{setTemp3(res.data)})
        .catch(error=>console.log(error))
    }
  },[]);
  useEffect(() => {
    if (cart) {
      axios.get('/'+'customer'+'/cart_items',{params: {cust_email: email_id, cust_name:username}})
        .then(res=>{setCart(res.data)})
        .catch(error=>console.log(error))
    }
  },[]);

  function addCart(note){
    console.log("before set cart",note);
    setCart((prevNotes) => {
      return [...prevNotes,note];
    });
    console.log(cart);
  }

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
        <Tab label="Cart" {...a11yProps(3)} />
        {/* <Tab label="Item Five" {...a11yProps(4)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        
      {temp1.map((noteItem, index) => {
        return (

            <Card
              key={index}
              id={index}
              sid="1"
              cust_email={email_id}
              cust_name={username}
              email={noteItem.email}
              name={noteItem.name}
              company={noteItem.company}
              contact={noteItem.tel}
              cost={noteItem.cost}
              capacity={noteItem.capacity}
              content={noteItem.about}
              onCart={addCart}
            />
        );
      })}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {temp2.map((noteItem, index) => {
        return (
            <Card
              key={index}
              id={index}
              sid="2"
              cust_email={email_id}
              cust_name={username}
              email={noteItem.email}
              name={noteItem.name}
              company={noteItem.company}
              contact={noteItem.tel}
              cuisine={noteItem.cuisines}
              cost={noteItem.cost}
              content={noteItem.about}
              onCart={addCart}
            />
        );
      })}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {temp3.map((noteItem, index) => {
        return (
            <Card
              key={index}
              id={index}
              sid="3"
              cust_email={email_id}
              cust_name={username}
              email={noteItem.email}
              name={noteItem.name}
              company={noteItem.company}
              contact={noteItem.tel}
              cost={noteItem.charge}
              content={noteItem.about}
              onCart={addCart}
            />
        );
      })}
      </TabPanel>
      <TabPanel value={value} index={3}>
      {cart.map((noteItem, index) => {
        return (
            <Card
              key={index}
              id={index}
              sid={noteItem.sid}
              company={noteItem.company}
              contact={noteItem.tel}
              cost={noteItem.charge}
              content={noteItem.about}
              onCart={addCart}
            />
        );
      })}
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Five
      </TabPanel> */}
    </div>
  );
}

export default Customer;