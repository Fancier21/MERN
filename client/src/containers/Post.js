import React from 'react';

const Post = ({_id, title, text, date, onDeletePost}) => {
  return (
    <div>
				<h3>{date} - {title}</h3>
        <p>{text}</p>
        <button onClick={() => onDeletePost(_id)}>delete</button>
			</div>
  )
}

export default Post;