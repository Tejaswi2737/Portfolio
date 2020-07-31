import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import resume from './Resume.pdf';

export class Profile extends Component {
	render() {
		return (
			<div id='profile'>
				<Container>
					<h1>
						Hello, I'm Tejaswi,
					</h1>
					<p>
						I am a Structural Engineer by profession and coder by passion. <br></br>
						My long time love for coding drove me to learn web development and data analytics... <br></br>
						Currently, I'm looking for job opportunities 
						as <strong>Web-Developer</strong>/ 
						<strong>Data Analyst</strong> in <strong>Newcastle, Australia,</strong>
						<br></br>
				Take a look at my <a href="#skills">skills</a>
			</p>
					<a href={resume} target='_blank'>
						<Button outline color="primary">
							Print Resume
				</Button>
					</a>
				</Container>
			</div>
		);
	}
}
