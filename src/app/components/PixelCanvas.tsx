import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useTheme } from "./ThemeProvider";

interface TrailDot {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
}

interface AmbientParticle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  speed: number;
}

export function PixelCanvas() {
  const { isLightMode } = useTheme();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailDotsRef = useRef<TrailDot[]>([]);
  const ambientParticlesRef = useRef<AmbientParticle[]>([]);
  
  // Track mouse directly inside the component
  const mousePositionRef = useRef({ 
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, 
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 
  });
  const lastMousePosRef = useRef({ 
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, 
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 
  });
  
  const lastTrailAddTimeRef = useRef(0);
  const mousePathRef = useRef<Array<{ x: number; y: number }>>([]);
  const smoothedMouseRef = useRef({ 
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, 
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    
    // Check if mouse is active, initially set in middle
    mousePositionRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize ambient particles - increased density for desktop
    const particleCount = window.innerWidth > 768 ? 500 : 250;
    if (ambientParticlesRef.current.length === 0) {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ambientParticlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mousePosition = mousePositionRef.current;

      // Smooth mouse position with easing for flowing curves
      const smoothing = 0.15; // Lower = smoother, more lag
      smoothedMouseRef.current.x += (mousePosition.x - smoothedMouseRef.current.x) * smoothing;
      smoothedMouseRef.current.y += (mousePosition.y - smoothedMouseRef.current.y) * smoothing;

      // Calculate mouse velocity using smoothed position
      const dx = smoothedMouseRef.current.x - lastMousePosRef.current.x;
      const dy = smoothedMouseRef.current.y - lastMousePosRef.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // LAYER 1: Draw subtle gradient glow following mouse
      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        350
      );
      
      // Theme-aware gradient colors
      gradient.addColorStop(0, isLightMode ? 'rgba(0, 0, 0, 0.05)' : 'rgba(25, 173, 125, 0.15)');
      gradient.addColorStop(0.5, isLightMode ? 'rgba(0, 0, 0, 0.02)' : 'rgba(25, 173, 125, 0.08)');
      gradient.addColorStop(1, isLightMode ? 'rgba(0, 0, 0, 0)' : 'rgba(25, 173, 125, 0)');

      // Draw gradient glow as a circle around mouse
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 350, 0, Math.PI * 2);
      ctx.fill();

      // LAYER 2: Update and draw ambient particles (middle layer)
      ambientParticlesRef.current.forEach((particle) => {
        // Normal floating behavior
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Gentle bounds wrapping
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Subtle drift back toward base position
        const dxBase = particle.baseX - particle.x;
        const dyBase = particle.baseY - particle.y;
        particle.vx += dxBase * 0.0001;
        particle.vy += dyBase * 0.0001;

        // Attraction to mouse trail when moving
        if (velocity > 1) {
          const distToMouse = Math.sqrt(
            (particle.x - mousePosition.x) ** 2 + (particle.y - mousePosition.y) ** 2
          );

          if (distToMouse < 400) {
            const angle = Math.atan2(
              mousePosition.y - particle.y,
              mousePosition.x - particle.x
            );
            const force = (400 - distToMouse) / 400;
            particle.vx += Math.cos(angle) * force * 0.65;
            particle.vy += Math.sin(angle) * force * 0.65;
          }
        }

        // Damping - reduced for tighter clustering
        particle.vx *= 0.96;
        particle.vy *= 0.96;

        // Calculate distance to mouse for intensity
        const distToMouse = Math.sqrt(
          (particle.x - mousePosition.x) ** 2 + (particle.y - mousePosition.y) ** 2
        );
        const nearMouse = distToMouse < 250;
        const intensity = nearMouse ? 1 - distToMouse / 250 : 0;

        // Draw particle as pixel (square) instead of circle
        const pixelSize = particle.size * 3;
        ctx.fillStyle = isLightMode 
          ? `rgba(0, 0, 0, ${0.15 + intensity * 0.25})`
          : `rgba(60, 217, 163, ${0.3 + intensity * 0.4})`;
        ctx.fillRect(
          particle.x - pixelSize / 2,
          particle.y - pixelSize / 2,
          pixelSize,
          pixelSize
        );
      });

      // Add smoothed mouse position to path for uniform trail spacing
      const currentTime = Date.now();
      if (velocity > 0.3) {
        mousePathRef.current.push({ x: smoothedMouseRef.current.x, y: smoothedMouseRef.current.y });
        
        // Keep path limited to recent positions
        if (mousePathRef.current.length > 100) {
          mousePathRef.current.shift();
        }
      }

      // Add trail dots with uniform spacing using smoothed positions
      if (velocity > 0.3 && currentTime - lastTrailAddTimeRef.current > 16) {
        lastTrailAddTimeRef.current = currentTime;
        
        // Calculate total distance from last trail dot position
        if (trailDotsRef.current.length > 0) {
          const lastDot = trailDotsRef.current[trailDotsRef.current.length - 1];
          const distFromLast = Math.sqrt(
            (smoothedMouseRef.current.x - lastDot.x) ** 2 + (smoothedMouseRef.current.y - lastDot.y) ** 2
          );
          
          // Only add a dot if we've traveled at least 15 pixels
          const spacing = 15;
          if (distFromLast >= spacing) {
            const numDotsToAdd = Math.floor(distFromLast / spacing);
            
            for (let i = 1; i <= numDotsToAdd; i++) {
              const t = (i * spacing) / distFromLast;
              const x = lastDot.x + (smoothedMouseRef.current.x - lastDot.x) * t;
              const y = lastDot.y + (smoothedMouseRef.current.y - lastDot.y) * t;
              
              trailDotsRef.current.push({
                x,
                y,
                life: 1,
                maxLife: 1,
                size: 2.5,
              });
            }
          }
        } else {
          // First dot
          trailDotsRef.current.push({
            x: smoothedMouseRef.current.x,
            y: smoothedMouseRef.current.y,
            life: 1,
            maxLife: 1,
            size: 2.5,
          });
        }
      }

      // LAYER 3: Draw trail dots (top layer - always visible)
      trailDotsRef.current = trailDotsRef.current.filter((dot) => {
        dot.life -= 0.018;

        if (dot.life <= 0) return false;

        const alpha = dot.life;
        const pixelSize = dot.size * 2;

        // Draw trail pixel as square
        ctx.fillStyle = isLightMode
          ? `rgba(0, 0, 0, ${alpha * 0.5})`
          : `rgba(60, 217, 163, ${alpha * 0.8})`;
        ctx.fillRect(
          dot.x - pixelSize / 2,
          dot.y - pixelSize / 2,
          pixelSize,
          pixelSize
        );

        return true;
      });

      // Limit number of trail dots
      if (trailDotsRef.current.length > 250) {
        trailDotsRef.current = trailDotsRef.current.slice(-250);
      }

      lastMousePosRef.current = { x: smoothedMouseRef.current.x, y: smoothedMouseRef.current.y };
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize ambient particles on resize
      ambientParticlesRef.current = [];
      const particleCount = window.innerWidth > 768 ? 500 : 250;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ambientParticlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full transition-colors duration-500"
      style={{ background: isLightMode ? "#fdfbf7" : "#0b0f14" }}
    />
  );
}