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
                <h2 className='footer__heading'><strong>CONTACT</strong></h2>
                <ul>
                    <li>+91 9796344888</li>
                    <li>+91 8717068855</li>
                    <li>care@seraabvalley.com</li>
                </ul>
            </div>
            
            <div className='footer__address main'>
                <h2 className='footer__heading'><strong>ADDRESSES</strong></h2>
                <ul>
                    <li>Saida Kadal </li>
                    <li>Rainawari</li>
                    <li>Srinagar J&K</li>
                    <li>190003</li>
                </ul>
            </div>
            <div className='footer__more main'>
                <h2 className='footer__heading'><strong>COMPANY</strong></h2>
                <p >
                Seraab Valley is our endeavor to deliver  goodness right at your doorstep. Building on our two decades of flourishing wholesale operations
                </p>
            </div>
        

        </div>
    )
}

export default Footer
