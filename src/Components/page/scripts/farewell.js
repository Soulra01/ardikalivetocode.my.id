export const processDate = (date, navigate) => {
    const [day, month, year] = date.split("-");
    const inputDate = new Date(`20${year}`, month, day); // Convert to Date object

    // Statement if untuk pengalihan
    if (inputDate.getTime() === new Date(2024, 12, 13).getTime()) {
        navigate("/farewell/indah");
    } else if (inputDate.getTime() === new Date(2024, 12, 31).getTime()) {
        navigate("/farewell/Pak_RT");
    }
    else if (inputDate.getTime() === new Date(2024, 11, 31).getTime()) {
        navigate("/b");
    } else {
        alert("Yaaa tanggal farewell lu ga bener coba cek lagi dehh.... 😑");
    }
};
