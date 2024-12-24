// src/scripts/dateHandler.js

export const handleDateChange = (e, setDate) => {
    let value = e.target.value.replace(/\D/g, ''); // Menghapus semua karakter non-digit

    // Menangani penghapusan
    if (value.length <= 2) {
        value = value.replace(/(\d{2})(\d{0,})/, '$1-$2'); // Format dd-
    } else if (value.length <= 4) {
        value = value.replace(/(\d{2})(\d{2})(\d{0,})/, '$1-$2-$3'); // Format dd-mm-
    } else if (value.length <= 6) {
        value = value.replace(/(\d{2})(\d{2})(\d{2})(\d{0,})/, '$1-$2-$3-$4'); // Format dd-mm-yy
    } else {
        value = value.slice(0, 8); // Batasi panjang menjadi 8 karakter (dd-mm-yy)
    }

    // Menangani jika pengguna menghapus tanda "-"
    if (value.endsWith('-')) {
        value = value.slice(0, -1); // Hapus karakter "-" jika berada di akhir
    }

    setDate(value); // Memperbarui nilai input
};
