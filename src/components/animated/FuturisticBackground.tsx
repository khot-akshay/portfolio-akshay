'use client';

import { Box, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  variant?: 'hero' | 'about' | 'projects' | 'contact';
}

const FuturisticBackground = ({ variant = 'hero' }: FuturisticBackgroundProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = variant === 'hero' ? 40 : 25;
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number = 0;
      y: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = '';
      size: number = 1;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        
        const baseOpacity = variant === 'hero' ? 0.4 : 0.3;
        const opacity = Math.random() * baseOpacity + 0.1;
        
        this.color = isDark 
          ? `rgba(82, 109, 230, ${opacity})`
          : `rgba(25, 118, 210, ${opacity})`;
        
        this.size = Math.random() * 1.2 + 0.3;
      }

      update() {
        if (!canvas) return;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 160) {
          this.speedX += dx * 0.00005;
          this.speedY += dy * 0.00005;
        }

        this.speedX *= 0.98;
        this.speedY *= 0.98;
        
        this.speedX = Math.max(Math.min(this.speedX, 0.3), -0.3);
        this.speedY = Math.max(Math.min(this.speedY, 0.3), -0.3);
        
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function createParticles() {
      const baseCount = variant === 'hero' ? 40 : 25;
      for (let i = 0; i < baseCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      if (!ctx) return;
      
      particles.forEach((particle, i) => {
        const closest = particles
          .slice(i + 1)
          .map((other, j) => {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return { distance, index: j + i + 1 };
          })
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 3);

        closest.forEach(({ distance, index }) => {
          const maxDistance = variant === 'hero' ? 180 : 150;
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const lineOpacity = variant === 'hero' ? opacity * 0.3 : opacity * 0.2;
            
            const time = Date.now() * 0.0005;
            const movement = Math.sin(time + i * 0.1) * 1.5;
            
            ctx.beginPath();
            ctx.strokeStyle = isDark 
              ? `rgba(82, 109, 230, ${lineOpacity})`
              : `rgba(25, 118, 210, ${lineOpacity})`;
            ctx.lineWidth = (variant === 'hero' ? 0.6 : 0.4) + movement * 0.05;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[index].x, particles[index].y);
            ctx.stroke();
          }
        });
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark, variant]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        opacity: variant === 'hero' ? 0.35 : 0.2,
        background: theme.palette.mode === 'dark'
          ? theme.palette.background.default
          : '#ffffff',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default FuturisticBackground; 