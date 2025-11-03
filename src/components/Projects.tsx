'use client';

import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import FuturisticBackground from './animated/FuturisticBackground';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
 
  {
    title: 'My IQchecker',
    description: ' Designed and developed the frontend of a live platform using NextJS, creating responsive interfaces for Admin, Organization, Individual, and Employee panels. Designed intuitive user interfaces and ensured seamless user experience, across device. Integrated features to enable users to take accurate IQ Test. providing detailed insights, instant results, and cognitive skill enhancement. collaboration',
    image: '/myiqchecker.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://myiqchecker.com',
  },

  {
    title: 'Villa Booking System',
description:'Built a full-featured online booking platform for sports turfs and villas using TypeScript, Next.js, React.js, Redux, Tailwind CSS, Material UI, and Bootstrap, integrated Razorpay for secure payments, implemented real-time availability, booking calendar, user authentication, and admin dashboard, deployed on Vercel with GitLab CI/CD.',
 image: '/villa.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://skygramstays.in',
  },
  {
    title: 'Meganotify',
    description: 'Front End Devloper e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard. Features include user authentication, product search, and order tracking.',
    image: '/meganotify.png',
    technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
    live: 'https://meganotify.com',
  },
   
  //  {
  //   title: 'Crunchy Bite',
  //   description: 'Handled Next.js development for Crunchy Bite, incorporating animations and designing a fully responsive layout.',
  //   image: '/crunchy-bite.png',
  //   technologies: ['Next.js', 'TypeScript','Redux','Material-UI','Responsive'],
  //   live: 'https://crunchy-bite.vercel.app/',
  // },
   {
    title: 'NeuroERP Website',
description : 'Developed the official NeuroERP marketing website using Next.js and Tailwind CSS, ensuring a modern, responsive, and fast user experience. Designed and implemented SEO-optimized landing pages to showcase ERP features and pricing. Built reusable UI components and implemented SSR for better SEO and performance. Integrated animations with Framer Motion, optimized images for speed, and deployed via Vercel with CI/CD. Collaborated with design and marketing teams to deliver a polished, production-ready website.',
    image: '/neurerp.png',
    technologies: ['Next.js', 'TypeScript',' Tailwind CSS','Responsive'],
    live: 'https://neuroerp.com',
  },
   {
    title: 'Vivan Groop Warehouse Website',
description:"Built and deployed a modern, responsive website for Vedanta Warehouse using Next.js, Tailwind CSS, and Supabase, hosted on Vercel. The platform includes dynamic pages for company projects, EPC solutions, and contact information. Integrated Contact and Career forms with a Supabase backend for secure and real-time data handling. Ensured seamless user experience through SEO optimization, fast load times, and cross-device responsiveness. Designed reusable components and maintained clean, modular code to support future scalability and easy maintenance.",  
  image: '/vivan.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://vedanta-warehouse-website.vercel.app/',
  },
  // {
  //   title: 'AI Task Manager',
  //   description: 'Smart task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide productivity insights. Includes natural language processing for task input.',
  //   image: '/images/taskmanager.jpg',
  //   technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'React'],
  //   github: 'https://github.com/yourusername/ai-taskmanager',
  //   live: 'https://your-taskmanager.com',
  // },
  // Add more projects as needed
];

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <FuturisticBackground variant="projects" />
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center" color="primary">
            Projects
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
            }}
          >
            Here are some of my recent projects that showcase my skills and experience
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: isDark 
                    ? 'rgba(26, 32, 39, 0.7)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: 1,
                  borderColor: isDark 
                    ? 'rgba(144, 202, 249, 0.2)'
                    : 'rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDark 
                      ? '0 4px 12px rgba(144, 202, 249, 0.2)'
                      : '0 4px 12px rgba(33, 150, 243, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottom: 1,
                    borderColor: isDark 
                      ? 'rgba(144, 202, 249, 0.2)'
                      : 'rgba(0, 0, 0, 0.1)',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom 
                    color="primary"
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{
                      mb: 2,
                      fontSize: { xs: '0.875rem', sm: '0.875rem' },
                      textShadow: isDark ? '0 0 20px rgba(144, 202, 249, 0.2)' : 'none',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        component={motion.div}
                        whileHover={{ y: -2, scale: 1.05 }}
                        sx={{
                          bgcolor: 'transparent',
                          color: isDark ? 'primary.light' : 'primary.main',
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          fontSize: '0.7rem',
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
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: { xs: 1.5, sm: 2 }, pt: 0 }}>
                
                  <Button
                    component="a"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<BsGlobe />}
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ 
                      fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 