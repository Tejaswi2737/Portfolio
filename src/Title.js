import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myAvatar from './avatar.jpg';

export class Title extends Component {
	render() {
		return (
			<div id='title'>
				<div className='title-container'>
					<h1 className="display-5">Front-End Web Developer</h1>
					<p className="lead">I'm a self-taught Front-End Web Developer.</p>
					<img className='avatar' src={myAvatar} />
				</div>
			</div>
		);
	}
}
