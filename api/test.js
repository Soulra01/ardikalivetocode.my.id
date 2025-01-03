const express = require('express');
const cors = require('cors');
const { addComment, getComments } = require('../src/Controllers/commentsController');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request body

// Routes
app.post('/api/comments', addComment);
app.get('/api/comments', getComments);

// Sync database
const sequelize = require('../src/Components/databases/db');
sequelize.sync().catch((err) => {
  console.error('Failed to sync database:', err);
});

// Export the app for Vercel
module.exports = app;
