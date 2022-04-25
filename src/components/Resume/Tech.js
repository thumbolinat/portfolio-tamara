import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiHeroku,
  SiInsomnia
  } from "react-icons/si";

function Tech() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiNodejs />
       <h5>Nodejs</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>MongoDB </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>GitHub </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h5>MySql </h5>
      </Col>  
     <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VS Studio </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
        <h5>Insomnia</h5>
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5>Heroku </h5>
      </Col>
    </Row>
  );
}
