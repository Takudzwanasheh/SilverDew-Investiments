import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import silverdale from "../../../Asserts/sliverDew.png";
import construct from "../../../Asserts/roadwork.png";
import "./road.scss";
import { NavLink } from "react-router-dom";
import Detail from "./Detail";
import DropdownMenu from "../../../Components/navbar/menu";
import Top from "../building-construction/Top";

export default function Road() {
	return (
		<div className='container'>
			<Top />
			<div className='bottom'>
				<nav>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink className='button'>
						<DropdownMenu />
					</NavLink>
					<NavLink to='/contact-us'>Contact Us</NavLink>
				</nav>
			</div>

			<div className='road-construction'>
				<div className='left'>
					<h1>
						Road <br /> Construction
					</h1>
				</div>
				<div className='right'>
					<img src={construct} alt='Road construction' />
					<div>
						<h1>SILVER DEW</h1>
						<span>CONSTRUCTIONS</span>
					</div>
				</div>
			</div>
			<Detail />
		</div>
	);
}
