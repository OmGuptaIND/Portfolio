import React from "react";
import Image from "../../images/pic.PNG";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export default function Card({ item, index }) {
	return (
		<div className='pr' id={index % 2 === 0 && "pr-left"}>
			<img src={Image} alt='err' />

			<div className='pr-data'>
				<div className='pr-title' id={index % 2 === 0 && "pr-title-left"}>
					{item.featured && <p>Featured Project</p>}
					<p>{item.title}</p>
				</div>
				<div className='pr-desc' id={index % 2 === 0 && "pr-desc-left"}>
					<p>{item.desc}</p>
				</div>
				<div className='pr-tags' id={index % 2 === 0 && "pr-tags-left"}>
					{item.tech?.map((tag, index) => (
						<span key={index}>{tag}</span>
					))}
				</div>
				<div className='pr-links' id={index % 2 === 0 && "pr-links-left"}>
					<span>
						<GitHubIcon />
					</span>
					<span>
						<OpenInNewIcon />
					</span>
				</div>
			</div>
		</div>
	);
}
