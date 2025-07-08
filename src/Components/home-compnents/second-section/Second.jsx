import React from "react";
import dam from "../../../Asserts/Dam construction.png";
import paving from "../../../Asserts/dreveway.png";
import road from "../../../Asserts/Road.png";
import dams from "../../../Asserts/dams.png";
import plumbing from "../../../Asserts/plumbing.png";
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
					<button>SEE ALL SERVICES</button>
				</div>
				<div className='right-container'>
					<div className='right'>
						<div className='services'>
							<img src={dam} />
						</div>
						<div className='services'>
							<img src={paving} />{" "}
						</div>
						<div className='services'>
							<img src={road} />{" "}
						</div>
						<div className='services'>
							<img src={dams} />{" "}
						</div>
						<div className='services'>
							<img src={plumbing} />{" "}
						</div>
						<div className='services'>
							<img src={dam} />{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
