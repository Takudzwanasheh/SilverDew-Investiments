import React from "react";
import { Mail, Search, KeyboardArrowDown } from "@mui/icons-material";
import silverdale from "../../../Asserts/sliverDew.png";

import "./first.scss";
import { NavLink } from "react-router-dom";
import Second from "../second-section/Second";
import DropdownMenu from "../../navbar/menu";

export default function FirstSection() {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const services = [
		"https://trdsf.com/cdn/shop/articles/plumbing-installation_888118fc-19ce-4d07-a45e-0255c37436ca.png?v=1711564675",
		"https://media.istockphoto.com/id/2197665899/photo/plumber-fixing-a-water-leak-in-a-sink-drain-siphon.jpg?s=612x612&w=0&k=20&c=9vF0TuP0R5k3MXjlWje_8ZYkAUL4YuI3N6DL9XJVDug=",
		"https://www.fluidconstructions.com/wp-content/uploads/2023/08/FC_BANNER_Road-Construction-Process-and-Phases.jpg",
		"https://cisp.cachefly.net/assets/articles/images/resized/0000967526_resized_csirroads10211022.jpg",
		"https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/low-cost-home-construction-techniques/_jcr_content/root/container/container_1646056284/teaser_copy_86651871.coreimg.jpeg/1711525970470/house-budget-1.jpeg",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNE_RSl1EDIiG1IxoOeSb_0i1SPvXajQ-Qw&s",
	];

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
		}, 7000); // Change image every 3 seconds
		return () => clearInterval(interval);
	}, [services.length]);

	return (
		<div className='container'>
			<div className='first-section'>
				<div className='AboutCompany'>
					<img src={silverdale} alt='Company Logo' />
					<div>
						<h1>SILVER DEW INVESTMENTS</h1>
						<span>(PRIVATE) LIMITED</span>
					</div>
				</div>

				<div className='ContactDetails'>
					<div className='top'>
						<div>
							<Mail className='icon' />
							<span>takudzwanashe@gmail.com</span>
						</div>
						<p>+263 781044370</p>
						<p> Safety First Everyday</p>
					</div>
					<div className='bottom'>
						<NavLink to='/'>Home</NavLink>
						<DropdownMenu className='button' />
						<NavLink to='/about-us'>About</NavLink>
						<NavLink to='/contact-us'>Contact Us</NavLink>
					</div>
				</div>
			</div>

			<div className='text'>
				<div className='top'>
					<h1>
						Partner With <br /> A Great Construction <br /> Company
					</h1>
					<span>
						Our vision is to be the highest value provider of general
						construction services.
					</span>
				</div>
				<div className='bottom'>
					<img
						src={services[currentIndex]}
						alt={`Service ${currentIndex + 1}`}
						style={{
							width: "100%",
							maxWidth: "400px",
							height: "auto",
							transition: "all 0.5s",
						}}
					/>
				</div>
			</div>

			<div className='buttons'>
				<button>LEARN MORE</button>
			</div>
		</div>
	);
}
