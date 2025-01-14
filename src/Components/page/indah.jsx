import React, { useEffect, useState } from "react";
import audio from "./audio/bgindah2.mp3";
import image1 from "./images/indah2.jpg";
import image2 from "./images/indah.jpg";
import image3 from "./images/indah1.jpg";
import video1 from "./images/Farewell2.mp4";
import "../../Styles/indah.css";

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
    const namenya = "Kunti Bogel";
    const images = [image1, image2, image3];

    const handleStartAudio = () => {
        const audioElement = document.getElementById("audio");
        if (audioElement) {
            audioElement.volume = 0.08;
            audioElement.play();
        }
        setShowModal(false);
        setShowCek(true);
    };

    // Logika penghitungan waktu yang sudah berlalu
    useEffect(() => {
        const calculateTimeElapsed = () => {
            const targetDate = new Date(2024, 11, 13); // Tanggal 13 Desember 2024
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

    const [fade, setFade] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Mulai efek fade-out

            // Setelah efek fade-out selesai (1 detik), ganti gambar
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Mulai efek fade-in
            }, 1000); // Tunggu 1 detik untuk fade-out selesai
        }, 4000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval); // Bersihkan interval saat komponen dibersihkan
    }, [images.length]);

    return (
        <div className="Background-imgs page-chalkduster">
            <video autoPlay muted loop id="bg-video">
                <source src={video1} type="video/mp4" />
            </video>
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
                <div className="image-container">
                    <img
                        src={images[currentIndex]}
                        alt="Slide"
                        className={`mySlides ${fade ? "show" : ""}`}
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="pesan">
                    {/* Menampilkan waktu yang telah berlalu */}
                    <h4 id="elapsed-time">
                        {timeElapsed.days} Days, {timeElapsed.hours} Hour, {timeElapsed.minutes} Minute, {timeElapsed.seconds} Seconds, since.....
                    </h4>
                    <h1>13/12/24</h1>
                    <br />
                    <p>
                        Dear {namenya},
                        <br />
                        &emsp; It’s hard to put into words how much your presence has
                        meant to me. You've been a source of light, laughter,
                        and comfort, making even the ordinary moments
                        extraordinary. I don’t know how I feel about you or how
                        to describe it—I mean seriously, I don’t even know what
                        place you hold in my life or what you truly mean to me,
                        but thank you for coming into my life when I needed it
                        most. This year was the saddest for me, and you came
                        out of nowhere and brought joy back into my LIFE.....
                    </p>
                    <p>
                        <br></br>&emsp;As our paths diverge, I want you to know how
                        much I value every memory we've created together. Of
                        course, this farewell is bittersweet, but I’ll put you
                        in my core memory, forever cherishing the moments we
                        shared. I really miss what we had—the moments, the
                        laughter, and you.
                    </p>
                    <p>
                        <br></br>&emsp;I know this might sound like I’m overreacting,
                        but I’m being honest with you. Wherever life takes you,
                        I hope it’s filled with endless joy, success, and love,
                        because you truly deserve nothing less. Though we may
                        be apart, I’ll always hold a special place for you in
                        my heart. Farewell for now, and may our paths cross
                        again someday, if god allow us...☺️
                    </p>
                    <p>
                        <br />&emsp;Ohh yaa, i found some good quotes&ensp;<em> “we didn’t finish the year together, but ever moments with you was worth it"</em>
                    </p>
                    <br />
                    <hr />
                    <br />
                        <div className="diary">
                            <h2>Diary</h2>
                            <p>I don’t know what to write, but if I feel like it and suddenly think or miss of you, I’ll just write this.</p>
                        </div>
                    <br /><p><h6>30/12/24</h6>How's your day? Though, honestly, it should be fine, right? Hahaha...</p>
                    <br /><p><h6>01/01/25</h6>Happy New Year. Banyak banget yang mau gw ceritain akhir2 ini, pengen sih ketemu buat ngobrol-ngobrol kaya kemarin, cuman waktunya kayanya ga pas mulu dehh wkwkwk</p>
                    <br /><p><h6>02/01/25</h6>Hello, i dont know hows ur day, maybe kinda busy and u miss someone, may allah give her a better place 🙏</p>
                    <br /><p><h6>03/01/25</h6>So today, I promise that if you read 5 books, I’ll give you a book, right? Okay then, let’s do it!🥱</p>
                    <br /><p><h6>04/01/25</h6>If I’m correct, I’ve read a book and remember this quote: &ensp;<em>"I hope my prayers can hug you when my arms can’t."</em> &ensp; but I forgot which book it was. I’ll look for it later, hehe. The meaning is that even when you’re feeling down and sad, there’s still someone praying for you. And I’ll be one of them for your good. Ganbatte! 🙈</p>
                    <br /><p><h6>05/01/25</h6>I’ve got that quote, it turns out it’s from Wattpad. Pardon me, actually 😮‍💨</p>
                    <br /><p><h6>09/01/25</h6>Hey, how are you? I hope you’re good. Damn, it’s so quiet—you’re not texting me, so it feels lonely, haha. I mean, yeah, it’s just like that...quiet, you know?🙂</p>
                    <br />
                    <hr />
                    <p className="note">
                        <br></br>*The content of this could change over time,
                        until I get used to it like usual, but your memory is
                        eternal in here.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Indah;
