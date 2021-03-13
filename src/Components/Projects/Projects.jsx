import React from "react";
import "./Projects.css";

//Components;
import Data from "./Data";
import Title from "../../Partials/Title/Title";
import Card from "../../Partials/Card/Card";
import useWindowDimensions from "../../Hooks/UseDimensions/UseDimensions";
import Tile from "../../Partials/Tile/Tile";

export default function Projects() {
	const { height, width } = useWindowDimensions();
	
	return (
		<div className='pr-wrapper'>
			<Title number='3' title='Projects' />
			<div className='card-wrapper'>
				{width > 870
					? Data?.map((item, index) => (
							<Card item={item} index={index} key={item._id} />
					  ))
					: Data?.map((item, index) => (
							<Tile item={item} index={index} key={item._id} />
					  ))}
			</div>
		</div>
	);
}
