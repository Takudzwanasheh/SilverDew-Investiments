import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import silverdale from "../../Asserts/sliverDew.png";
import DropdownMenu from "./menu";
import Drop from "./Dropdown";

export default function Navbar() {
	const [showMenu, setShowMenu] = React.useState(false);

	const navRef = React.useRef(null);

	return (
		<div className='navigationbar' ref={navRef}>
			<div className='CompanyLogos'>
				<img src={silverdale} alt='Silver Dew Investments' />
				<div>
					<h1>SILVER DEW INVESTMENTS</h1>
					<p>(P R I V A T E) L I M I T E D</p>
				</div>
				<div className='hamburger' onClick={() => setShowMenu(!showMenu)}>
					<Drop />
				</div>
			</div>
			<div className='hideMenu'>
				<NavLink to='/' className='nav-link'>
					<p>HOME</p>
				</NavLink>

				<DropdownMenu className='dropdown' />

				<NavLink to='/about-us' className=' nav-link'>
					<p>ABOUT US</p>
				</NavLink>
				<NavLink to='/contact-us' className='nav-link'>
					<p>CONTACT US</p>
				</NavLink>
			</div>
		</div>
	);
}
