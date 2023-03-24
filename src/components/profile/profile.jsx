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
                    <h2>Chizh Alexandr</h2>
                    <ul>
                        <li>Date of Birth: 3 february</li>
                        <li>City: Moscow</li>
                        <li>Web-site: chizh-blog.ru</li>
                    </ul>
                </div>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile