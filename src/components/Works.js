import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, CardDeck } from 'reactstrap';
import covid from  "../images/covid_web.PNG";
import port from  "../images/portfolio.PNG"
import race from  "../images/racing.PNG"

import work from "../data/Work.json"

const Works=()=> {
		return (
			<div id='works'>
				<Container>
					<Row>
						<Col>
							<h1>
								My Recent Projects and Blogs
						</h1>
							<p className='works-description'>
								These are all self-directed projects. You can find more work on my <a href="https://github.com/Tejaswi2737" target='__blank'>Github</a>.
							 Below are just some of my most recent works. <a href="https://www.linkedin.com/in/tejaswi-kota-06926957/" target="_blank">Let me know if you have any questions!</a>
							</p>
							<CardDeck>
								{work.map(item=>{
									return(
										<Card>
										<div className='card-img-container'>
											<a href={item.Demo} target="_blank" rel="noopener noreferrer">
												<CardImg top width="100%" 
												src={item.img?item.img:item.Title==="COVID-19 Daily Statistics"?covid:item.Title==="Totalizer Betting"?race:port} alt="Card image cap" /></a>
										</div>
										<CardBody>
											<CardTitle className='card-app-name'>{item.Title}</CardTitle>
											<CardText className='card-tech'>{item.Tools}</CardText>
											<p className="summary">Summary</p>
											<CardText className='card-summary'>{item.Summary}</CardText>
											<a href={item.Demo} target="_blank" rel="noopener noreferrer">
												<Button outline color="primary">{item.Category==="Blog"?"View Blog":"View Demo"}</Button>
											</a>
											<a href={item.Code} target="_blank" rel="noopener noreferrer">
												<Button outline color="secondary">View code</Button>
											</a>
										</CardBody>
									</Card>	
									)
								})}
							</CardDeck>
						</Col>
					</Row>
				</Container>
			</div>
		);
}
export default Works
