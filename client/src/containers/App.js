import React from 'react';
import PostForm from './PostForm';
import PostsList from './PostsList';

const App = (props) => {
  return (
    <div>
      <PostForm />
      <PostsList />
    </div>
  )
}

export default App;