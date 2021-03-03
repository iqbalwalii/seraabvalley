import React, {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Banner from '../Banner'
import valley from '../../api/valley'

import './Contact.css'

const Contact = () => {
    const [values, setValues] = useState('');
    const onSubmitHandler = event => {
        event.preventDefault();
       valley.post('/contact', {
                ...values,
            })
            .then(result => console.log(result))
            .catch(result => console.log(result));
    };
    const onChangeHandler = event => {
        setValues(prevState => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };
    return (
        <div>
            <Navbar/>
            <div className="contact__hero">
                
                <div className="description">
                    <img  className='contact__mail__icon'src="./assets/images/mail.svg" alt=""/>
                    <h1 className="hero__heading">if You have questions or just want to get in touch, use the form below. We look forward to hearing from you</h1>
                </div>
                <div className="contact__form">
                    <h2 className="contact__heading">CONTACT US</h2>
                    <div className="backdrop__form">
</div>
                    <form  onSubmit={onSubmitHandler}  className='contact_form_data'>
                        <input className='contact__text' type="text"   value={values.name}
                            placeholder="Enter Your Name"
                            onChange={onChangeHandler}/>
                        <input className='contact__text' type="email" required='required'   value={values.email}
                            placeholder="Enter Your Email"
                            onChange={onChangeHandler}/>
                        <textarea className='contact__text' placeholder='Message Description'  onChange={onChangeHandler} name="" id="" cols="30" rows="10"></textarea>
                        <input className='contact_form_submit' type="submit" value="Send"/>
                    </form>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact
