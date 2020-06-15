import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myAvatar from '../images/avatar.jpg';

const Title=()=> {
		return (
			<div id='title'>
				<a href="/">
					<div className='title-container'>
						<h1 className="display-5">Front-End Web Developer</h1>
						<p className="lead">I'm a self-taught Front-End Web Developer.</p>
						<img className='avatar' src={myAvatar} />
					</div>
				</a>

			</div>
		);
	
}
export default Title
