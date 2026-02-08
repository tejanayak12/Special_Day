import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UniverseFinale = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`,
            duration: `${Math.random() * 3 + 2}s`,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="universe-container">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        '--duration': star.duration
                    }}
                />
            ))}

            <motion.div
                className="final-message"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
            >
                <motion.h1
                    animate={{
                        scale: [1, 1.1, 1],
                        textShadow: [
                            "0 0 20px #ff4d6d",
                            "0 0 40px #ff4d6d",
                            "0 0 20px #ff4d6d"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    I Love U Niharika Babe
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Lots Of Love for u ❤️
                </motion.p>
            </motion.div>
        </div>
    );
};

export default UniverseFinale;
