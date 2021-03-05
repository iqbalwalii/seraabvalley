import React from 'react';
import{ logout }from '../redux/actions/index';
import { FaCartArrowDown } from 'react-icons/fa';

import { connect } from 'react-redux';
import {Link, useLocation} from 'react-router-dom';  
import './Navbar.css'   



// utils function
function addBg() {
    var myNav = document.querySelector('.navbar');
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-transparent');
}
function removeBg() {
    var myNav = document.querySelector('.navbar');
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
}

const Navbar = ({ cartItems, user, logout}) => {
    const location = useLocation();

 
    function navbartoggle()
    {
        const navbar= document.querySelector('.navbar__links');
        console.log(navbar);
        navbar.classList.toggle('display');
    }
    window.onscroll = function () {
        if (
            document.body.scrollTop >= 200 ||
            document.documentElement.scrollTop >= 200
        ) {
            addBg();
        } else {
            removeBg();
        }
    };
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <div className='brand'>
                    <img  className='logo' src="/assets/images/logo.png" alt=""/>
                    <h1 className="logo__heading" >
                    <Link to="/" className='navigation__text'>Seraab valley <span>The Taste of Kashmir</span></Link>
                    </h1>
                </div>
                <div className='hamburger' onClick={()=>{navbartoggle()}}>
                   <span></span>
                   <span></span>
                   <span></span>
                </div>
                
            </div>
            <div className="navbar__links">
                <Link
                    to="/store"
                    className={location.pathname === '/store' ? 'active' : 'inactive'}
                >
                    Store
                </Link>
            <Link
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : 'inactive'}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className={location.pathname === '/contact' ? 'active' : 'inactive'}
                >
                    Contact 
                </Link>
                
                {
                    user.name ? <>
                        <h2 className ="username">{user.name}</h2><button onClick={logout}>Logout</button>
                    </> : <>
                    <Link
                    to="/signin"
                    className={location.pathname === '/Signin' ? 'active' : 'inactive'}
                >
                    Signin
                </Link>
                <Link
                    to="/signup"
                    className={location.pathname === '/Signup' ? 'active' : 'inactive'}
                >
                    Signup
                </Link></>
                   
                
                }<Link
                
                    to="/cart"
                    className={ location.pathname === '/cart' ? 'basket active' : 'basket  inactive'}
                >
                   <img src="/assets/images/basket.png" alt="basket icon" className="basket__icon"/>
                    <span className="cart__total"> {cartItems.length}</span>
                </Link>
            </div>
               
        </nav>

    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.selectedItem, user:state.user
    };
};

export default connect(mapStateToProps, {logout})(Navbar);
