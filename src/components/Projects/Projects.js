import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bvm from "../../Assets/Projects/bvm.png";
import emotion from "../../Assets/Projects/emotion.png";
import crud_redux from "../../Assets/Projects/crud_redux.png";
import todo from "../../Assets/Projects/todo.png";
import superreach from "../../Assets/Projects/superreach.png";
import suicide from "../../Assets/Projects/suicide.png";
import edly from "../../Assets/Projects/edly.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="The Simple To-Do List App is a straightforward yet powerful task management tool designed to help users organize their daily tasks and responsibilities. With an intuitive user interface, users can easily add, edit, and remove tasks, as well as mark them as completed."
              ghLink="https://github.com/yagnikdevani00/todo-web"
              demoLink="https://todo-web-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edly}
              isBlog={false}
              title="Edly"
              description="The Responsively Designed Website is a modern web project that prioritizes an optimal user experience across various devices and screen sizes. With the ever-growing popularity of mobile devices, tablets, and desktops, creating a responsive website has become essential. "
              ghLink="https://github.com/yagnikdevani00/responsive-website-html-css"
              demoLink="https://responsive-website-html-css-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud_redux}
              isBlog={false}
              title="Crud Using Redux"
              description="The CRUD Using Redux project is a robust web application that leverages the power of Redux, a state management library for JavaScript, to implement Create, Read, Update, and Delete (CRUD) operations."
              ghLink="https://github.com/yagnikdevani00/crud-redux"
              demoLink="https://crud-redux-three.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bvm}
              isBlog={false}
              title="Bvm Admin Panel"
              description="The BVM Admin Panel for IT Company Management is a robust web application tailored to meet the unique needs of IT companies. This comprehensive platform serves as a centralized hub for managing employees, administrators, projects, and resources, fostering efficiency, collaboration, and informed decision-making within the organization."
              ghLink="https://github.com/ridhampansuriya2000/BVM-Management"
              demoLink="https://bvm-management.vercel.app/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superreach}
              isBlog={false}
              title="Super Reach"
              description="SuperReach is a responsive website project that aims to provide a user-friendly and visually appealing experience across various devices and screen sizes. This project is designed to be accessible from desktop computers, tablets, and mobile phones."
              ghLink="https://github.com/yagnikdevani00/superreach"
              demoLink="https://super-reach.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
