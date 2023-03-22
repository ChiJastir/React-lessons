import s from './navigation.module.css'

function Navigation(){
    return(
    <aside className={s.aside}>
        <nav>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    </aside>)
}

export default Navigation