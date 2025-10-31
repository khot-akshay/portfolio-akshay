'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
  Stack,
  Link,
} from '@mui/material';
import { Email, Phone, LocationOn, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import FuturisticBackground from './animated/FuturisticBackground';

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Contact Form Message*%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Subject: ${formData.subject}%0A
Message: ${formData.message}`;

    window.open(`https://wa.me/917972520011?text=${whatsappMessage}`, '_blank');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      content: 'avkhot497@gmail.com',
      link: 'mailto:avkhot497@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      content: '+91 7972520011',
      link: 'tel:+917972520011',
    },
    {
      icon: <LocationOn />,
      title: 'Address',
      content: 'Bibwewadi, Pune 411052',
      link: 'https://maps.app.goo.gl/6hLMBRy4vzrMnmzx6',
    },
    {
      icon: <WhatsApp />,
      title: 'WhatsApp',
      content: '+91 7972520011',
      link: 'https://wa.me/917972520011',
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FuturisticBackground variant="contact" />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Get in Touch 📬
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <Paper
                    key={info.title}
                    component={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    elevation={isDark ? 2 : 1}
                    sx={{
                      p: 2,
                      bgcolor: isDark ? 'background.paper' : 'background.default',
                      borderRadius: 2,
                      border: 1,
                      borderColor: isDark 
                        ? 'rgba(144, 202, 249, 0.2)'
                        : 'rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(10px)',
                      background: isDark 
                        ? 'rgba(26, 32, 39, 0.7)'
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <Link
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{ color: 'inherit' }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {info.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.content}
                          </Typography>
                        </Box>
                      </Stack>
                    </Link>
                  </Paper>
                ))}
              </Stack>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper
                component={motion.form}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                elevation={isDark ? 2 : 1}
                sx={{
                  p: 4,
                  bgcolor: isDark ? 'background.paper' : 'background.default',
                  borderRadius: 2,
                  border: 1,
                  borderColor: isDark 
                    ? 'rgba(144, 202, 249, 0.2)'
                    : 'rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  background: isDark 
                    ? 'rgba(26, 32, 39, 0.7)'
                    : 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<WhatsApp />}
                      sx={{ mt: 2 }}
                    >
                      Send Message via WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 