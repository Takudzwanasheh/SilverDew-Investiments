import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import silverdale from "../../../Asserts/sliverDew.png";
import "./top.scss";

export default function Top() {
	return (
		<div className='top-container'>
			<div style={{ gap: "1rem" }} className='top-div'>
				<div className='contact-info'>
					<MailIcon className='icon' />
					<span>silverdewinvestments@gmail.com</span>
				</div>

				<p>+263 772 839 241</p>
				<p>+263 719 639 241</p>
				<p>+263 772 625 855</p>
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
