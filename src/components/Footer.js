import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__name'>
                <h2 className='footer__heading1 footer__heading'><strong>SERAAB VALLEY </strong><span>The Taste of Kashmir</span></h2>
                <img className="footer__image"src="/assets/images/footer.png" alt=""/>
            </div>
            <div className='footer__services main'>
                <h2 className=' footer__heading'><strong>CONTACT</strong></h2>
                <ul>
                    <li>Support</li>
                    <li>+91 7006414186</li>
                    <li>@company</li>
                    <li>@company</li>
                </ul>
            </div>
            
            <div className='footer__address main'>
                <h2 className='footer__heading'><strong>ADDRESSES</strong></h2>
                <ul>
                    <li>Saida Kadal </li>
                    <li>Rainawari</li>
                    <li>Srinagar J&K</li>
                    <li>190021</li>
                </ul>
            </div>
            <div className='footer__more main'>
                <h2 className='footer__heading'><strong>COMPANY</strong></h2>
                <p className='footer__para'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam veniam odio, qui repudiandae nam, amet se
                </p>
            </div>
        

        </div>
    )
}

export default Footer
