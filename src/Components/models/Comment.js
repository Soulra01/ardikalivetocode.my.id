const { DataTypes } = require('sequelize');
const sequelize = require('../databases/db');

const Comment = sequelize.define('Comment', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Comment;
