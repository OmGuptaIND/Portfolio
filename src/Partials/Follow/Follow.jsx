import React from "react";
import "./Follow.css";

//Components;
import { ExternalLink } from "react-external-link";
import {Data} from "./Data";

export default function Follow() {
	const Styles = {
		link: {
			color: "inherit",
		},
	};
	return (
		<div className='follow'>
			<div className='social'>
				{Data?.map((item) => (
					<p key = {item._id} >
						<ExternalLink style={Styles.link} href={item.link}>
							{item.img}
						</ExternalLink>
					</p>
				))}
			</div>
			<div className='social_margin'></div>
		</div>
	);
}
