import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import silverdale from "../../../Asserts/sliverDew.png";
import "./building.scss";

export default function Top() {
	return (
		<div className='house-container'>
			<div style={{ gap: "1rem" }} className='top'>
				<div className='contact-info'>
					<MailIcon />
					<span>info@kardiaholdings.co.zw</span>
				</div>
				<p>+263.774.831.073</p>
				<div className='safety-message'>
					<div className='divider' />
					<span>Safety First Everyday</span>
				</div>
			</div>
			<div className='AboutCompany'>
				<img src={silverdale} alt='Company Logo' />
				<div>
					<h1>SILVER DEW INVESTMENTS</h1>
					<span>(PRIVATE) LIMITED</span>
				</div>
			</div>
		</div>
	);
}
