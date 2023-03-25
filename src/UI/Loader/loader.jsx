import React from 'react';
import s from './loader.module.css'
import logo from './../../img/logo.svg'

const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default Loader;