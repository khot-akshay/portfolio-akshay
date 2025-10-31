'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { theme as baseTheme } from '@/theme/theme';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme) {
      setMode(savedTheme as 'light' | 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  const theme = createTheme({
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      mode,
      primary: {
        main: mode === 'dark' ? '#90CAF9' : '#1976D2',
      },
      background: {
        default: mode === 'dark' ? '#0A1929' : '#FFFFFF',
        paper: mode === 'dark' ? '#0A1929' : '#FFFFFF',
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onThemeToggle={toggleTheme} />
      {children}
      <Footer />
    </MuiThemeProvider>
  );
} 