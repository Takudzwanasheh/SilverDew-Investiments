import React from "react";
import logo from "../../Asserts/sliverDew.png";
import { NavLink } from "react-router-dom";
import {
	Facebook,
	Instagram,
	YouTube,
	X,
	LocationOn,
} from "@mui/icons-material";

import "./footer.scss";

export default function Footer() {
	return (
		<div className='footer-container'>
			<div className='fisrt'>
				<div className='details'>
					<div className='top'>
						<img src={logo} alt='' />

						<span>Silver Dew Investments Pvt Ltd</span>
					</div>
					<p>
						Our mission is to provide superior construction services <br /> to
						our trusted partners in a safe environment for our <br /> supporting
						staff
					</p>
					<div className='links'>
						<NavLink>
							<Facebook />
						</NavLink>
						<NavLink>
							<X />
						</NavLink>
						<NavLink>
							<Instagram />
						</NavLink>
						<NavLink>
							<YouTube />
						</NavLink>
					</div>
				</div>
				<div className='second'>
					<span>Quick Links</span>
					<p>Dam construction </p>
					<p>Road construction </p>
					<p>Building </p>
					<p>Warehouses </p>
				</div>
				<div className='last'>
					<span>Our Addresses</span>
					<div className='items'>
						<LocationOn />
						<p>
							6556-170 Street Westlea <br /> Industry Area, Harare, Zimbabwe
						</p>
					</div>
					<div className='items'>
						<LocationOn />
						<p>
							6556-170 Street Westlea <br /> Industry Area, Harare, Zimbabwe
						</p>
					</div>
					<div className='items'>
						<LocationOn />
						<p>
							6556-170 Street Westlea <br /> Industry Area, Harare, Zimbabwe
						</p>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<span>
					Copyright 2025 Silver Dew Investments Pvt Ltd. All Right Reserved
				</span>
			</div>
		</div>
	);
}
