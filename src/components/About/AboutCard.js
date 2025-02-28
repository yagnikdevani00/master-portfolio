import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Yagnik Devani</span> from
            <span className="purple"> Gujarat, India</span>.
            <br />
            <br />
            I am an experienced <strong>MERN Stack Developer</strong> with over 2 years of expertise in building scalable web applications, APIs, and full-stack solutions.
            <br />
            Currently, I am working as a Full Stack Developer at
            <span className="purple"> BVM Infotech</span>, specializing in <strong>React, Node.js, Express.js, MongoDB</strong>, and various third-party integrations.
            <br />
            <br />
            Besides coding, I enjoy working on AI-driven automation, optimizing backend performance, and exploring new technologies to enhance user experience.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares."
          </p>
          <footer className="blockquote-footer">Robert C. Martin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
