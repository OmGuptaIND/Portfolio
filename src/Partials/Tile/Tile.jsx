import React from 'react';
import './Tile.css';

//Components;
import Image from "../../images/pic.PNG";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export default function Tile({item, index}) {
    return (
        <div className='tl'>
            <div className='img'>
                <img src = {Image} alt = 'err' />
                <div className="image__cover" />
            
            <div className='tl-data'>
                <div className='tl-head' id = {index%2 === 0 && ('tl-head-left')}>
                    <p>Featured</p>
                    <p>Ecom</p>
                </div>
                <div className='tl-desc' id = {index%2 === 0 && ('tl-desc-left')} >
                    <p>
                    A simple Ecommerce website with the a Admin, and Products page with the functionality of checkout, address, Pin-code and Payments ability with PayPal. With a CRM in the backend so the Owner can fully see and handle orders.
                    </p>
                </div>
                <div className='tl-tags' id = {index%2 === 0 && ('tl-tags-left')} >
                    <span>Django</span>
                    <span>Django</span>
                    <span>Django</span>
                </div>
                <div className='tl-links' id = {index %2 === 0 && ('tl-links-left')} >
                    <span><GitHubIcon /></span>
                    <span><OpenInNewIcon /></span>
                </div>
            </div>
            </div>
        </div>
    )
}
