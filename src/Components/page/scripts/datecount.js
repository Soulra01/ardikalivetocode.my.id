// Fungsi untuk menghitung selisih hari
function calculateDays() {
    // Tanggal awal (13/12/24)
    const startDate = new Date(2024, 11, 13); // Bulan di JavaScript adalah 0-11
    const today = new Date(); // Tanggal hari ini

    // Hitung selisih waktu dalam milidetik
    const timeDifference = today - startDate;

    // Konversi milidetik ke hari
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// Fungsi untuk menampilkan hasil di web
function displayDays() {
    const countdownElement = document.getElementById("countdown");
    const days = calculateDays();

    if (days >= 0) {
        countdownElement.textContent = `${days} Days since`;
    } else {
        countdownElement.textContent = `Tanggal 13/12/24 belum terlewati. Masih ada ${Math.abs(days)} hari lagi.`;
    }
}

// Jalankan fungsi saat halaman dimuat
displayDays();

// Jika ingin waktu diperbarui setiap detik, gunakan setInterval
setInterval(displayDays, 3600);
