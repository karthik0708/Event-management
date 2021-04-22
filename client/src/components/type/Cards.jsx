import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";


function Cards(props) {
  function handle(){
    var note;
    var type;
    props.sid == "1" ? type ="banquet": (props.sid == "2"? type="caterer":type="photographer")
    if(props.sid == "1"){
      note = {
        email:props.email,
        name:props.name,
        type:type,
        cust_email:props.cust_email,
        cust_name:props.cust_name,
        sid:props.sid,
        company:props.company,
        contact:props.contact,
        cost:props.location,
        capacity:props.capacity,
        content:props.content
      }
    }else if(props.sid == "2"){
      note = {
        email:props.email,
        name:props.name,
        type:type,
        cust_email:props.cust_email,
        cust_name:props.cust_name,
        sid:props.sid,
        company:props.company,
        contact:props.contact,
        cuisine:props.cuisine,
        cost:props.cost,
        content:props.content
      }
    }else{
      note = {
        email:props.email,
        name:props.name,
        type:type,
        cust_email:props.cust_email,
        cust_name:props.cust_name,
        sid:props.sid,
        company:props.company,
        contact:props.contact,
        cost:props.cost,
        content:props.content
      }
    }
    
    axios.post('/customer'+'/tocart',note)
      .then(res=>console.log("sent successfully"))
      .catch(error=>console.log(error))
    
  }
  return (
    <Card className="text-center">
      <Card.Header>{props.company}</Card.Header>
      <Card.Body>
        <Card.Title>{props.content}</Card.Title>
        <Card.Text>
          <p>{props.sid == "1"?"Location: ": (props.sid == "2"?"Cuisines: ":null)} {props.sid == "1"?props.location:(props.sid == "2"?props.cuisines:null)} </p>
          <p>{props.sid == "1"?"Capacity: ": (props.sid == "2"?"Cost: ": "Cost:")} {props.sid == "1"?props.capacity:(props.sid == "2"?props.cost:props.cost)}</p>
          <p>Contact No: {props.contact}</p>
        </Card.Text>
        <Button onClick ={handle} style={{float:"right"}} variant="outline-dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;