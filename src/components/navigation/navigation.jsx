import s from './navigation.module.css'

function Navigation(){
    return(
    <aside className={s.aside}>
        <nav>
            <ul>
                <li>Профиль</li>
                <li>Сообщения</li>
                <li>Новости</li>
                <li>Музыка</li>
                <li>Настройки</li>
            </ul>
        </nav>
    </aside>)
}

export default Navigation