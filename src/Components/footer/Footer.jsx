import React from "react";
import logo from "../../Asserts/sliverDew.png";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";
import {
	Facebook,
	Instagram,
	YouTube,
	X,
	LocationOn,
	WhatsApp,
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
					<span>silverdewinvestments@gmail.com</span>
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
					<NavLink to={"/plumbing-zw"}>
						<p>Plumbing </p>
					</NavLink>
					<NavLink to={"/road-construction.zw"}>
						<p>Road construction </p>
					</NavLink>
					<NavLink to={"/building-construction"}>
						<p>Building </p>
					</NavLink>
				</div>
				<div className='last'>
					<span>Our Addresses</span>
					<div className='items'>
						<LocationOn />
						<p>
							No. 14947 Tynwald South
							<br /> Harare, Zimbabwe
						</p>
					</div>
					<div className='items'>
						<CallIcon />
						<p>
							Cell: 0772 839 241 <br />
						</p>
					</div>
					<div className='items'>
						<WhatsApp />
						<p>
							0719 639 241 <br /> 0772 625 855
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
