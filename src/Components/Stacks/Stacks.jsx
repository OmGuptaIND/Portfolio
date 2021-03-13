import React from "react";
import "./Stacks.css";

//Components;
import Title from "../../Partials/Title/Title";
import One from "../../images/one.svg";
import Two from "../../images/two.svg";
import Three from "../../images/three.svg";
import Four from "../../images/four.svg";
import { motion } from "framer-motion";

export default function Stacks() {
	return (
		<div className='st-wrapper'>
			<Title number='2' title='Stacks' />
			<div className='st'>
				<motion.div
					animate={{
						y: [-10, 10],
						transition: { y: { duration: 1, yoyo: Infinity } },
					}}
					className='tech'>
					<img className='stacks__image' src={One} alt='err' />
				</motion.div>
				<motion.div
					animate={{
						y: [10, -10],
						transition: { y: { duration: 1, yoyo: Infinity } },
					}}
					className='tech'>
					<img className='stacks__image' src={Two} alt='err' />
				</motion.div>
				<motion.div
					animate={{
						y: [-10, 10],
						transition: { y: { duration: 1, yoyo: Infinity } },
					}}
					className='tech'>
					<img className='stacks__image' src={Three} alt='err' />
				</motion.div>
				<motion.div
					animate={{
						y: [10, -10],
						transition: { y: { duration: 1, yoyo: Infinity } },
					}}
					className='tech'>
					<img className='stacks__image' src={Four} alt='err' />
				</motion.div>
			</div>
			<div className='stacks__about'>
				<p>
					These are my core programming languages, Started my journey with
					python then to C++, then started web dev and then learned React and
					now I make and design awesome websites and other stuff along the
					way...
				</p>
			</div>
		</div>
	);
}
