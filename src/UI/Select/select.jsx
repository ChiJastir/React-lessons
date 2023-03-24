import React from 'react';
import s from './select.module.css'

const Select = ({heading, options, value, sortPost}) => {
    return (
        <select
            value={value}
            onChange={event => sortPost(event.target.value)}
        >
            <option disabled>{heading}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )

            }
        </select>
    );
};

export default Select;