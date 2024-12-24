const express = require('express');
const router = express.Router();

// Import controllers
const { getAllUsers, getUserById } = require('../Controllers/UserController');

// Route untuk GET semua pengguna
router.get('/', getAllUsers);

// Route untuk GET pengguna berdasarkan ID
router.get('/:id', getUserById);

module.exports = router;
