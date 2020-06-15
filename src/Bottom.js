import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
// import logoInvert from './logo-invert.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


export class Bottom extends Component {
	constructor(props) {
		super(props);
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover(icon) {
		console.log(icon+" hovered");
		this.props.handleToggle(icon);
	}

  	render() {

  		let githubCircleColor;
  		let githubIconColor;
  		let linkedinCircleColor;
  		let linkedinIconColor;
  		let codepenCircleColor;
  		let codepenIconColor;
  		let mailCircleColor;
  		let mailIconColor;

  		if (this.props.githubHover) {
  			githubCircleColor = 'icon-circles-dark';
  			githubIconColor = 'icon-inners-white';
  		} else {
  			githubCircleColor= 'icon-circles-white';
  			githubIconColor = 'icon-inners-dark';
  		}

  		if (this.props.linkedinHover) {
  			linkedinCircleColor = 'icon-circles-dark';
  			linkedinIconColor = 'icon-inners-white';
  		} else {
  			linkedinCircleColor= 'icon-circles-white';
  			linkedinIconColor = 'icon-inners-dark';
  		}

  		if (this.props.codepenHover) {
  			codepenCircleColor = 'icon-circles-dark';
  			codepenIconColor = 'icon-inners-white';
  		} else {
  			codepenCircleColor= 'icon-circles-white';
  			codepenIconColor = 'icon-inners-dark';
  		}

  		if (this.props.mailHover) {
  			mailCircleColor = 'icon-circles-dark';
  			mailIconColor = 'icon-inners-white';
  		} else {
  			mailCircleColor= 'icon-circles-white';
  			mailIconColor = 'icon-inners-dark';
  		}



    return (
    	<div id='bottom'>
    		<Container><Row><Col>

				{/* <img className='my-logo' src={logoInvert}/> */}

				<div className='my-links'>
					
					

					<span className="fa-layers fa-fw">
						<a href="https://github.com/Tejaswi2737" target="_blank" rel="noopener noreferrer" onMouseEnter={() => this.toggleHover('github')} onMouseLeave={() => this.toggleHover('github')}>
						<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-7' className={githubCircleColor}/>
						<FontAwesomeIcon icon={ faGithub } size='1x' transform="grow-10" className={githubIconColor}/>
						</a>
					</span>
				
				
					<span className="fa-layers fa-fw">
						<a href="https://www.linkedin.com/in/tejaswi-kota-06926957/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => this.toggleHover('linkedin')} onMouseLeave={() => this.toggleHover('linkedin')}>
						<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-7 ' className={linkedinCircleColor}/>
						<FontAwesomeIcon icon={ faLinkedinIn } size='1x' transform="grow-10 right-2" className={linkedinIconColor}/>
						</a>
					</span>
				
				
					<span className="fa-layers fa-fw">
					<a href="https://medium.com/@teja37.kota" target="_blank" rel="noopener noreferrer" onMouseEnter={() => this.toggleHover('codepen')} onMouseLeave={() => this.toggleHover('codepen')}>
						<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-7' className={codepenCircleColor}/>
						<FontAwesomeIcon icon={ faMedium } size='1x' transform="grow-10" className={codepenIconColor}/>
					</a></span>
				
				
					<span className="fa-layers fa-fw">
					<a href="mailto:teja37.kota@gmail.com" target="_blank" rel="noopener noreferrer" onMouseEnter={() => this.toggleHover('mail')} onMouseLeave={() => this.toggleHover('mail')}>
						<FontAwesomeIcon icon={faCircle} size='2x' transform='grow-7' className={mailCircleColor}/>
						<FontAwesomeIcon icon={ faEnvelope } size='1x' transform="grow-10" className={mailIconColor}/>
					</a></span>
					
				</div>

				<p id='copyright'>
					&#169; Tejaswi kota
				</p>

			</Col></Row></Container>

    	</div>
    );
  }
}
