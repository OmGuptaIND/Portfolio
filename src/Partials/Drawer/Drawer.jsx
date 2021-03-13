import React from 'react';
import './Drawer.css';

//Components;
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default function Drawer({open, setOpen}) {
    
    return (
        <div className="hams">
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={()=>setOpen(false)}
                onOpen={()=>setOpen(true)}
                className="hamburger"
            >
                <div className="drawer">
                    <div className="drawer__wrapper">
                        <div className="drawer__options">
                            <div className="drawer__option">
                                <p>01.</p>
                                <p className="drawer__op" >About</p>
                            </div>
                            <div className="drawer__option">
                                <p>02.</p>
                                <p className="drawer__op" >Projects</p>
                            </div>
                            <div className="drawer__option">
                                <p>03.</p>
                                <p className="drawer__op" >Contact</p>
                            </div>
                            <div className="drawer__option">
                                <p>04.</p>
                                <p className="drawer__op" >Feedback</p>
                            </div>
                            <div className="drawer__option">
                                <p>05.</p>
                                <p className=" drawer__res drawer__op" >Resume</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwipeableDrawer>
        </div>
    )
}
