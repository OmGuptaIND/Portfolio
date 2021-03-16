import React from "react";
import "./Other.css";

//Components;
import Card from "./Card/Card";
import data from "./Data.js";
import { useHistory } from "react-router";

export default function Other() {
	let history = useHistory();
	return (
		<div>
			<div className='other__head'>
				<p>Other Projects.</p>
				<small onClick={() => history.push("/archive")}>View Archive</small>
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
