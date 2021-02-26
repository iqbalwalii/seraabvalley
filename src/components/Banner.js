import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="backdrop"></div>
            <img src="/assets/images/bannerbg.png" alt="background" />
            <div className="banner__heading">
            Delicious and fresh dry fruits straight out of kashmir, to your finger
            tips.
            </div>
        </div>
    )
}

export default Banner