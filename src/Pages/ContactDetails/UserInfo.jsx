import React from "react";
import "./contact.scss";

export default function UserInfo() {
	return (
		<form className='Userinfo'>
			<div className='Details'>
				<div className='User'>
					<span>Username</span>
					<input
						placeholder='Enter Username'
						type='text'
						name='Username'
						required
					/>
				</div>
				<div className='User'>
					<span>Email</span>
					<input placeholder='Enter Email' type='email' name='Email' required />
				</div>
				<div className='User'>
					<span>Phone</span>
					<input placeholder='Phone (optional)' name='Phone' type='tel' />
				</div>
				<div className='User'>
					<span>Message</span>
					<textarea placeholder='Message' name='Message' required />
				</div>
				<div className='User'>
					<span>Attach File</span>
					<input
						placeholder='Message'
						type='file'
						accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
						name='file'
						required
					/>
				</div>
			</div>
			<div className='button'>
				<button type='submit'>Send</button>
				<span style={{ fontSize: "13px" }}>
					we promise to contact you as soon as possible
				</span>
			</div>
		</form>
	);
}
