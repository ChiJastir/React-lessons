import logo from "../img/full-logo.svg";

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Header