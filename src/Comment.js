import React from 'react';

const Comment = ({text, votes, id, thumbUp, thumbDown, removeComment}) => 
    <li>
        {text}
        <span> votes: {votes} </span> 
        <button onClick={() => thumbUp(id)}>+</button> 
        <button onClick={() => thumbDown(id)}>-</button>
        <button onClick={() => removeComment(id)}>x</button>
    </li>

export default Comment;