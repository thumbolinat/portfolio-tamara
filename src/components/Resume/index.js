import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tech from "./Tech";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <Container fluid className="about-section">
    
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px",position: "relative" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Resume
            </h1>
            <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
           href={"https://ca.linkedin.com/in/tamara-macalalad-378247ba"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
          </Col>
        </Row>
       

        <Tech />

        
       
       
      </Container>
    </Container>
  );
}

export default Resume;
