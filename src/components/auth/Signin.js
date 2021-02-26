import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions';import useFormValidation from './useFormValidation';
import validate from './validateLogin';
import valley from '../../api/valley';
import './Signup.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';
const INITIAL_FORM_STATE = {
    email: '',
    name: '',
    password: '',
};
// 
// const loginUser = async userData => {
//     console.log('performing creation with data as: ', userData)
//     try {
//         const reponse = await axios.post('https://ancient-inlet-41931.herokuapp.com//user/read', {...userData});
//         console.log(reponse);
//     } catch (error) {
//         console.log(error, 'errrrrrrrr');
//     }
// };

const Login = ({ loginUser, user, history }) => {
    const {
        values,
        isSubmitting,
        errors,
        onBlurHandler,
        onChangeHandler,
        onSubmitHandler,
    } = useFormValidation(INITIAL_FORM_STATE, validate, loginUser);
    function toggleForm()
    {
        const backdrop = document.querySelector('.backdrop__form');
        backdrop.classList.toggle('toggle')
    }

    return (
        <div className='main__page__handler'>

<div className='the__other'>

<Navbar/>
<div className="backdrop__form">
</div>
<div className='form__data'>
<h1 className="form__heading">Sign in</h1>
<form onSubmit={onSubmitHandler} className='form__main'>
<input
    type="email"
    name="email"
    id="email"
    placeholder="Enter your email"
    value={values.email}
    onChange={onChangeHandler}
    onBlur={onBlurHandler}
    required='required'
/> 
{errors.email && <p className="input__error">{errors.email}</p>}
<input
    type="password"
    name="password"
    id="password"
    placeholder="Enter you password"
    value={values.password}
    onChange={onChangeHandler}
    onBlur={onBlurHandler}
    className={errors.password && 'border__red'}
/>
{errors.password && <p className="input__error">{errors.password}</p>}
<button type="submit" >SIGN IN</button>
</form>
<Link to="/Signup" className='change__over' onClick={toggleForm}>Don't Have an Account</Link>
<h1>
                {user.message
                    ? user.message
                    : user.email
                    ? history.push(history.location.state)
                    : ''}
            </h1>
</div>

</div>

</div>

);
};


const mapStateToProps = state => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps, { loginUser })(Login);
