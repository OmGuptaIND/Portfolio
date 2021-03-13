import React from 'react';
import './Follow.css';

//Components;
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Follow() {
    return (
        <div className='follow' >
            <div className='social'>
                <p><FacebookIcon /></p>
                <p><GitHubIcon /></p>
                <p><TwitterIcon /></p>
                <p><InstagramIcon /></p>
                <p><YouTubeIcon /></p>
                <p><LinkedInIcon /></p>
            </div>
            <div className='social_margin'></div>
        </div>
    )
}
