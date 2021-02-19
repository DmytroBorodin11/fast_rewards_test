import React from 'react';
import '../css/Form.css';
import icon1 from '../assets/pass_icon_1.svg';
import icon2 from '../assets/pass_icon_2.svg';

export default function Field(props) {
    return (
        <div className={'field__block' + ' ' + (props.class)}>
            <input type={props.type} placeholder={props.placeholder}/>
            {props.type === 'password' ? 
                <button className='show_pass__btn'>
                    <img src={props.class ? icon2 : icon1}/>
                </button> : ''}
            {
                props.class ? <p className="error__message">{props.error}</p> : ''
            }
        </div>
    )
}
