import React, {useState} from 'react';

const LikesAndInput = () => {
    const [likes, setLikes] = useState(0)
    const [input, setInput] = useState("123")

    return (
        <div>
            <h1>{input}</h1>
            <input type="text" value={input} onChange={event => setInput(event.target.value)} />

            <h1>{likes}</h1>
            <button onClick={() => setLikes(likes + 1)}>like</button>
            <button onClick={() => setLikes(likes - 1)}>dislike</button>
        </div>
    );
};

export default LikesAndInput;