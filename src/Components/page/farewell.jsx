import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Farewell.css";
import { handleDateChange } from "./scripts/dateHandler"; // Import fungsi dari file terpisah
import { processDate } from "./scripts/farewell";

const Farewell = () => {
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        processDate(date, navigate);
    };

    return (
        <div className="Background-img">
            <div className="date-input-container">
                <label htmlFor="date-input">Masukkan Tanggal:</label>
                <input
                    id="date-input"
                    type="text"
                    value={date}
                    onChange={(e) => handleDateChange(e, setDate)} // Gunakan fungsi yang diimpor
                    placeholder="dd-mm-yy"
                    maxLength="8" // Untuk membatasi panjang input menjadi 8 karakter (dd-mm-yy)
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Farewell;
