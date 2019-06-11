import React from 'react';
import Comment from './CommentContainer.js';

// const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment text={comment.text} votes={comment.votes}/>)}</ul>

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>

export default CommentsList