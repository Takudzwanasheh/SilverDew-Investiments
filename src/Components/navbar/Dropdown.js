import React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuButton from "@mui/joy/MenuButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuItem from "@mui/joy/MenuItem";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./menu.scss";

export default function Drop() {
	return (
		<div className='Dropdown'>
			<Dropdown className='dropdown'>
				<MenuButton className='MenuButton'>
					<MenuIcon />
				</MenuButton>
				<Menu className='Menu'>
					<MenuItem className='MenuItem'>
						<NavLink className='menu-link' to={"/road-construction.zw"}>
							ROAD CONSTRUCTION
							<ArrowRightIcon />
						</NavLink>
					</MenuItem>
					<MenuItem className='MenuItem'>
						<NavLink className='menu-link' to={"/building-construction"}>
							BUILDING CONSTRUCTION <ArrowRightIcon />
						</NavLink>
					</MenuItem>
					<MenuItem className='MenuItem'>
						<NavLink className='menu-link' to={"/plumbing-zw"}>
							PLUMBING <ArrowRightIcon />
						</NavLink>
					</MenuItem>
					<MenuItem className='MenuItem'>
						<NavLink className='menu-link' to={"/dam"}>
							DAM CONSTRUCTION <ArrowRightIcon />
						</NavLink>
					</MenuItem>
					<MenuItem className='MenuItem'>
						<NavLink className='menu-link' to={"/warehouses"}>
							WAREHOUSES <ArrowRightIcon />
						</NavLink>
					</MenuItem>
					<MenuItem className='MenuItem'>
						<NavLink
							className='menu-link'
							to='https://www.soncocrowdcontrol.com/blog/road-construction-site?srsltid=AfmBOorhB7ryH_2ES4zIY-1JgMZR7MjU0hGmlt2bp4C8EiMU3ZMEhqXH'
						>
							TIPS <ArrowRightIcon />
						</NavLink>
					</MenuItem>
				</Menu>
			</Dropdown>
		</div>
	);
}
