import React from 'react'
import './buttonTemplate.css'

const Button = props => {


    function clickHandler() {
        console.log('click')
    }

    console.log(props.disabled)

    return (
        <div className={'buttonTemplate'}>
            <button
                onClick={clickHandler}
                className={props.disabled ? 'buttonTemplate__btn buttonTemplate__btn_disabled' : 'buttonTemplate__btn'}
                disabled={props.disabled}
            >
                {props.text}
            </button>
        </div>
    )
}
export default Button;