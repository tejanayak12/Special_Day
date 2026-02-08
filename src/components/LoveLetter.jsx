import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveLetter = ({ onTriggerFinale }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    const handleToggle = () => {
        if (!isOpen) {
            setIsOpen(true);
            setHasOpened(true);
        } else {
            setIsOpen(false);
            if (hasOpened) {
                onTriggerFinale();
            }
        }
    };

    const letterVariants = {
        closed: { scale: 1, rotate: 0 },
        open: { scale: 1.05, rotate: 0 },
    };

    const paperVariants = {
        closed: { y: 0, opacity: 0, scale: 0.8 },
        open: { y: -420, opacity: 1, scale: 1 },
    };

    return (
        <div className="love-letter-container">
            <motion.div
                className="envelope-wrapper"
                onClick={handleToggle}
                variants={letterVariants}
                animate={isOpen ? "open" : "closed"}
                whileHover={{ scale: 1.1 }}
            >
                <div className={`envelope ${isOpen ? 'open' : ''}`}>
                    <div className="flap"></div>
                    <div className="pocket"></div>
                    <div className="letter-preview">
                        <span className="heart-seal">❤️</span>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="paper"
                            variants={paperVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            <div className="letter-content">
                                <h3>My Dearest Niharika,</h3>
                                <p>
                                    From the moment I met you, my life changed in ways I never imagined.
                                    You are the smile that lights up my day and the peace in my heart.
                                    Words can't describe how much you mean to me, but I hope this little
                                    surprise shows you even a fraction of the love I have for you.
                                </p>
                                <p>
                                    I promise to cherish every moment we spend together and to always
                                    be by your side, through all the ups and downs.
                                    Thank you for being you, Pandu.
                                </p>
                                <div className="sender">With all my love, <br /><span>Teja</span></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <p className="click-hint">{isOpen ? "Close for now" : "Wait, I have one more secret for you... ✉️"}</p>
        </div>
    );
};

export default LoveLetter;
