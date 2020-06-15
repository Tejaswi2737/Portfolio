import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

export class CallToAction extends Component {
	render() {
		return (
			<div id='call-to-action'>
				<Container>
					<Row>
						<Col md='4'>
							<h3 className="call-to-action-command">
								Let's talk!
						</h3>
						</Col>
						<Col md='4'>
							<p className='call-to-action-description'>
								I'm always looking for opportunities.
						</p>
						</Col>
						<Col md='4'>
							<a href="mailto:teja37.kota@gmail.com" target="_blank">
								<Button outline color="primary">
									Contact me
						</Button>
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
