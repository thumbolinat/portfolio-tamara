import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Quiz from "../../Assets/Projects/Quiz.jpg";
import ImgSmsh from "../../Assets/Projects/ImgSmsh.png";
import Demo from "../../Assets/Projects/Demo.gif";
import screenshot2 from "../../Assets/Projects/screenshot2.jpg";
import weatherdashboard from "../../Assets/Projects/weatherdashboard.jpg";
import Picture1 from "../../Assets/Projects/Picture1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        <p style={{ color: "white" }}>
        </p>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImgSmsh}
              title="Image Smash"
              description="An app that allows usrs to create uniquq images and quotes based on their inputs"
              link="https://thumbolinat.github.io/ImageSmash/"
              link2="https://github.com/thumbolinat/ImageSmash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Demo}
              title="Blog"
              description="Social media application that allows users to create accounts, create, edit, and delete posts. Users can also comment on each other's posts."
              link="https://portside.herokuapp.com"
              link2="https://github.com/thumbolinat/project-2-blog" 

             
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              title="Password Generator"
              description="An automatic password generator"
              link="https://thumbolinat.github.io/password/"
              link2="https://github.com/thumbolinat/password" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={screenshot2}
              title="Budget Tracker"
              description="An app that allows users to keep track of their finances in real time, both off and online"
              link="https://thymefield.herokuapp.com/"
              link2="https://github.com/thumbolinat/budget-tracker" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherdashboard}
              title="Weather Dashboard"
              description="An app that allows user to search the weather forcast based on ther input location"
              link="https://thumbolinat.github.io/weather-dashboard/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Picture1}
              title="Portfolio"
              description="Simple 1 page HTML and CSS porfolio"
              link="https://thumbolinat.github.io/portfolio/"
              link2="https://github.com/thumbolinat/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
