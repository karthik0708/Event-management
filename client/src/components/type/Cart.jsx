import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Cart(props){
function handle(){
  axios.post('/customer'+'/remove_item',props.note)
      .then(res=>console.log("sent successfully"))
      .catch(error=>console.log(error))
}
  return(
    <Card className="text-center" style={{width:"500px"}}>
      <Card.Body>
        <Card.Title>{props.company}</Card.Title>
        <Card.Text>
            <p>{props.type}</p>
            {props.cid != "10"?<p>Contact No: {props.contact}</p>:null}
            <p>Amount to be paid: {props.cost}</p>
            {props.cid == "10"?<p>email:{props.email}</p>:null}
        </Card.Text>
        <Button onClick ={handle} style={{float:"right"}} variant="dark">Delete</Button>
      </Card.Body>
    </Card>
);

}

export default Cart;
