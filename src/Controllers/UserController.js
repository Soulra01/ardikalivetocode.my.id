// Mock data
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Controller untuk GET semua pengguna
const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Daftar pengguna berhasil diambil',
        data: users,
    });
};

// Controller untuk GET pengguna berdasarkan ID
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'Pengguna tidak ditemukan',
        });
    }

    res.status(200).json({
        success: true,
        message: 'Pengguna berhasil diambil',
        data: user,
    });
};

module.exports = {
    getAllUsers,
    getUserById,
};
