import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RelationshipCounter = ({ startDate = "2024-02-14" }) => {
    const [timePassed, setTimePassed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const start = new Date(startDate);

        const updateCounter = () => {
            const now = new Date();
            const difference = now.getTime() - start.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimePassed({ days, hours, minutes, seconds });
        };

        const interval = setInterval(updateCounter, 1000);
        updateCounter();

        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="counter-container"
        >
            <h2 className="counter-title">Cherishing every second since we met... ✨</h2>
            <div className="time-grid">
                <div className="time-item">
                    <span className="time-value">{timePassed.days}</span>
                    <span className="time-label">Days</span>
                </div>
                <div className="time-item">
                    <span className="time-value">{timePassed.hours}</span>
                    <span className="time-label">Hours</span>
                </div>
                <div className="time-item">
                    <span className="time-value">{timePassed.minutes}</span>
                    <span className="time-label">Mins</span>
                </div>
                <div className="time-item">
                    <span className="time-value">{timePassed.seconds}</span>
                    <span className="time-label">Secs</span>
                </div>
            </div>
        </motion.div>
    );
};

export default RelationshipCounter;
