import React from 'react';
import './Main.css';

//Components;
import Intro from '../Intro/Intro'
import { Fade } from 'react-reveal';
import About from '../About/About';
import Stacks from '../Stacks/Stacks';
import Projects from '../Projects/Projects';
import Other from '../Other/Other';
import Contact from '../Contact/Contact';

export default function Main() {
    return (
        <div className='main' >
            <div id='intro' className='view'>
                <Fade>
					<Intro />
				</Fade>
            </div>
            <div id='about' className='view'>
				<Fade>
					<About />
				</Fade>
			</div>
            <div id='stacks' className='view'>
				<Fade>
					<Stacks />
				</Fade>
			</div>
            <div id='projects' className='view'>
				<Fade>
					<Projects />
				</Fade>
			</div>
			<div id='others' className='view'>
				<Fade>
					<Other />
				</Fade>
			</div>
			<div id='contact' className='main__contact'>
				<Fade>
					<Contact />
				</Fade>
			</div>
			<div className='copy'>
				<p>
					Created & Built by <span className='copy__name'>Om Gupta</span>
				</p>
			</div>
        </div>
    )
}
