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
            <div className="about__work__description">
            <h2>GREETINGS FROM SERAAAB VALLEY</h2>
                <p>Dry Fruits have been a part of our diet and our culture since times immemorial. Along with the umpteen health benefits that they offer, dry fruits are also an excellent source of vital nutrients and healthy oils that help reduce the risk of chronic diseases. A long shelf life, ease of storage and transportation make them an inherent part of every dietary recommendation.
Seraab Valley is our endeavor to deliver this goodness right at your doorstep. Building on our two decades of flourishing wholesale operations, we are now foraying into the online space for  offering dry fruits online. We aspire to reach out to consumers across the country with an exciting array of Kashmiri Dry Fruits with unmatched assortments and mouth-watering variations.
We offer more than 40 different varieties of dry fruits and nuts, starting from the traditional and the classic, such as Walnuts,  Almonds, Saffron, Apricots and much more.
Our dry fruits and nuts are sourced from the top-notch quality growers, and cleaned, sorted and packaged manually to ensure that their freshness and flavor is well preserved. 
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
                <h3 className='about__description'>OUR TEAM</h3>
                <div className="about__team">
                    <div className="profile">
                        <img className='profile__photo'src="https://www.rayyforce.com/wp-content/uploads/2019/11/dummy-profile.jpg" alt=""/>
                        <h2 className='profile__name'>Zaffar Abbas</h2>
                        <h4 c>Managing Director</h4>
                        <p>md@seraabvalley.com</p>
                    </div>
                    <div className="profile">
                        <img className='profile__photo' src="https://www.rayyforce.com/wp-content/uploads/2019/11/dummy-profile.jpg" alt=""/>
                        <h2 className='profile__name'>Dilawar Hussain</h2>
                        <h4 className='profile__name'>Director</h4>
                        <p>director@seraabvalley.com</p>
                    </div>
                </div>
            </div>
            <Footer/>            
        </div>
    )
}

export default About
