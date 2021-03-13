import React from "react";
import "./About.css";

//Components;
import Title from "../../Partials/Title/Title";
import Image from "../../images/pic.jpeg";

export default function About() {
	return (
		<div className='about-wrapper'>
			<Title number='1' title='About' />
			<div className='about'>
				<div className='about__info'>
					<p>
						Hello! I'm Om Gupta, a college student Studying ME from
						LNMIIT-Jaipur
					</p>
					<p>
						I create things that live and work on machines, avid newsreader,
						.Love to make Websites, Bots, Apps, and everything in between.
					</p>
					<p>
						From the beginnig my interest has always been in computers started
						my HTML code when I was 13 learning python and then js after that
						start React and fell in love with creating websites and bring my
						creativity to the world.
					</p>
					<p>
						Currently I am open for any jobs or internship, I love to contribute
						and help in creation for some great organisations.
					</p>
				</div>
				<div className='about__pic'>
					<img className='pic' src={Image} alt='err' />{" "}
					<div className='margin'></div>{" "}
				</div>
			</div>
		</div>
	);
}
