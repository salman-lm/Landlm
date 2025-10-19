import React, { useEffect, useRef } from 'react';

const App: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle animation effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles: { x: number, y: number, size: number, speedX: number, speedY: number }[] = [];

        const createParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: Math.random() * 0.4 - 0.2,
                    speedY: Math.random() * 0.4 - 0.2,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const particle of particles) {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
                if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;

                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-950 to-black animate-gradient-xy z-0"></div>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-1"></canvas>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="opacity-0 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider drop-shadow-[0_0_15px_rgba(74,144,226,0.5)]">
                        AILM<span className="text-blue-400">.</span>in
                    </h1>
                </div>

                <div className="opacity-0 animate-fade-in-up animation-delay-200">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 tracking-wide">
                        Under Maintenance
                    </h2>
                </div>

                <div className="opacity-0 animate-fade-in-up animation-delay-400">
                    <p className="max-w-2xl text-base md:text-lg text-gray-400">
                        We're currently enhancing our digital universe. Our engineers are forging a new, innovative experience. Something amazing is on the horizon.
                    </p>
                </div>
                
                <div className="opacity-0 animate-fade-in-up animation-delay-600 pt-4">
                     <p className="text-blue-300 text-lg font-semibold">
                        Thank you for your patience.
                    </p>
                </div>
            </div>
             <div className="absolute bottom-4 text-xs text-gray-600 z-10">
                &copy; {new Date().getFullYear()} AILM.in - All Rights Reserved.
            </div>
        </main>
    );
};

export default App;
