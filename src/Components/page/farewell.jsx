import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Farewell.css";
import { handleDateChange } from "./scripts/dateHandler";
import { processDate } from "./scripts/farewell";

const Farewell = () => {
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    // Auto-refresh kontrol
    useEffect(() => {
        const hasRefreshed = sessionStorage.getItem("hasRefreshed") || "0";

        if (parseInt(hasRefreshed, 10) < 2) {
            sessionStorage.setItem("hasRefreshed", (parseInt(hasRefreshed, 10) + 1).toString());
            window.location.reload();
        }
    }, []);

    const handleSubmit = () => {
        processDate(date, navigate);
    };

    return (
        <div className="Background-img">
            <div className="date-input-container">
                <label htmlFor="date-input">Tanggal Farewell-mu: </label>
                <input
                    id="date-input"
                    type="text"
                    value={date}
                    onChange={(e) => handleDateChange(e, setDate)}
                    placeholder="dd-mm-yy"
                    maxLength="8"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Farewell;
