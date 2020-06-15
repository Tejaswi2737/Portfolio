import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import codeIcon from "./code-icon.svg";

export class Skills extends Component {
  render() {
    return (
      <>
      <div id="skills">
        <Container>
          <Row>
            <Col>
              <img className="code-icon" src={codeIcon} />
              <h1>Front-End Web Developer</h1>
              <h2>Things I've learned:</h2>
              <p>
                JavaScript, Python, HTML, CSS, React.js, MongoDB,
                 Node.js, SQL, Swagger and more...
              </p>
              <h2>Tools I use:</h2>
              <ul>
                <li>Redux</li>
                <li>React Router</li>
                <li>Hooks</li>
                <li>Axios</li>
                <li>npm</li>
                <li>Git</li>
                <li>Visual Studio Code</li>
                <li>Github</li>
                <li>Bootstrap</li>
                <li>Chrome Developer Tools</li>
                <li>And more...</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
            <div id="skills">
            <Container>
              <Row>
                <Col>
                  <img className="code-icon" src={codeIcon} />
                  <h1>Data Analytics and Machine Learning</h1>
                  <h2>Things I've learned:</h2>
                  <p>
                    Python, Jupyter Notebook, Machine Learning, Regression Analysis, Clustering and more...
                  </p>
                  <h2>Tools I use:</h2>
                  <ul>
                    <li>Jupyter Notebook</li>
                    <li>Python</li>
                    <li>Regression Analysis</li>
                    <li>Clustering</li>
                    <li>Machine Learning</li>
                    <li>Github</li>
                    <li>And more...</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          </>
    );
  }
}
