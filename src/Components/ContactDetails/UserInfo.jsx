import React from "react";
import "./contact.scss";
import Top from "../../Components/home-compnents/topNavigation/Top";

export default function UpladProjects() {
	return (
		<form className='Userinfo'>
			<div>
				<Top />
			</div>
			<div>
				<div className='Details'>
					<div className='User'>
						<span>Project Name</span>
						<input placeholder='Enter Project Name' name='Phone' type='tel' />
					</div>
					<div className='User'>
						<span>First Image</span>
						<input
							placeholder='Enter Before Picture'
							type='text'
							name='Username'
							required
						/>
					</div>
					<div className='User'>
						<span>Second Image</span>
						<input
							placeholder='Enter After Picture'
							type='email'
							name='Email'
							required
						/>
					</div>
				</div>
				<div className='button'>
					<button type='submit'> Upload</button>
					<span style={{ fontSize: "13px" }}></span>
				</div>
			</div>
		</form>
	);
}
