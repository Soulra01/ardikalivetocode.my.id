const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const userRoutes = require('./routes/userRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan routes
app.use('/api/users', userRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
