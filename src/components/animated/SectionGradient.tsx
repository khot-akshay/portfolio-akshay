'use client';

import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';

interface SectionGradientProps {
  variant: 'hero' | 'about';
}

const SectionGradient = ({ variant }: SectionGradientProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const gradientConfigs = {
    hero: {
      colors: isDark
        ? [
            'linear-gradient(135deg, rgba(144, 202, 249, 0.2) 0%, rgba(66, 165, 245, 0.1) 100%)',
            'linear-gradient(135deg, rgba(129, 212, 250, 0.2) 0%, rgba(3, 169, 244, 0.1) 100%)',
          ]
        : [
            'linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(25, 118, 210, 0.1) 100%)',
            'linear-gradient(135deg, rgba(100, 181, 246, 0.2) 0%, rgba(30, 136, 229, 0.1) 100%)',
          ],
      animate: {
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.8, 0.6],
      },
    },
    about: {
      colors: isDark
        ? [
            'linear-gradient(225deg, rgba(244, 143, 177, 0.2) 0%, rgba(240, 98, 146, 0.1) 100%)',
            'linear-gradient(225deg, rgba(248, 187, 208, 0.2) 0%, rgba(236, 64, 122, 0.1) 100%)',
          ]
        : [
            'linear-gradient(225deg, rgba(245, 0, 87, 0.2) 0%, rgba(197, 17, 98, 0.1) 100%)',
            'linear-gradient(225deg, rgba(255, 64, 129, 0.2) 0%, rgba(216, 27, 96, 0.1) 100%)',
          ],
      animate: {
        x: [0, 20, 0],
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.7, 0.6],
      },
    },
  };

  const config = gradientConfigs[variant];

  return (
    <Box
      component={motion.div}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.6,
        backgroundSize: '200% 200%',
        background: config.colors[0],
        filter: 'url(#wave)',
        mixBlendMode: isDark ? 'hard-light' : 'soft-light',
      }}
      animate={config.animate}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="0" height="0">
        <filter id="wave">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.03"
            numOctaves="3"
            result="turbulence"
          >
            <animate
              attributeName="baseFrequency"
              dur="30s"
              values="0.01 0.03;0.02 0.05;0.01 0.03"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={isDark ? 25 : 20}
            result="displacement"
          />
        </filter>
      </svg>
    </Box>
  );
};

export default SectionGradient; 