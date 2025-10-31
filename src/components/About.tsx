'use client';

import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FuturisticBackground from './animated/FuturisticBackground';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Tailwind CSS','Responsive','HTML','CSS','Bootstrap','Media Queries','Animation','React Spring'] },
    // { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'] },
    { category: 'Tools & Others', items: ['Github', 'Gitlab', 'vercel',] },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <FuturisticBackground variant="about" />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom 
                align="center" 
                color="primary"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: { xs: 3, md: 4 },
                  fontWeight: 600,
                }}
              >
                About Me
              </Typography>
            </MotionBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              sx={{ px: { xs: 0, md: 2 } }}
            >
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  color: 'text.primary',
                  textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                I am a passionate Front End Devloper with a strong foundation in both frontend and 
                My journey in software development has been driven by a desire to create meaningful and impactful applications 
                that solve real-world problems.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{
                  color: 'text.primary',
                  textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                With experience in modern web technologies and a keen eye for design, I strive to build 
                applications that are not only functional but also provide an exceptional user experience. 
                I am constantly learning and adapting to new technologies to stay at the forefront of web development.
              </Typography>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {skills.map((skillGroup, index) => (
                <Grid item xs={12} key={skillGroup.category}>
                  <MotionPaper
                    elevation={isDark ? 4 : 2}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                    viewport={{ once: true }}
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      background: isDark 
                        ? 'rgba(26, 32, 39, 0.7)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: 1,
                      borderColor: isDark 
                        ? 'rgba(144, 202, 249, 0.2)'
                        : 'rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      color="primary" 
                      gutterBottom
                      sx={{
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      }}
                    >
                      {skillGroup.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.75, sm: 1 } }}>
                      {skillGroup.items.map((skill) => (
                        <Typography
                          key={skill}
                          variant="body2"
                          component={motion.div}
                          whileHover={{ y: -2, scale: 1.03 }}
                          sx={{
                            color: isDark ? 'primary.light' : 'primary.main',
                            px: { xs: 1.5, sm: 2 },
                            py: { xs: 0.5, sm: 0.5 },
                            borderRadius: 1,
                            fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            transition: 'all 0.3s ease',
                            border: 1,
                            borderColor: isDark ? 'primary.light' : 'primary.main',
                            '&:hover': {
                              bgcolor: isDark ? 'primary.dark' : 'primary.light',
                              color: '#fff',
                              borderColor: 'transparent',
                            },
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 