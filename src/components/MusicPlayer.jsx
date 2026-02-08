import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const attemptPlay = () => {
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        console.log("Autoplay blocked. Waiting for user interaction.");
                        setIsPlaying(false);
                    });
            }
        };

        // Attempt initial play
        attemptPlay();

        // Fallback: Start music on the very first user interaction anywhere on the document
        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                attemptPlay();
            }
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <audio
                ref={audioRef}
                src="/assets/vvspc - Made with Clipchamp.mp3" // A slightly more upbeat romantic track
                loop
                autoPlay
            />
            <motion.button
                className={`music-toggle ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? '🎵' : '🔇'}
                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            className="music-notes"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                                y: [-5, -15, -5]
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            💖
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
