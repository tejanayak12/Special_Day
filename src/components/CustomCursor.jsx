import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newPos = { x: e.clientX, y: e.clientY };
            setMousePos(newPos);

            // Add a new particle to the trail
            const newParticle = {
                id: Date.now() + Math.random(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 15 + 10,
                rotation: Math.random() * 360,
            };

            setTrail((prev) => [...prev.slice(-15), newParticle]); // Keep last 15 particles
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Clean up trail particles over time
    useEffect(() => {
        const timer = setInterval(() => {
            setTrail((prev) => prev.slice(1));
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {trail.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 0.8, scale: 1, x: particle.x - 5, y: particle.y - 5 }}
                        animate={{ opacity: 0, scale: 0, y: particle.y - 50 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="trail-particle"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            pointerEvents: 'none',
                            zIndex: 9998,
                            fontSize: `${particle.size}px`,
                            transform: `rotate(${particle.rotation}deg)`,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>

            <motion.div
                className="custom-cursor"
                animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
                transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
            >
                ❤️
            </motion.div>
        </>
    );
};

export default CustomCursor;
