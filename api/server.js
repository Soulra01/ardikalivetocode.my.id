const express = require('express');
const cors = require('cors');
const { addComment, getComments } = require('../commentsController');
const sequelize = require('../databases/database');

const app = express();
app.use(cors());
app.use(express.json());  // Untuk parsing request body

// Routes
app.post('/comments', addComment);
app.get('/comments', getComments);

// Sync database
sequelize.sync().then(() => {
  //   console.log('Database connected and synced');
}).catch((err) => {
  //   console.error('Failed to sync database:', err);
});

// Convert Express app to serverless function
module.exports = (req, res) => {
  app(req, res);
};
