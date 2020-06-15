import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export class Testimonials extends Component {
	render() {
		return (
			<div id='testimonials'>
				<Container>
					<Row>
						<Col className='testimonials-container'>
							<h1 className='testimonials-header'>
								Testimonials
						</h1>
							<p className='description'>
								I've lived in Texas, Colorado, Las Vegas, China, California, and Chicago. Here are some nice things people from all over have said about me:
						</p>
							<p className="quote">
								"He loved this job and was very patient and enthusiastic. He treated each task with strong enthusiasm and great effort."
						</p>
							<h2 className="quote-source">
								Jasmine Zhang
						</h2>
							<h3 className="quote-title">
								Operation Exectuive of Innovation Education, Shenzhen Seaskyland Technology
						</h3>
							<p className="quote">
								"I found him to be consistenty responsible and honest, working with dedication as a teacher. He had a wonderful rapport with both colleagues and students."
						</p>
							<h2 className="quote-source">
								Christina Zhang
						</h2>
							<h3 className="quote-title">
								English Department Head, Xili Primary School
						</h3>
							<p className="quote">
								"Ethan is one of the most driven and dedicated individuals I have ever met. He gives 100% to everything he takes on. As a student he achieved multiple degrees and is fluent in two additional languages to English. Ethan takes on new challenges with a positive attitude and always goes above and beyond."
						</p>
							<h2 className="quote-source">
								Sonja Beauchamp
						</h2>
							<h3 className="quote-title">
								Regional Sales Executive, Versant Health
						</h3>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
