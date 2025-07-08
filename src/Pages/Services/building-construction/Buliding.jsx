import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import silverdale from "../../../Asserts/sliverDew.png";
import construct from "../../../Asserts/construction.png";
import { Search } from "@mui/icons-material";
import "./building.scss";
import { NavLink } from "react-router-dom";
import LastSection from "../../../Components/home-compnents/last-section/LastSection";
import Projects from "./Projects";
import DropdownMenu from "../../../Components/navbar/menu";
import Top from "./Top";

export default function Building() {
	return (
		<div style={{ background: "grey" }} className='house-container'>
			<Top />

			<div className='bottom'>
				<div>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink className='button'>
						<DropdownMenu />
					</NavLink>
					<NavLink to='/contact-us'>Contact Us</NavLink>
				</div>
			</div>
			<div className='roadconstructios'>
				<div className='left'>
					<h1>
						Building <br /> Construction
					</h1>
				</div>
				<div className='right'>
					<img src={construct} alt='Road constructio' />

					<div>
						<h1>SILVER DEW </h1>
						<span>CONSTRUCTIONS</span>
					</div>
				</div>
			</div>
			<div className='details-container'>
				<div className='road-repair'>
					<div>
						<h1>Bricklaying, Brickwork & Blockwork</h1>
						<p>
							We pride ourselves on our exceptionally high standard of work and
							aim to deliver projects on time and at competitive prices.
						</p>
						<p>
							We are a bricklaying, brickwork and blockwork contractor,
							specialising in new builds, extensions, renovations, conservatory
							bases and more.
						</p>
					</div>
					<div>
						<h1>Construction Services</h1>
						<ul>
							<li>Bricklayer Contractor</li>
							<li>Brickwork Contractor</li>
							<li>Heritage Brickwork</li>
							<li>Specialist Pointing</li>
							<li>Blockwork</li>
						</ul>
					</div>
				</div>

				<Projects />
			</div>
			<LastSection />
		</div>
	);
}
