import Card from "react-bootstrap/Card";
import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Cards(props) {
  function handle(){
    var note;
    var type;
    props.sid == "1" ? type ="banquet": (props.sid == "2"? type="caterer":type="photographer")
    if(props.sid == "1"){
      console.log("inside handle",props.date);
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
        capacity:props.capacity,
        content:props.content,
        date:props.date
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
        content:props.content,
        date:props.date
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
        content:props.content,
        date:props.date
      }
    }
    console.log("Inside handle",note);
    axios.post('/customer'+'/tocart',note)
      .then(res=>console.log("sent successfully",note))
      .catch(error=>console.log(error))
    
  }
  return (
    <Card className="text-center" style={{width:"400px"}}>
      <Card.Header>{props.company}</Card.Header>
      <Card.Body>
        <Card.Title>{props.content}</Card.Title>
        <Card.Text>
        {/* {JSON.stringify(props.date)} */}
        <p>{props.sid == "1"?"Capacity: ": (props.sid == "2"?"Cuisines: ":null)} {props.sid == "1"?props.capacity:(props.sid == "2"?props.cuisine:null)} </p>
          <p>{props.sid == "1"?"Cost per day: ": (props.sid == "2"?"Cost: ": "Cost per hour:")} {props.sid == "1"?props.cost:(props.sid == "2"?props.cost:props.cost)}</p>
          <p>Contact No: {props.contact}</p>
        </Card.Text>
        <Button onClick ={handle} style={{float:"right"}} variant="outline-dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;