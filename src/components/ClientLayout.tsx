'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { theme as baseTheme } from '@/theme/theme';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Create a new theme whenever mode changes
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

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar onThemeToggle={toggleTheme} />
            <main>{children}</main>
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
} 