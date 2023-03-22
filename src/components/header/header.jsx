import logo from '../../img/full-logo.svg';
import s from './header.module.css'

function Header(){
    return(
        <header className={s.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Header