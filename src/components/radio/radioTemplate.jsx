import React from 'react'
import './radioTemplate.css'

const RadioTemplate = props => {
    return (
        <div>
            <p className='radioTemplate-text'>{props.text}</p>
            <input
                type="radio"
                name={props.name}
                required={props.required}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label
                className="radioTemplate-label"
            >
                {props.label}
            </label>
        </div>
    )
}

export default RadioTemplate;