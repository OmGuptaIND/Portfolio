import React from "react";
import "./Intro.css";

//Components;
import Typical from "react-typical";
import { motion } from "framer-motion";


export default function Intro() {
	return (
		<div className='intro'>
			<p>Hi, my name is</p>
			<p>Om Gupta.</p>
			<p className='intro__hash'>I Build => </p>
			<p className='intro__typical'>
					<Typical
						steps={[
							"Websites...!",
							2500,
							"Apps...!",
							2500,
							"Games...!",
							2500,
							"Bots...!",
							2500,
							"Music...!",
							2500,
							"Things...!",
							2000,
						]}
						loop={Infinity}
						wrapper='p'
					/>
			</p>
			<p style={{ marginBottom: "10px" }}>
				Avid News Reader, Stock Investor, College Student | LNMIIT-Jaipur, Like
				to Solve questions and win competitions, Always ready to learn new
				stuff. Currently Living in India.{" "}
			</p>
			<p>Aim: To be in three comma club.</p>
            <div className='intro__btn'>
				<motion.button
					animate={{
						y: [-20, 20],
						transition: { y: { duration: 1, yoyo: Infinity } },
					}}
					className='btn__intro'>
					Get In Touch
				</motion.button>
			</div>
		</div>
	);
}
