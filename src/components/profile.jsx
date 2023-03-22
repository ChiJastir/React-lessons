function Profile(){
    return(
        <div className={"about-me"}>
            <div className={"avatar"}>
                <img src="https://yt3.googleusercontent.com/ytc/AL5GRJVNMJ3rUkEuWjhgjNctvK2LchSZ8wiEwkfWrBTLeA=s900-c-k-c0x00ffffff-no-rj" alt="avatar"/>
            </div>
            <div className={"info-about-me"}>
                <h2 className={"name"}>Chizh Alexandr</h2>
                <ul>
                    <li>Date of Birth: 3 february</li>
                    <li>City: Moscow</li>
                    <li>Web-site: chizh-blog.ru</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile