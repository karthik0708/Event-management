import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";

function Cards() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button style={{float:"right"}} variant="outline-dark">Dark</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;