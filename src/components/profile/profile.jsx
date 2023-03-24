import Posts from './posts/posts'
import s from './profile.module.css'
import Button from "../../UI/Button/button";

function Profile(){
    return(
        <div>
            <div className={s.about_me}>
                <div className={s.avatar}>
                    <img src="https://yt3.googleusercontent.com/ytc/AL5GRJVNMJ3rUkEuWjhgjNctvK2LchSZ8wiEwkfWrBTLeA=s900-c-k-c0x00ffffff-no-rj" alt="avatar"/>
                </div>
                <div className={s.info}>
                    <h2>Чиж Александр</h2>
                    <ul>
                        <li>Дата рождения: 3 февраля</li>
                        <li>Город: Москва</li>
                        <li>Веб-сайт: chizh-blog.ru</li>
                    </ul>
                </div>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile