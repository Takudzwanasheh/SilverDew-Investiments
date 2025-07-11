import React from "react";
import "./last.scss";
import { NavLink } from "react-router-dom";
export default function LastSection() {
	return (
		<div className='last-container'>
			<div className='class'>
				<h1>Let’s talk about your next project.</h1>
				<NavLink to={"/contact-us"}>
					<button>CONTACT US </button>
				</NavLink>
			</div>
		</div>
	);
}
