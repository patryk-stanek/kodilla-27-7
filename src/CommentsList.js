import React from 'react';
import Comment from './CommentContainer.js';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment text={comment.text} votes={comment.votes} />)}</ul>

export default CommentsList