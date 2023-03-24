import s from './button.module.css'

function Button(props){
    return(
        <button {...props} className={s.button + ' ' + props.className}>{props.children}</button>
    )
}

export default Button