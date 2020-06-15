import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button
} from 'reactstrap';

export class NavHeader extends Component {
	render() {
		return (
			<div className='nav-bar-pref'>
				<Navbar color="white" light expand="md">
					{/* <NavbarBrand href="/">
						<img className='my-logo' src={logo} />
					</NavbarBrand> */}
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink target="_blank" 
							href='mailto:teja37.kota@gmail.com'>
								<Button outline color="primary">
									Contact Me
							</Button>
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
