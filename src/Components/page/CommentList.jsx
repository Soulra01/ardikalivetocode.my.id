import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('/api/comments');
        const sortedComments = response.data.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB - dateA; // Urutkan dari terbaru ke terlama
        });
        setComments(sortedComments);
      } catch (error) {
        // console.error('Error fetching comments', error);
      }
    };
    fetchComments();
  }, []);

  // Fungsi untuk format tanggal menjadi dd/mm/yy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
    const year = String(date.getFullYear()).slice(2); // Mengambil dua digit terakhir tahun
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <p key={comment.id}>
            {comment.comment}
            <br />
            <small>{formatDate(comment.created_at)}</small>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
