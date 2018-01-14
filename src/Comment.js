import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Lubię to</button>
    <button onClick={() => thumbDownComment(id)}>Nie lubię tego</button>
  </li>;

export default Comment;