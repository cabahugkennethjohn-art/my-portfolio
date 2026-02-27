import React, { useRef, useEffect } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Configuration for the particle network
    const config = {
      particleCount: 500, // Very high density
      particleSpeed: 0.3,
      linkDistance: 280,
      particleColor: 'rgba(242, 186, 73, 0.7)',
      linkColor: 'rgba(242, 186, 73, ',
    };

    // Set canvas to full DOCUMENT height (not just window height)
    const resizeCanvas = () => {
      // Get the full height of the scrollable document body
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
      );
      
      canvas.width = window.innerWidth;
      canvas.height = documentHeight;
    };
    
    // Resize immediately and on window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Also re-measure after a small delay in case fonts/images change the document height on load
    setTimeout(resizeCanvas, 500);

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.particleSpeed;
        this.vy = (Math.random() - 0.5) * config.particleSpeed;
        this.radius = Math.random() * 1.5 + 0.5;
        // Assign a random shape type: 0 = circle, 1 = square, 2 = triangle
        this.shapeType = Math.floor(Math.random() * 3);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = config.particleColor;
        
        if (this.shapeType === 0) {
          // Circle
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        } else if (this.shapeType === 1) {
          // Square
          ctx.rect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        } else {
          // Triangle
          const side = this.radius * 2;
          const h = side * (Math.sqrt(3) / 2);
          ctx.moveTo(this.x, this.y - h / 2);
          ctx.lineTo(this.x - side / 2, this.y + h / 2);
          ctx.lineTo(this.x + side / 2, this.y + h / 2);
          ctx.closePath();
        }
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Draw lines between close particles
    const drawLinks = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.linkDistance) {
            const opacity = (1 - (distance / config.linkDistance)) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Thin, elegant lines for a more technical/realistic look
            ctx.strokeStyle = `${config.linkColor}${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    // Main animation loop
    const animate = () => {
      // Clear the canvas for the next frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw the connecting network lines
      drawLinks();

      // Loop continuously
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start everything
    initParticles();
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full z-[-1] bg-[#4a0404] overflow-hidden pointer-events-none">
      {/* Dark gradient overlay for depth over the background color */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0101]/80 via-[#4a0404]/50 to-[#800000]/80 z-0 pointer-events-none" />
      
      {/* The canvas that draws the animated network */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 z-10 block pointer-events-none"
      />
    </div>
  );
};

export default TechBackground;