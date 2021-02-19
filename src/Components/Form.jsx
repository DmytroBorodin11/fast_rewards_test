import React from 'react';
import '../css/Form.css';
import Field from './Field';
import {ExternalLink} from "react-external-link";

function Form(props) {
    return (
        <form className="login__form">
            <h2 className="form__title">
                Login
            </h2>
            <div className="fields">
                <Field placeholder='Email address' type='text'/>
                <Field placeholder='Password' type='password'/> 
            </div>
            <button className="submit__btn">
                Log in
            </button> 
            <div className="form__text">
                <ExternalLink to='#' className='forgot__pass'>
                    Forgot your password?
                </ExternalLink>
            </div>
            <div className="form__text">
                <p>Don’t have an account yet? </p>
                <ExternalLink to='#' className='register'>
                    Register
                </ExternalLink>
            </div>     
        </form>
    )
}

export default Form;
