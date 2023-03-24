import React from 'react';
import s from './input.module.css'

const Input = (props) => {
    return (
        <input
            {...props}
            type="text"
            className={s.input + ' ' + props.className}
        >
        </input>
    );
};

export default Input;