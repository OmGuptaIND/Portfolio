import React, { useState } from "react";
import "./Header.css";

//Components;
import Logo from "../../images/logo.png";
import Drawer from "../Drawer/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from 'react-reveal';

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<Fade top>
			<div className='header'>
				<img src={Logo} alt='err' />
				<div className='header__options'>
					<p>1. About</p>
					<p>2. Stacks</p>
					<p>3. Contact</p>
					<p>Resume</p>
				</div>
				<div className='header__open'>
					<MenuIcon className='ham' onClick={() => setOpen(true)} />
				</div>
				{open && <Drawer open={open} setOpen={setOpen} />}
			</div>
		</Fade>
	);
}
