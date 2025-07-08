import React from "react";
import Silverdew from "../../../Asserts/sliverDew.png";
import "./about.scss";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuButton from "@mui/joy/MenuButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuItem from "@mui/joy/MenuItem";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../../../Components/navbar/menu";
import Top from "../../Services/building-construction/Top";
import LastSection from "../../../Components/home-compnents/last-section/LastSection";
export default function About() {
	return (
		<div>
			<Top />
			<div className='about-container'>
				<div className='about-header'>
					<img src={Silverdew} alt='Vennis Logo' />
				</div>
				<div className='about-content'>
					<p>
						&ldquo;The greater the loyalty of a group toward the group, the
						greater is the motivation among the members to achieve the goals of
						the group, and the greater the probability that the group will
						achieve its goals.&rdquo; - Rensis Likert
					</p>
					<p>
						Our employees are key to the successes we have enjoyed in the past
						30 years of existence. We take precedence in affording our employees
						with favourable working conditions and we reward them competitively,
						thereby ensuring that we gain and develop a competitive advantage.
						We believe strongly in self-development and invest a great deal
						towards this cause.
					</p>
				</div>
			</div>
			<div style={{ padding: "2rem" }} className='projects'>
				<div className='Dropdown'>
					<Dropdown className='dropdown'>
						<MenuButton className='MenuButton'>
							PAST PROJECT UNDERTAKEN
							<KeyboardArrowDownIcon />
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
			</div>
			<LastSection />
		</div>
	);
}
