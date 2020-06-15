import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import resume from './Resume.pdf';

export class Profile extends Component {
	render() {
		return (
			<div id='profile'>
				<Container><Row><Col>
					<h1>
						Hello, I'm Tejaswi, <a href="https://www.linkedin.com/in/tejaswi-kota-06926957/" target='__blank'>let's talk!</a>
					</h1>
					<p>
						I am a Structural Engineer by profession and coder by passion. <br></br>
						My long time love for coding drove me to learn web development and data analytics... <br></br>
						Then I started this journey and haven't looked back!<br></br>
						Currently I'm looking for job oppurtunities 
						as <strong>Web-Developer</strong>/ 
						<strong>Data Analyst</strong> in <strong>Newcastle, Australia,</strong>
						<br></br>
				Take a look at my <a href="#skills">skills</a>
			</p>
					<a href={resume} target='__blank'>
						<Button outline color="primary">
							Print Resume
				</Button>
					</a>
				</Col></Row></Container>
			</div>
		);
	}
}
