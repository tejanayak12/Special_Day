import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingElements = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const types = ['❤️', '🌹', '💖', '✨'];
            const type = types[Math.floor(Math.random() * types.length)];

            const newElement = {
                id: Math.random(),
                left: Math.random() * 100,
                size: Math.random() * 20 + 15,
                type: type,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 2
            };

            setElements(prev => [...prev.slice(-25), newElement]);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-container">
            <AnimatePresence>
                {elements.map(el => (
                    <motion.div
                        key={el.id}
                        initial={{ y: '110vh', x: 0, opacity: 0, rotate: 0 }}
                        animate={{
                            y: '-20vh',
                            x: [0, Math.random() * 100 - 50, 0],
                            opacity: [0, 0.6, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: el.duration,
                            ease: "easeInOut",
                            delay: el.delay
                        }}
                        className="floating-item"
                        style={{
                            left: `${el.left}%`,
                            fontSize: `${el.size}px`,
                            position: 'fixed'
                        }}
                    >
                        {el.type}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingElements;
