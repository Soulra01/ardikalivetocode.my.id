import React, { useEffect, useState } from "react";
import audio from "./audio/indahbg.mp3";
import image1 from "./images/indah2.jpg";
import image2 from "./images/indah.jpg";
import image3 from "./images/indah1.jpg";
import video1 from "./images/Farewell2.mp4";
import axios from "axios";
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
    const [comments, setComments] = useState([]);
    const namenya = "Kunti Bogel";
    const images = [image1, image2, image3];

    const handleStartAudio = () => {
        const audioElement = document.getElementById("audio");
        if (audioElement) {
            audioElement.volume = 0.5;
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Ganti gambar setiap 5 detik
        return () => clearInterval(interval); // Bersihkan interval
    }, [images.length]);

    // Fetch comments from API
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get("http://localhost:5000/comments");
                const sortedComments = response.data.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateA - dateB; // Urutkan dari terbaru ke terlama
                });
                setComments(sortedComments);
            } catch (error) {
                // console.error('Error fetching comments', error);
            }
        };
        fetchComments();
    }, []);

    // Fungsi untuk format tanggal menjadi dd/mm/yy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
        const year = String(date.getFullYear()).slice(2); // Mengambil dua digit terakhir tahun
        return `${day}/${month}/${year}`;
    };

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
                        {timeElapsed.days} Days, {timeElapsed.hours} Hour,{" "}
                        {timeElapsed.minutes} Minute, {timeElapsed.seconds}{" "}
                        Seconds, since.....
                    </h4>
                    <h1>13/12/24</h1>
                    <br />
                    <p>
                        Dear {namenya},
                        <br />
                        &emsp; It’s hard to put into words how much your
                        presence has meant to me. You've been a source of light,
                        laughter, and comfort, making even the ordinary moments
                        extraordinary. I don’t know how I feel about you or how
                        to describe it—I mean seriously, I don’t even know what
                        place you hold in my life or what you truly mean to me,
                        but thank you for coming into my life when I needed it
                        most. This year was the saddest for me, and you came
                        out of nowhere and brought joy back into my LIFE.....
                    </p>
                    <p>
                        <br />
                        &emsp;As our paths diverge, I want you to know how much
                        I value every memory we've created together. Of course,
                        this farewell is bittersweet, but I’ll put you in my core
                        memory, forever cherishing the moments we shared. I
                        really miss what we had—the moments, the laughter, and
                        you.
                    </p>
                    <p>
                        <br />
                        &emsp;I know this might sound like I’m overreacting, but
                        I’m being honest with you. Wherever life takes you, I
                        hope it’s filled with endless joy, success, and love,
                        because you truly deserve nothing less. Though we may be
                        apart, I’ll always hold a special place for you in my
                        heart. Farewell for now, and may our paths cross again
                        someday, if god allow us...☺️
                    </p>
                    <p>
                        <br />
                        &emsp;Ohh yaa, i found some good quotes&ensp;
                        <em>
                            “we didn’t finish the year together, but every moment
                            with you was worth it"
                        </em>
                    </p>
                    <br />
                    <hr />
                    <br />
                    <div className="diary">
                        <h2>Diary</h2>
                        <p>
                            I don’t know what to write, but if I feel like it and
                            suddenly think or miss you, I’ll just write this.
                        </p>
                        <br />
                        <div className="diary-container">
                        <ul>
                            {comments.map((comment) => (
                                <p key={comment.id}>
                                    <h6>{formatDate(comment.created_at)}</h6>
                                    {comment.comment}
                                    <br />
                                    <br />
                                </p>
                                
                            ))}
                        </ul>
                        </div>
                    </div>
                    <hr />    
                    <p className="note">
                        <br />
                        *The content of this could change over time, until I get
                        used to it like usual, but your memory is eternal in
                        here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Indah;
