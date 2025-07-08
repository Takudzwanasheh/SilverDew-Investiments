import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import silverdale from "../../../Asserts/sliverDew.png";
import construct from "../../../Asserts/construction.png";
import plumb from "../../../Asserts/plumber.png";
import { Search } from "@mui/icons-material";
import "./plumbing.scss";
import { NavLink } from "react-router-dom";
import LastSection from "../../../Components/home-compnents/last-section/LastSection";
import DropdownMenu from "../../../Components/navbar/menu";
import Top from "../building-construction/Top";

export default function Plumbing() {
	return (
		<div style={{ background: "grey" }} className='plumb-container'>
			<div className='top'>
				<Top />
			</div>

			<div className='bottom'>
				<div>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<DropdownMenu />
					<NavLink to='/contact-us'>Contact Us</NavLink>
				</div>
				<Search className='icon' />
			</div>
			<div className='roadconstructios'>
				<div className='left'>
					<h1>Plumbing Installation</h1>
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
				<div className='image-container'>
					<h1>Let us fix it for you</h1>
					<img
						src='https://www.drainmenplumbing.com/site/wp-content/uploads/75949260_s.jpg'
						alt='plumbing'
					/>
					<img
						src='https://www.oatey.com/sites/default/files/2022-10/P-Trap_Blog_05.jpg'
						alt='plumbing'
					/>
				</div>
				<div className='road-repair'>
					<h1>Plumbing Supply & Installation</h1>
					<p>
						We use only quality products and take pride in delivering
						exceptional customer service. It is important to us that your
						plumbing installation is done right the first time and that you are
						comfortable having us in your home.
					</p>
					<p>
						Our plumbers provide complete plumbing services for Harare homes. We
						understand emergencies create panic, and with our years of industry
						expertise, we work hard to repair the damage so you can get back to
						your day.
					</p>
					<p>
						We provide a diverse mixture of services including commercial and
						residential plumbing repairs, tenant improvements, new construction
						projects and green solutions. Other services we provide include:
					</p>
					<div>
						<h1>Services we offer:</h1>
						<ul>
							<li> Main line water service repairs</li>
							<li> Cracked and broken pipe repairs</li>
							<li> Toilet repairs and installation</li>
							<li> Water heater installation and service</li>
						</ul>
					</div>
				</div>
				<div className='road-repair'>
					<h1>We Make It Easy For You</h1>
					<p>
						It's as easy as a phone call to schedule an on-site appointment with
						us anywhere in Harare. Our service trucks carry an inventory of
						quality replacement parts which means our licensed plumbing experts
						can fix most problems on the spot.
					</p>
					<p>
						We have extensive experience in servicing homes and multi-unit
						residences as well as commercial buildings and new construction. If
						you need: Sink/Toilet/Bathtub Plumbing Repairs, Water Heater
						replacement, Drain or Sewer Cleaning, Hydro-jetting, Custom Fixture
						installation or a Home Inspection, Power Plumbing can fix it and
						much, much more!
					</p>
					<img
						src='https://t3.ftcdn.net/jpg/12/70/92/36/360_F_1270923609_6EA5OXxqW8LL5ToD5NPJdbnKzT7H4wiy.jpg'
						alt='Best Plumbing'
					/>
				</div>
			</div>
			<LastSection />
		</div>
	);
}
