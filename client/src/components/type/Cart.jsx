import React from 'react';
import Card from "react-bootstrap/Card";

function Cart(props){
return(
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{props.company}</Card.Title>
        <Card.Text>
            <p>{props.type}</p>
            {props.cid != "10"?<p>Contact No: {props.contact}</p>:null}
            <p>Amount to be paid: {props.cost}</p>
            {props.cid == "10"?<p>email:{props.email}</p>:null}
        </Card.Text>
        {/* <Button onClick ={handle} style={{float:"right"}} variant="outline-dark">Add to Cart</Button> */}
      </Card.Body>
    </Card>
);

}

export default Cart;
