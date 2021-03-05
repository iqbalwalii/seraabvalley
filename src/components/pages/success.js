import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {clearCart} from '../../redux/actions'
import './success.css'
const success = (props) => {
    console.log(props.history?.location.state.message)
    props.clearCart();
    return (
        <div>
            <div className="success_container">
                <div className="action">
                <div className='message__success' ><h6>{props.history?.location.state.message}</h6>
                        <Link  to='/store' className='return__btn'>Continue Shopping  </Link>
                </div>
                <div className="trophy">
                    <svg fill="#FFD600" width="100%" height="100%" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                        </svg>
                        </div>
                        <div className="confetti"></div>
                        <div className="confetti two"></div>
                        <div className="confetti three"></div>
                        <div className="confetti four"></div>
                        <div className="confetti--purple"></div>
                        <div className="confetti--purple two"></div>
                        <div className="confetti--purple three"></div>
                        <div className="confetti--purple four"></div>
                </div>

             </div>
        </div>
    )
}



export default connect(null, {clearCart})(success)

