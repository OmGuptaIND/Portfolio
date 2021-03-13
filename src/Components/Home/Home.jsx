import React from 'react';
import './Home.css';

//Components;
import Email from '../../Partials/Email/Email';
import Follow from '../../Partials/Follow/Follow';
import Main from '../Main/Main';
import useWindowDimensions from '../../Hooks/UseDimensions/UseDimensions';


export default function Home() {
    const { height, width } = useWindowDimensions();
    console.log(`Height is ${height} and Width is ${width}`);
    return (
        <div className="home" >
            <div className="follow">
                {width>662 && (<Follow />)}
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="email">
                {width>662 && (<Email />)}
            </div>
        </div>
    )
}
