import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import '../../Styles/cek.css';

const App = () => {
  return (
    <div className='comments'>
      <h1>Comment Section</h1>
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default App;
