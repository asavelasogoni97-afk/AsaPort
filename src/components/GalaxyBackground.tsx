'use client';

import { useEffect, useRef } from 'react';

export default function ITBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const binaryCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Main animated canvas
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

    resizeCanvas();

    function animate() {
      if (!ctx || !canvas) return;
      
      time += 0.02;
      
      // Clear with fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw tech grid
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + (time * 10) % gridSize, 0);
        ctx.lineTo(x + (time * 10) % gridSize, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + (time * 10) % gridSize);
        ctx.lineTo(canvas.width, y + (time * 10) % gridSize);
        ctx.stroke();
      }

      // Draw circuit-like connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        const x1 = (canvas.width / 20) * i + Math.sin(time + i) * 30;
        const y1 = canvas.height / 2 + Math.cos(time * 0.5 + i) * 100;
        const x2 = (canvas.width / 20) * (i + 1) + Math.sin(time + i + 1) * 30;
        const y2 = canvas.height / 2 + Math.cos(time * 0.5 + i + 1) * 100;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        // Draw nodes
        ctx.fillStyle = 'rgba(34, 197, 94, 0.6)';
        ctx.beginPath();
        ctx.arc(x1, y1, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Binary rain effect
    const binaryCanvas = binaryCanvasRef.current;
    if (binaryCanvas) {
      const binaryCtx = binaryCanvas.getContext('2d');
      if (binaryCtx) {
        binaryCanvas.width = window.innerWidth;
        binaryCanvas.height = window.innerHeight;
        
        const columns = Math.floor(binaryCanvas.width / 20);
        const drops: number[] = [];
        
        for (let i = 0; i < columns; i++) {
          drops[i] = Math.random() * -100;
        }

        const drawBinary = () => {
          if (!binaryCtx || !binaryCanvas) return;
          
          binaryCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          binaryCtx.fillRect(0, 0, binaryCanvas.width, binaryCanvas.height);
          
          binaryCtx.fillStyle = 'rgba(34, 197, 94, 0.3)';
          binaryCtx.font = '12px monospace';
          
          for (let i = 0; i < drops.length; i++) {
            const text = Math.random() > 0.5 ? '1' : '0';
            const x = i * 20;
            const y = drops[i] * 20;
            
            binaryCtx.fillText(text, x, y);
            
            if (y > binaryCanvas.height && Math.random() > 0.975) {
              drops[i] = 0;
            }
            drops[i]++;
          }
          
          requestAnimationFrame(drawBinary);
        };
        
        drawBinary();
      }
    }

    const handleResize = () => {
      resizeCanvas();
      if (binaryCanvasRef.current) {
        binaryCanvasRef.current.width = window.innerWidth;
        binaryCanvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Tech gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #0a1a0a 25%, #0a0a1a 50%, #001a2e 75%, #000000 100%)',
        }}
      />
      
      {/* Circuit board pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Animated tech orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4), transparent)',
          animation: 'orbFloat 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
          animation: 'orbFloat 15s ease-in-out infinite',
          animationDelay: '3s',
        }}
      />
      
      {/* Canvas for grid and circuits */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Binary rain canvas */}
      <canvas ref={binaryCanvasRef} className="absolute inset-0 opacity-30" />
    </div>
  );
}
