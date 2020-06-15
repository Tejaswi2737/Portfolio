import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavHeader } from './components/NavHeader';
import  Title  from './components/Title';
import { Profile } from './components/Profile';
import  Skills  from './components/Skills';
import  Works  from './components/Works';
import { Bottom } from './components/Bottom';
import { CallToAction } from './components/CallToAction';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			githubColor: false,
			linkedinColor: false,
			codepenColor: false,
			mailColor: false
		};
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(name) {
		let change;

		switch (name) {
			case 'github':
				change = !this.state.githubColor;
				console.log('githubColor changed to ' + change);
				this.setState({ githubColor: change })
				break;
			case 'linkedin':
				change = !this.state.linkedinColor;
				console.log('linkedinColor changed to ' + change);
				this.setState({ linkedinColor: change })
				break;
			case 'codepen':
				change = !this.state.codepenColor;
				console.log('codepenColor changed to ' + change);
				this.setState({ codepenColor: change })
				break;
			case 'mail':
				change = !this.state.mailColor;
				console.log('mailColor changed to ' + change);
				this.setState({ mailColor: change })
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div>
				<NavHeader />
				<Title />
				<Profile />
				<Skills />
				<Works />
				<CallToAction />
				<Bottom
					githubHover={this.state.githubColor}
					linkedinHover={this.state.linkedinColor}
					codepenHover={this.state.codepenColor}
					mailHover={this.state.mailColor}
					handleToggle={this.handleToggle} />
			</div>
		);
	}
}
