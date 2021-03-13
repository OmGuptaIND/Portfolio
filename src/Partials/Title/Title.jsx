import React from 'react';
import './Title.css';

export default function Title({number, title}) {
    return (
        <div className="title" >
            <p>{number}. {title}</p>
            <div className="title__margin" />
        </div>
    )
}
