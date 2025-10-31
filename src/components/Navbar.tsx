'use client';

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onThemeToggle: () => void;
}

const Navbar = ({ onThemeToggle }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      component={motion.nav}
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        background: trigger
          ? theme.palette.background.default
          : 'transparent',
        backdropFilter: trigger ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          }}
        >
          <Link
            href="#home"
            variant="h6"
            color="inherit"
            underline="none"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Akshay Khot
          </Link>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                color="inherit"
                underline="none"
                sx={{
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            background: theme.palette.background.default,
            backgroundImage: 'none',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  px: 4,
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 