import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function StoreListing() {
  return (
    <>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Col xs="6" md="4">
            <Row>
              <Col xs="12" md="6">
                <Image src="[IMG SRC]" roundedCircle />
              </Col>
              <Col xs="12" md="6">
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col xs="6" md="4">
            <Row>
              <Col xs="12" md="6">
                <Image src="[IMG SRC]" roundedCircle />
              </Col>
              <Col xs="12" md="6">
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col xs="6" md="4">
            <Row>
              <Col xs="12" md="6">
                <Image src="[IMG SRC]" roundedCircle />
              </Col>
              <Col xs="12" md="6">
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StoreListing;
