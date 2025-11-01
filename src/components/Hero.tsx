'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { GitHub, LinkedIn, Download, Send } from '@mui/icons-material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionBox, MotionTypography, MotionStack } from './animated/MotionComponents';
import FuturisticBackground from './animated/FuturisticBackground';
import TypeWriter from './animated/TypeWriter';

const       Hero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const roleVariants = [
    "Creating User Experiences",
    "Developing Solutions",
    "Front End Devloper",
    "Frontend Specialist",
    "UI/UX Developer",
    "Problem Solver",
  ];

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, sm: 10, md: 12 },
      }}
    >
      <FuturisticBackground variant="hero" />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: 4,
            py: { xs: 6, sm: 8 },
          }}
        >
          {/* Text Content */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                mb: 1,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Hello, I am
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 700,
                  color: isDark ? '#fff' : 'text.primary',
                  lineHeight: 1.2,
                  mb: { xs: 1, sm: 2 },
                }}
              >
                Akshay Khot{' '}
              
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <TypeWriter
                phrases={roleVariants}
                variant="h2"
                delay={0.5}
                typingSpeed={80}
                backspaceSpeed={40}
                backspaceDelay={1500}
                loop={true}
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'text.secondary',
                  lineHeight: 1.2,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              />
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.5 }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '600px',
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.7,
                  textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
                }}
              >
                Passionate about creating innovative web solutions with modern technologies.
                Specializing in building responsive, user-friendly applications with clean code and optimal performance.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <MotionStack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                href="/Akshay-Khot Resume.pdf"
                download
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Send />}
                href="tel:+917972520011"
              >
                Contact Me
              </Button>
            </MotionStack>

            {/* Social Links */}
            <MotionStack
              direction="row"
              spacing={2}
              sx={{ mt: 4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2 }}
            >
              {/* <IconLink href="https://github.com/Harshali-k" icon={<GitHub />} /> */}
              <IconLink href="https://www.linkedin.com/in/akshay-khot-7a154a287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<LinkedIn />} />
            </MotionStack>
          </MotionBox>

          {/* Profile Image */}
          <MotionBox
            sx={{
              position: 'relative',
              width: { xs: '280px', sm: '320px', md: '400px' },
              height: { xs: '280px', sm: '320px', md: '400px' },
              margin: '0 auto',
              '& svg': {
                width: '100%',
                height: '100%',
              },
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 4.4 }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
                opacity: 0.2,
                filter: 'blur(40px)',
              }}
            />
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' preserveAspectRatio='xMidYMid meet'%3E%3Cstyle%3E.float%7Banimation:float 6s ease-in-out infinite%7D@keyframes float%7B0%25,100%25%7Btransform:translateY(0)%7D50%25%7Btransform:translateY(-20px)%7D%7D%3C/style%3E%3Cg class='float'%3E%3C!-- Background Circles --%3E%3Ccircle cx='250' cy='250' r='200' fill='%233f51b5' opacity='.1'/%3E%3Ccircle cx='250' cy='250' r='150' fill='%23f50057' opacity='.1'/%3E%3C!-- Code Window --%3E%3Crect x='150' y='150' width='200' height='160' rx='8' fill='%23282c34' opacity='0.9'/%3E%3C!-- Window Controls --%3E%3Ccircle cx='170' cy='170' r='4' fill='%23ff5f56'/%3E%3Ccircle cx='190' cy='170' r='4' fill='%23ffbd2e'/%3E%3Ccircle cx='210' cy='170' r='4' fill='%2327c93f'/%3E%3C!-- Code Lines --%3E%3Cg fill='none' stroke-linecap='round'%3E%3Cpath stroke='%2361dafb' stroke-width='3' d='M170 200 L190 200 L210 220 L190 240 L170 240'/%3E%3Cpath stroke='%23f50057' stroke-width='3' d='M230 200 L250 240'/%3E%3Cpath stroke='%2361dafb' stroke-width='3' d='M270 200 L290 200 L310 220 L290 240 L270 240'/%3E%3C/g%3E%3C!-- Floating Elements --%3E%3Cg opacity='0.7'%3E%3Ccircle cx='150' cy='300' r='8' fill='%23f50057'/%3E%3Crect x='330' y='180' width='16' height='16' rx='2' fill='%233f51b5' transform='rotate(45 338 188)'/%3E%3Cpath d='M120 180 L130 190 L120 200' stroke='%2361dafb' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
              alt="Developer Illustration"
              fill
              sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 400px"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
              }}
              priority
            />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

function IconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="text"
      color="inherit"
      sx={{
        minWidth: 'auto',
        p: 1,
        '&:hover': {
          color: 'primary.main',
        },
      }}
    >
      {icon}
    </Button>
  );
}

export default Hero; 