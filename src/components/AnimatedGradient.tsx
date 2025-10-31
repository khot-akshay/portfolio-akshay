'use client';

import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const colors = [
  'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  'linear-gradient(45deg, #4A90E2, #50E3C2)',
  'linear-gradient(45deg, #B06AB3, #4568DC)',
  'linear-gradient(45deg, #FF512F, #DD2476)',
];

const AnimatedGradient = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component={motion.div}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.15,
      }}
      animate={{
        background: colors[currentColorIndex],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    />
  );
};

export default AnimatedGradient; 