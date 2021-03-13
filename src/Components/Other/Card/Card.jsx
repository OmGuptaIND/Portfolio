import React from "react";
import "./Card.css";

//Components;
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

export default function Card({ item }) {
	return (
		<div className='card'>
			<div className='card__top'>
				<div className='card__file'>
					<span>
						<FolderOpenIcon className='file__icon' fontSize='large' />
					</span>
				</div>
				<div className='card__links'>
					<span>
						<GitHubIcon />
					</span>
					<span>
						<OpenInNewIcon />
					</span>
				</div>
			</div>

			<div className='card__middle'>
				<div className='card__title'>
					<p>{item.title}</p>
				</div>
				<div className='card__desc'>
					<p>{item.desc}</p>
				</div>
			</div>

			<div className='card__bottom'>
				<div className='card__tech'>
					{item.tech?.map((tech, index) => {
						return (
							<>
								<span key={index} id={index}>
									{tech}
								</span>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
