import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';

const ValentineHome = () => {
    const navigate = useNavigate();
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
        const y = Math.random() * (window.innerHeight - 200) - (window.innerHeight / 2 - 100);
        setNoButtonPos({ x, y });
    };

    return (
        <div className="container">
            <FloatingElements />

            <div className="main-content">
                <motion.img
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/assets/niharika.jpeg"
                    className="profile-pic"
                    alt="Niharika"
                />

                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="title"
                >
                    To the girl who makes my world spin, <br />Niharika (Pandu)... ❤️<br />
                    <span>Will you be my Valentine?</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="subtitle"
                >
                    Every 'Yes' starts a new story.<br />(I know your heart is saying yes! 🤭)
                </motion.p>

                <div className="button-container">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-yes"
                        onClick={() => navigate('/success')}
                    >
                        Yes
                    </motion.button>

                    <motion.button
                        className="btn btn-no"
                        animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                        onHoverStart={moveButton}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        No
                    </motion.button>
                </div>
            </div>

            <footer className="footer">
                Developed in love by <span>Teja Nayak</span> • Especially for you, <span>Pandu</span> ❤️
            </footer>
        </div>
    );
};

export default ValentineHome;
