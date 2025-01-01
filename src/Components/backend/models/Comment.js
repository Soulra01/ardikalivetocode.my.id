const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const { formatInTimeZone } = require('date-fns-tz');

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
    get() {
      const rawDate = this.getDataValue('created_at'); // Mendapatkan nilai asli dari database
      return formatInTimeZone(rawDate, 'Asia/Jakarta', 'yyyy-MM-dd HH:mm:ss');
    },
  },
});

module.exports = Comment;
