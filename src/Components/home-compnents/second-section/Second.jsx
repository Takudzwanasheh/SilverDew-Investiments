import React from "react";
import dam from "../../../Asserts/Dam construction.png";
import paving from "../../../Asserts/dreveway.png";
import road from "../../../Asserts/Road.png";
import dams from "../../../Asserts/dams.png";
import plumbing from "../../../Asserts/plumbing.png";
import { NavLink } from "react-router-dom";
import "./second.scss";

export default function Second() {
	return (
		<div className='second-container'>
			<div className='top'>
				<div className='left'>
					<h1>
						Welcome To <br /> Silver Dew Investments Pvt Ltd
					</h1>
				</div>
				<div className='right'>
					<p>
						Our mission is to provide superior specialty contracting services by
						creating mutually rewarding relationships in a safe, inspiring and
						open environment. Our vertically integrated construction structure
						gives you the best results in the least amount of time possible
					</p>
				</div>
			</div>

			<div className='bottom'>
				<div className='left'>
					<h1>Discover What We offer</h1>
					<div className='divider' />
					<span>We provide all kind of construction services.</span>
					<p>
						Ours is a whole-life approach, we put together a team of experts to
						cover all aspects of your project, right from recognising your
						vision through delivering an excellent project
					</p>
					<NavLink to={"/building-construction"}>
						<button>SEE ALL SERVICES</button>
					</NavLink>
				</div>
				<div className='right-container'>
					<div className='right'>
						<div className='services'>
							<img alt='Dam construction' src={dam} />
						</div>
						<div className='services'>
							<img alt='Drive way paving' src={paving} />
						</div>
						<div className='services'>
							<img alt='Road construction' src={road} />
						</div>
						<div className='services'>
							<img alt='Dam' src={dams} />
						</div>
						<div className='services'>
							<img alt='Best Plumbing' src={plumbing} />
						</div>
						<div className='services'>
							<img alt='Dam' src={dam} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
