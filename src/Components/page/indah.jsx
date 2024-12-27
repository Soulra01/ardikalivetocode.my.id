import React, { useEffect, useRef, useState } from "react";
import audio from "./audio/indahbg.mp3";
import image1 from "./images/indah2.jpg";
import image2 from "./images/indah.jpg";
import image3 from "./images/indah1.jpg";
import video1 from "./images/Farewell2.mp4";

import "../../Styles/indah.css";

const Indah = () => {
    const audioRef = useRef(null);
    const [showModal, setShowModal] = useState(true);
    const [showCek, setShowCek] = useState(false); // State untuk kontrol visibilitas cek
    const [currentIndex, setCurrentIndex] = useState(0); // State untuk kontrol gambar carousel

    const images = [image1, image2, image3];

    const handleStartAudio = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.volume = 0.5;
            audioElement.play();
        }
        setShowModal(false);
        setShowCek(true); // Tampilkan elemen dengan class "cek"
    };

    // Fungsi untuk mengubah gambar setiap 9 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Ganti gambar setiap 9 detik
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="Background-imgs page-chalkduster">
            <video autoPlay muted loop id="bg-video">
                <source src={video1} type="video/mp4"></source>
            </video>
            <audio ref={audioRef} src={audio} loop />
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
                    <h1>13/12/24</h1>
                    <p>
                        It’s hard to put into words how much your presence has meant to me. You've been a source of light, laughter, and comfort, making even the ordinary moments extraordinary. I don’t know how I feel about you or how to describe it—I mean seriously, I don’t even know what place you hold in my life or what you truly mean to me, but thank you for coming into my life when I needed it most. This year was the saddest for me, and you came out of nowhere and brought joy back into my LIFE.....
                    </p>
                    <p>
                    <br></br>As our paths diverge, I want you to know how much I value every memory we've created together. Of course, this farewell is bittersweet, but I’ll put you in my core memory, forever cherishing the moments we shared. I really miss what we had—the moments, the laughter, and you.
                    </p>
                    <p>
                    <br></br>I know this might sound like I’m overreacting, but I’m being honest with you. Wherever life takes you, I hope it’s filled with endless joy, success, and love, because you truly deserve nothing less. Though we may be apart, I’ll always hold a special place for you in my heart. Farewell for now, and may our paths cross again someday, if god allow us...☺️
                    </p>
                    <p>
                    <br></br>*The content of this could change over time, until I get used to it like usual, but your memory is eternal in here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Indah;
