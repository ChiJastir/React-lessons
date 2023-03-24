import React from 'react';
import s from './modal-window.module.css'

const ModalWindow = ({children, visible, setVisible}) => {
    const classes = [s.window]
    if (visible)
        classes.push(s.active)

    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <div className={s.panel} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;