'use client';

import { Box, Container, Typography, IconButton, useTheme, Stack, Button } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com/sainath-jalanila', label: 'GitHub' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/in/sainath-jalanila', label: 'LinkedIn' },
    { icon: <Twitter />, href: 'https://twitter.com/sainathjalnila', label: 'Twitter' },
    { icon: <Email />, href: 'mailto:saijalanila7070@gmail.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: isDark ? 'background.paper' : 'grey.50',
        borderTop: 1,
        borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'grey.200',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Akshay Khot{' '}
            <Box component="span" sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
              👨‍💻
            </Box>
          </Typography>

          {/* <Stack
            direction="row"
            spacing={1}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <Button
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  minWidth: 'auto',
                  p: 1,
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: isDark ? 'rgba(144, 202, 249, 0.08)' : 'rgba(33, 150, 243, 0.08)',
                  },
                }}
              >
                {link.icon}
              </Button>
            ))}
          </Stack> */}

          <Typography
            variant="body2"
            color="text.secondary"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            © {new Date().getFullYear()} Akshay Khot ⚡. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 