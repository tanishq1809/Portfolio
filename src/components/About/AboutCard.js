import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">TANISHQ SRIVASTAVA </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science from Noida Institute of Engineering and Technology.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">TANISHQ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
