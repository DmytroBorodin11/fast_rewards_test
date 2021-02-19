import React from 'react';
import '../css/Form.css';
import icon1 from '../assets/pass_icon_1.svg';
import icon2 from '../assets/pass_icon_2.svg';
import {useState} from 'react';

export default function Field(props) {

    let [ invalidField, setInvalidField ] = useState(false);

    const checkIfInvalid = (e) => {
        if (e.target.value === '') {
            setInvalidField(true);
            props.updateIsDisabled(true);
        }else {
            setInvalidField(false);
            props.updateIsDisabled(false);
        }
    }

    const onChangeFn = (e) => {
        setInvalidField(false);
        props.updateIsDisabled(false);
        props.onChangeFn(e)
    }




    return (
        <div className={'field__block' + ' ' + (invalidField ? 'error' : '')}>
            <input onChange={(e) => {onChangeFn(e)}} onBlur={(e) => {checkIfInvalid(e)}}
            value={props.value} type={props.type} placeholder={props.placeholder}/>
            {props.passType === 'password' ? 
                <div className='show_pass__btn' onClick={props.changePassType}>
                    <img src={invalidField ? icon2 : icon1}/>
                </div> : ''}
            {
                invalidField ? <p className="error__message">{props.error}</p> : ''
            }
        </div>
    )
}
