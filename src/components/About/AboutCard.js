import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DevBaoo </span>
            from <span className="purple"> Ho Chi Minh, VietNam.</span>
            <br />
            I am student at FPT University, I’m currently working on 🌐Web
            Development
            <br />
            I’m currently learning Angular and C#
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it!"{" "}
          </p>
          <footer className="blockquote-footer">DevBaoo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
