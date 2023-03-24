import React from 'react';
import s from './heading.module.css'

const Heading = ({children, className}) => {
    return (
        <h3 className={[s.title, className].join(' ')}>{children}</h3>
    );
};

export default Heading;