import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import DropdownMenu from "../../../Components/navbar/menu";

export default function Navtab() {
	return (
		<div className='bottom'>
			<div>
				<NavLink to='/'>Home</NavLink>
				<NavLink className='disapear ' to='/about'>
					About
				</NavLink>
				<DropdownMenu />
				<NavLink className='disapear ' to='/contact-us'>
					Contact Us
				</NavLink>
			</div>
		</div>
	);
}
