import React from 'react';
import Abstract from '../images/abstract.jpg'

export default function LandingPage() {
    return (
        <div className='landing-page'>
            <div className='promo'>
                <div className='promo-content'>
                    <h2>Welcome to TmTrkr!</h2>
                    <p>lorem ipsum</p>
                </div>
                <img className='promo-art' src={Abstract}/>
            </div>
        </div>
    )
}