import React from 'react';

export default function Header(){
    
    return (
        <div className='header'>
            <div className='title-box'>
                <h2 className='title'>TmTrkr</h2>
            </div>
            <nav className='nav-box'>
                <p>Home</p>
                <p>About</p>
                <p>login</p>
                <p>register</p>
            </nav>
        </div>
    )
}