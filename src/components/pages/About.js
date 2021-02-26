import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="about__section">
                <img className='about__image' src="./assets/images/tray.png" alt=""/>
                <h1 className="about__text">We Are at Your Service 24*7</h1>
            </div>
            <hr/>
            <div className="about__work__description">
            <h2>Greetings from Seraab Valley Team</h2>
                <p>Dry Fruits have been a part of our diet and our culture since times immemorial. Along with the umpteen health benefits that they offer, dry fruits are also an excellent source of vital nutrients and healthy oils that help reduce the risk of chronic diseases. A long shelf life, ease of storage and transportation make them an inherent part of every dietary recommendation.
Seraab Valley is our endeavor to deliver this goodness right at your doorstep. Building on our two decades of flourishing wholesale operations, we are now foraying into the online space for  offering dry fruits online. We aspire to reach out to consumers across the country with an exciting array of Kashmiri Dry Fruits with unmatched assortments and mouth-watering variations.
We offer more than 40 different varieties of dry fruits and nuts, starting from the traditional and the classic, such as Walnuts,  Almonds, Saffron, Apricots and much more.
Our dry fruits and nuts are sourced from the top-notch quality growers, and cleaned, sorted and packaged manually to ensure that their freshness and flavor is well preserved. We offer last-mile delivery with innovative packaging, to keep dry fruits and nuts fresh and free from impurities. We ship dry fruits and nuts across the country.

We meticulously comply with the standards of Food Safety and Standards Authority of India (FSSAI) at our cleaning and packaging facility. We also follow a stringent quality control practices. This helps us ensure that we deliver dry fruits and nuts of premium quality and taste.
 </p>
            </div>
    <div className="two__paras">
        <div className="para__one">
            <h1>Our Vision</h1>
            <p>We envision becoming the customer’s first choice for dry fruits and nuts, by bringing the freshest and highest quality to maximum number of customers through our online venture.
To be the most influential distributor in Asia.</p>
        </div>
        <div className="para__two">
            <h1>Mission</h1>
            <p>
            We endeavor to achieve our vision by following a pro-customer approach and adhering to international standards of quality, right from selection of dry fruits and nuts to product delivery.

            </p>
        </div>
    </div>
            <hr/>
            <div className="about__team__section">
                <h3 className='about__description'>Our Team</h3>
                <div className="about__team">
                    <div className="profile">
                        <img className='profile__photo'src="https://i.pinimg.com/originals/43/b1/d6/43b1d6e87417aa6287602dd9e0cb6f4a.jpg" alt=""/>
                        <h2 className='profile__name'>Zaffar Abbas</h2>
                        <h3 c>Managing Director</h3>
                        <p>abc123@gmail.com</p>
                    </div>
                    <div className="profile">
                        <img className='profile__photo' src="https://i.pinimg.com/736x/70/f6/c7/70f6c74cddbc35074dfa93aa9a33b4a8.jpg" alt=""/>
                        <h2 className='profile__name'>Dinesh Kartik</h2>
                        <h3 className='profile__name'>Director</h3>
                        <p>abc123@gmail.com</p>
                    </div>
                </div>
            </div>
            <Footer/>            
        </div>
    )
}

export default About
