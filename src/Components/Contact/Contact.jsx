import React from "react";
import "./Contact.css";

export default function Contact() {
	return (
		<div className='contact'>
			<div className='contact__top'>
				<p className='one'>What's Next ?.</p>
				<p className='two'>Contact Me</p>
			</div>
			<div className='contact__middle'>
				<p>
					I am Currently Studying, but I am always ready to get some work and
					meet some great people on the way. So my inbox is always open. For any
					jobs or anything other. I will try to get back to you.
				</p>
			</div>
			<div className='contact__bottom'>
				<button className='btn__contact'>Say Hi</button>
			</div>
		</div>
	);
}
