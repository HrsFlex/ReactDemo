import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography } from '@mui/material';

function GameSection() {
    const handleClick = () => {
        alert("You clicked the button! HRS is indeed the best!");
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h4">Join the Fun!</Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Click Me!
                </Button>
            </motion.div>
        </div>
    );
}

export default GameSection;

