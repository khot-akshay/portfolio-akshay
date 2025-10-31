'use client';

import { IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { BsSun, BsMoonStars } from "react-icons/bs";

interface ThemeToggleProps {
  onToggle: () => void;
}

const ThemeToggle = ({ onToggle }: ThemeToggleProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <IconButton
      onClick={onToggle}
      color="inherit"
      sx={{
        position: 'relative',
        width: 40,
        height: 40,
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: isDark 
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: [1, 0.8, 1],
          rotate: isDark ? 0 : 180,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      >
        {isDark ? (
          <BsSun size={18} />
        ) : (
          <BsMoonStars size={18} />
        )}
      </motion.div>
    </IconButton>
  );
};

export default ThemeToggle; 