const express = require('express');
const cors = require('cors');
const { addComment, getComments } = require('./src/Controllers/commentsController');

const app = express();
app.use(cors());
app.use(express.json());  // Untuk parsing request body

// Routes
app.post('/comments', addComment);
app.get('/comments', getComments);

// Sync database
const sequelize = require('./src/Components/databases/db');
sequelize.sync().then(() => {
//   console.log('Database connected and synced');
}).catch((err) => {
//   console.error('Failed to sync database:', err);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
