const Comment = require('../Components/models/Comment');

// Menambahkan komentar baru
exports.addComment = async (req, res) => {
  try {
    const { user_id, comment } = req.body;
    const newComment = await Comment.create({ user_id, comment });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

// Mengambil semua komentar
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};
