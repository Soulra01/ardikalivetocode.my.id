import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [setUserId] = useState('');
  const [comment, setComment] = useState('');

  const user_id = 1;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/comments', { user_id, comment });
      setComment('');
      setUserId('');
      alert('Comment added');
    } catch (error) {
    //   console.error('Error adding comment', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        placeholder="Enter your comment" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
