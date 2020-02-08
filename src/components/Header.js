import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header(){
    
    return (
        <div className='header'>
            <div className='title-box'>
                <h2 className='title'>TmTrkr</h2>
            </div>
            <nav className='nav-box'>
                <p>Home</p>
                <p>About</p>
                <NavLink to='/login'>login</NavLink>
                <p>register</p>
            </nav>
        </div>
    )
}