import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abuthahir pk </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> I’m a graduate in MCA from Marian college Kuttikkanam autonomous, Idukki, Kerala. I am certified in RHCSA AND Microsoft AZ 104. I have experience as AWS cloud engineer. I have hands on experience in monitoring, maintaining and troubleshooting infrastructure on the AWS cloud platforms. I also have some experience in devOps tools such as terraform, docker, Jenkins and kubernetes and monitoring tool site 24*7, etc. I am a quick learner who is always looking to expand my knowledge and skills in the cloud and devOps while showcasing my best efforts.
            <br />
            <br>
            </br>
            <br>
            </br>
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Internet Surffing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">AK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
