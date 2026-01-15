'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  hue: number;
}

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  type: 'triangle' | 'square' | 'hexagon';
}

export default function ITBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const shapesRef = useRef<Shape[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 2 + Math.random() * 4;
        const colors = [
          '#ec4899',
          '#a855f7',
          '#06b6d4',
          '#f0abfc',
        ];
        
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 2 + Math.random() * 1.5,
          size: 1 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          hue: Math.random() * 360,
        });
      }
    };

    const createShapes = (x: number, y: number) => {
      const types: Array<'triangle' | 'square' | 'hexagon'> = ['triangle', 'square', 'hexagon'];
      shapesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        size: 20 + Math.random() * 30,
        opacity: 0.3,
        type: types[Math.floor(Math.random() * types.length)],
      });
    };

    const drawParticle = (p: Particle) => {
      const alpha = (p.life / p.maxLife) * 0.8;
      ctx.fillStyle = p.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawShape = (s: Shape) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.globalAlpha = s.opacity;
      
      const colors = ['#ec4899', '#a855f7', '#06b6d4'];
      ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = ctx.strokeStyle;

      if (s.type === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -s.size / 2);
        ctx.lineTo(s.size / 2, s.size / 2);
        ctx.lineTo(-s.size / 2, s.size / 2);
        ctx.closePath();
      } else if (s.type === 'square') {
        ctx.strokeRect(-s.size / 2, -s.size / 2, s.size, s.size);
      } else {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * s.size;
          const y = Math.sin(angle) * s.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawWaveBackground = () => {
      for (let wave = 0; wave < 3; wave++) {
        const amplitude = 50 + wave * 20;
        const frequency = 0.005 + wave * 0.001;
        const speed = 0.3 + wave * 0.1;
        
        const hues = [310, 280, 200];
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + 
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.cos(time * 0.0003 + x * 0.0002) * (amplitude * 0.5);
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = `hsla(${hues[wave]}, 100%, 50%, 0.1)`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    };

    const drawMeshConnections = () => {
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.05)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(236, 72, 153, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    function animate() {
      if (!ctx || !canvas) return;
      
      time += 1;
      
      ctx.fillStyle = 'rgba(0, 0, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawWaveBackground();

      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1;
        p.life -= 1 / 60;
        p.vx *= 0.99;
        drawParticle(p);
      });

      drawMeshConnections();

      shapesRef.current = shapesRef.current.filter(s => s.opacity > 0);
      shapesRef.current.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;
        s.opacity -= 0.005;
        s.vy += 0.05;
        
        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;
        
        drawShape(s);
      });

      ctx.strokeStyle = 'rgba(236, 72, 153, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      if (Math.random() > 0.7) {
        createParticles(e.clientX, e.clientY, 3);
      }
      
      if (Math.random() > 0.95) {
        createShapes(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      createParticles(e.clientX, e.clientY, 15);
      createShapes(e.clientX, e.clientY);
    };

    resizeCanvas();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139, 65, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 120% 100% at 50% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #0a0015 25%, #001a33 50%, #0a0a20 75%, #000000 100%)
          `,
        }}
      />
      
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)',
          animation: 'orbFloat 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
          animation: 'orbFloat 25s ease-in-out infinite reverse',
        }}
      />
      
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
