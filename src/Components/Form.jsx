import React from 'react';
import '../css/Form.css';
import Field from './Field';
import {ExternalLink} from "react-external-link";
import {useState} from 'react';

function Form(props) {

    let [ emailValue, setEmailValue ] = useState('');
    let [ passValue, setPassValue ] = useState('');
    let [ isDisabled, setIsDisabled ] = useState(false);
    let [ passType, setPassType ] = useState('password');

    const login = (e) => {
        e.preventDefault();
        alert(emailValue + ' ' + passValue)
    }

    const updateEmailValue = (e) => {
        setEmailValue(e.target.value);
    }

    const updatePassValue = (e) => {
        setPassValue(e.target.value);
    }
    const updateIsDisabled = (invalidField) => {
        setIsDisabled(invalidField);
    }

    const changePassType = () => {
        if ( passType === 'password') {
            console.log(passValue);
            setPassType('text')
        }else {
            setPassType('password');
        }
     
    }

    return (
        <form className="login__form" onSubmit={(e) => login(e)}>
            <h2 className="form__title">
                Login
            </h2>
            <div className="fields">
                <Field onChangeFn={updateEmailValue} error='Email required' updateIsDisabled={updateIsDisabled}
                placeholder='Email address' type='text'/>
                <Field onChangeFn={updatePassValue} error='Password required' 
                changePassType={changePassType} passType='password'
                updateIsDisabled={updateIsDisabled}
                placeholder='Password' type={passType}/> 
            </div>
            <button disabled={isDisabled} className="submit__btn">
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
