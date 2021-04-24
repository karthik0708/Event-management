import React,{useState} from "react";
import CreditCardForm from "./payment/Components/CreditCardForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";
function Pay(props) {
    const [isExpanded, setExpanded] = useState(false);
    console.log(props.location.state)
    const email_id = props.location.state.email_id;
    const username = props.location.state.username;
    const cart = props.location.state.cart;
    const amount = props.location.state.total;
function handleClick(){
    var note = {
        cust_name: username,
        cust_email: email_id,
        cart_items: cart,
        total_amount: amount
    }
    console.log(note);
    axios.post('/'+'book',note)
      .then(res=>console.log("sent successfully",note))
      .catch(error=>console.log(error))
    
    setExpanded(true);
}
  return (
      <Container>
        {!isExpanded && <>
        <Row>
        <Col></Col>
            <Col style={{margin:"50px auto 30px auto"}}>
                <CreditCardForm />
            </Col>
            <Col></Col>           
        </Row>
         <Row>
            <Col></Col>
            <Col style={{margin:"auto 200px auto 485px"}}>
                <Button
                    onClick={handleClick}
                    variant="outline-dark"
                >
                    Proceed
                </Button>
            </Col>
            <Col></Col> 
        </Row>
        </>}
        {isExpanded && <Row>
            <Col>
               <h1>Transaction Completed!!</h1> 
            </Col>           
        </Row>}
        
      </Container>
  );
}

export default Pay;