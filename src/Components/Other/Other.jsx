import React from "react";
import "./Other.css";

//Components;
import Card from "./Card/Card";
import data from "./Data.js";

export default function Other() {
	return (
		<div>
			<div className='other__head'>
				<p>Other Projects.</p>
				<small>View Archive</small>
			</div>
			<div className='other__data'>
				{data?.map((item, index) => {
					return (
						<>
							<Card item={item} key={item.id} id={item.id} />
						</>
					);
				})}
			</div>
		</div>
	);
}
