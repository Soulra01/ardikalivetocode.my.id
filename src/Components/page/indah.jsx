import React, { useRef, useState } from "react";
import audio from "./audio/bgsound.mp3";
import "../../Styles/indah.css";

const Indah = () => {
    const audioRef = useRef(null);
    const [showModal, setShowModal] = useState(true);
    const [showCek, setShowCek] = useState(false); // State untuk kontrol visibilitas cek

    const handleStartAudio = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.volume = 0.5;
            audioElement.play();
        }
        setShowModal(false);
        setShowCek(true); // Tampilkan elemen dengan class "cek"
    };

    return (
        <div className="Background-img page-chalkduster">
            <audio ref={audioRef} src={audio} loop />
            {showModal && (
                <div className="modal">
                    <p>ready?</p>
                    <button onClick={handleStartAudio}>Ya</button>
                </div>
            )}
            <div className={`cek ${showCek ? "show" : ""}`}>
                <div className="pesan">
                    <p>It’s hard to put into words how much your presence has meant to me. You've been a source of light, laughter, and comfort, making even the ordinary moments extraordinary. I don’t know how I feel about you or how to describe it, but thank you for coming into my life when I needed it most. This year was the saddest for me, and you came out of nowhere and brought joy back into my world. As our paths diverge, I want you to know how much I value every memory we've created together. Of course, this farewell is bittersweet, but I’ll put you in my core memory, forever cherishing the moments we shared. I really miss what we had—the moments, the laughter, and you.I know this might sound like I’m overreacting, but I’m being honest with you. Wherever life takes you, I hope it’s filled with endless joy, success, and love, because you truly deserve nothing less. Though we may be apart, I’ll always hold a special place for you in my heart. Farewell for now, and may our paths cross again someday.</p>
                </div>
            </div>
        </div>
    );
};

export default Indah;
