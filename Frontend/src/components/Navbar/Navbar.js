import React, { useState, useEffect } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

export default function Navbar() {
	const [showNav, setShowNav] = useState(false)

	useEffect(() => {
		if (showNav === true) {
			//handleShowNav()
		}
	}, [showNav])

	return (
			<Nav>
				{showNav && (
					<span onClick={() => {setShowNav(true)}} >
						<Bars />
					</span>
				)}
				
			<NavMenu>
			<NavLink to='/home' activeStyle>
				Home
			</NavLink>
			<NavLink to='/calendar' activeStyle>
				Calendar
			</NavLink>
			<NavLink to='/profiles' activeStyle>
				Profiles
			</NavLink>
			{/* Second Nav */}
			{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
			</NavMenu>
			<NavBtn>
				<NavBtnLink to='/signout'>Sign Out</NavBtnLink>
			</NavBtn>
		</Nav>
	);
};