import React from 'react'
import './inputTemplate.css'

const InputTemplate = props => {


    return (
        <div className='inputTemplate'>
            <label className='inputTemplate-label'>
                {props.label}
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    className='inputTemplate-input'
                />
            </label>

        </div>
    )
    
}

export default InputTemplate;