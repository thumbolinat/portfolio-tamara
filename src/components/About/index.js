import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.png";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
          <Container  className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
               About Me
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
              <p>My name is Tamara and I am a recent graduate of the University of Toronto Full Stack Development Program. I am curious by nature and love learning new things and creating. I am just at the beginning of my journey, but I am excited for all that is yet to come. Please feel free to explore my website, and don't hesitate to contact me with any questions you may have
              </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Home;
