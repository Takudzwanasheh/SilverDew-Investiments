import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./menu";
import MenuIcon from "@mui/icons-material/Menu";

export default function PositionedMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id='demo-positioned-button'
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<MenuIcon />
			</Button>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<MenuItem onClick={handleClose}>
					<NavLink to='/' className='nav-link'>
						<p>HOME</p>
					</NavLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<DropdownMenu />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<NavLink to='/about-us' className='disapear nav-link'>
						<p>ABOUT US</p>
					</NavLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<NavLink to='/contact-us' className='nav-link'>
						<p>CONTACT US</p>
					</NavLink>
				</MenuItem>
			</Menu>
		</div>
	);
}
