import React, { useEffect, useState } from "react";
import audio from "./audio/laki.mp3";
import image1 from "../page/images/yaldi (1).jpeg";
import image2 from "../page/images/yaldi (2).jpeg";
import image3 from "../page/images/yaldi (3).jpeg";
import image4 from "../page/images/yaldi (4).jpeg";
import image5 from "../page/images/yaldi (5).jpeg";
import image6 from "../page/images/yaldi (6).jpeg";
import image7 from "../page/images/yaldi (7).jpeg";
import "../../Styles/yaldi.css";

const Indah = () => {

    const [showModal, setShowModal] = useState(true);
    const [showCek, setShowCek] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const namenya = "Pak RT";
    const images = [image1, image2, image3, image4, image5, image6, image7];

    const handleStartAudio = () => {
        const audioElement = document.getElementById("audio");
        if (audioElement) {
            audioElement.volume = 0.2;
            audioElement.play();
        }
        setShowModal(false);
        setShowCek(true);
    };

    // Logika penghitungan waktu yang sudah berlalu
    useEffect(() => {
        const calculateTimeElapsed = () => {
            const targetDate = new Date(2024, 11, 31); // Tanggal 13 Desember 2024
            const currentDate = new Date(); // Tanggal saat ini

            const difference = currentDate - targetDate; // Selisih waktu dalam milidetik

            if (difference < 0) {
                setTimeElapsed({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Menghitung hari
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Menghitung jam
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Menghitung menit
            const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Menghitung detik

            setTimeElapsed({
                days,
                hours,
                minutes,
                seconds
            });
        };

        const interval = setInterval(calculateTimeElapsed, 1000); // Update setiap detik

        return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Ganti gambar setiap 5 detik
        return () => clearInterval(interval); // Bersihkan interval
    }, [images.length]);

    return (
        <div className="Background-imgs-yaldi page-chalkduster">
            {/* <video autoPlay muted loop id="bg-video">
                <source src={video1} type="video/mp4" />
            </video> */}
            <audio id="audio" src={audio} loop />
            {showModal && (
                <div className="modal">
                    <p>ready?</p>
                    <p>Much better u use pc/laptop☺️</p>
                    <button onClick={handleStartAudio}>Ya</button>
                </div>
            )}
            <div className={`cek ${showCek ? "show" : ""}`}>
                {/* Carousel gambar */}
                <div className="image-continer">
                    <img
                        src={images[currentIndex]}
                        alt="Slide"
                        className="mySlides w3-animate-fading"
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="pesan">
                    {/* Menampilkan waktu yang telah berlalu */}
                    <h4 id="elapsed-time">
                        {timeElapsed.days} Days, {timeElapsed.hours} Hour, {timeElapsed.minutes} Minute, {timeElapsed.seconds} Seconds, since.....
                    </h4>
                    <h1>31/12/24</h1>
                    <br />
                    <p>
                         {namenya},
                        <br />
                        &emsp;Woy nyedd, betah-betah lu ya di tempat lain, Thanks ya yall ada aja guyonanlu yang bikin gw ketawa, sepi bet kek nya gada lu wkwkwk, kurang-kurangin begonya lu bukan mamat alkatiri. Kapan-kapan kita maen lagi yak, jan bosen lu di bully ama gw, Sehat selalu di luar sana
                    </p>
                    <p>
                        <br></br>&emsp;Ga tau gw mau ngomong apalagi. Pokoknya sukses terus dah yaa, Sampe ketemu di kesuksesan kita nanti
                    </p>
                    <p>
                        <br />&emsp;Sampe Jumpa Braderr......🔥🔥🔥
                    </p>
                    <br />
                    <hr />
                    <p className="note">
                        <br />*The content of this could change over time,
                        until I get used to it like usual, but your memory is
                        eternal in here.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Indah;
