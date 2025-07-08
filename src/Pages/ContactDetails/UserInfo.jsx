import React, { useRef } from "react";
import "./contact.scss";

export default function UserInfo() {
	const formRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	};

	const [loading, setLoading] = React.useState(false);

	const [disableButton, setDisableButton] = React.useState(false);

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
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Email</span>
					<input
						placeholder='Enter Email'
						type='email'
						name='Email'
						required
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Phone</span>
					<input
						placeholder='Phone (optional)'
						name='Phone'
						type='tel'
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Message</span>
					<textarea
						placeholder='Message'
						name='Message'
						required
						disabled={loading}
					/>
				</div>
				<div className='User'>
					<span>Attach File</span>
					<input
						placeholder='Message'
						type='file'
						accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
						name='file'
						required
						disabled={loading}
					/>
				</div>
			</div>
			<div className='button'>
				<button type='submit' disabled={loading || disableButton}>
					{loading ? "Sending..." : "Send"}
				</button>
				<span style={{ fontSize: "13px" }}>
					we promise to contact you as soon as possible
				</span>
			</div>
		</form>
	);
}
