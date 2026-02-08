import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import LoveLetter from './LoveLetter';
import FloatingElements from './FloatingElements';
import RelationshipCounter from './RelationshipCounter';

const SuccessPage = () => {
    useEffect(() => {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="success-container">
            <FloatingElements />
            <div className="main-content">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <img src="/assets/5J2A1184.JPG" className="couple-pic" alt="Our Best Decision" />
                    <h1 className="title" style={{ fontSize: '4rem' }}>
                        You've made me the <br /><span>happiest person alive! ❤️</span>
                    </h1>
                    <p className="subtitle" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
                        To a lifetime of love, laughter, and <br />endless memories together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ fontSize: '4rem' }}
                >
                    🥰😘🌹
                </motion.div>

                <RelationshipCounter startDate="2023-04-04" /> {/* April 4, 2023 is exactly 1041 days before Feb 8, 2026 */}

                <LoveLetter />
            </div>


            <footer className="footer">
                Developed in love by <span>Teja Nayak</span> • Especially for you, <span>Pandu</span> ❤️
            </footer>
        </div>
    );
};

export default SuccessPage;
