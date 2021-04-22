import React from "react";
import Button from "react-bootstrap/Button";
function Header() {
  return (
    <header>
        <span style={{color: "#fff",fontWeight:"400",fontSize:"2em"}}>BaadhaiHo</span>
        <Button
          style={{float:"right",position:"abs"}}
          variant="outline-dark"
          onClick={() => {
          window.location.assign("/");
          history.push(props.route);
          }}
          >
          Logout
        </Button>
      </header>
  );
}

export default Header;
