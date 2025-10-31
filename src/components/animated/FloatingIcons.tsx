'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';
import { 
  SiJavascript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma
} from 'react-icons/si';

const icons = [
  { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: SiAngular, color: '#DD0031', name: 'Angular' },
  { Icon: SiVuedotjs, color: '#4FC08D', name: 'Vue.js' },
  { Icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { Icon: SiPython, color: '#3776AB', name: 'Python' },
  { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  { Icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
  { Icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  { Icon: SiGit, color: '#F05032', name: 'Git' },
  { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
  { Icon: SiFigma, color: '#F24E1E', name: 'Figma' }
];

const FloatingIcons = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {icons.map(({ Icon, color, name }, index) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 30 + 30;
        const delay = Math.random() * -30;
        const size = Math.random() * 25 + 15;

        return (
          <motion.div
            key={name}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              opacity: isDark ? 0.08 : 0.05,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon
              style={{
                width: size,
                height: size,
                color: color,
                filter: `blur(0.7px) ${isDark ? 'brightness(0.8)' : 'brightness(0.7)'}`,
              }}
              title={name}
            />
          </motion.div>
        );
      })}
    </Box>
  );
};

export default FloatingIcons; 