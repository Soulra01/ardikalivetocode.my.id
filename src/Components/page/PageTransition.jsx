import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../../Styles/PageTransition.css";

const PageTransition = ({ children }) => {
    const location = useLocation(); // Mendapatkan lokasi dari router
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        setShowPage(true); // Memunculkan halaman setelah komponen dimount
        return () => setShowPage(false); // Menyembunyikan halaman saat keluar
    }, [location]);

    return (
        <CSSTransition
            in={showPage}
            timeout={1000} // Durasi transisi
            classNames="fade"
            unmountOnExit
        >
            <div className="page-transition">
                {children}
            </div>
        </CSSTransition>
    );
};

export default PageTransition;
