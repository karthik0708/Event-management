import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Cart from './Cart';
import {Link} from 'react-router-dom';

function Checkout(props){
    console.log(props.location);
    console.log(props.location.state);
    // const location = useLocation();
    // const params = new URLSearchParams(location.search);
    const email_id = props.location.state.email_id;
    const username = props.location.state.username;
    const [total,setTotal]=useState(0)
    const [cart,setCart]=useState([])
    useEffect(() => {
    if (cart) {
        axios.get('/'+'customer'+'/cart_items',{params: {cust_email: email_id, cust_name:username}})
            .then(res=>{setCart(res.data);calTotal(res.data)})
            .catch(error=>console.log(error))
        }
    },[]);
    function calTotal(cart){
        var t = 0;
        cart.map((item,index) =>{
            t = t + item.cost;
        })
        setTotal(t);
    }
    return (
    <Container>
        <Row>
            <Col>
                <h1>Total: {total}</h1>
            </Col>
        </Row>
        {cart.map((noteItem, index) => {
        return (
            <Cart
                key={index}
                id={index}
                cid="10"
                email={noteItem.email}
                type={noteItem.type}
                company={noteItem.company}
                cost={noteItem.cost}
            />
        );
      })}
      <Link to={{ 
          pathname: "/payment", 
          state: {email_id,username,total,cart}
          }}>
          <Button 
          variant="outline-dark"
          onClick={ () => {
            console.log(email_id,username,total,cart);
          }}
          >Checkout</Button>
        </Link>

    </Container>
    );
}

export default Checkout;