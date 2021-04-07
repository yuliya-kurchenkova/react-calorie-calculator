import React from 'react'
import select from '../../constans/select'

const SelectTemplate = props => {

    return (
        <div>
            <label>{props.value}</label>
            <select
                value={props.value}
                onChange={props.onChange}
            >
                { select.map((option, index) => {
                    return (
                        <option
                            value={option.id}
                            key={index}
                        >
                            {option.text}
                        </option>
                    )
                }) }
                </select>
        </div>
    )
}

export default SelectTemplate