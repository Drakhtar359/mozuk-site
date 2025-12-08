"use client";

import { useEffect, useRef } from "react";

/**
 * ConstellationCanvas - A mesmerizing, interactive particles background
 * Particles float slowly and connect with lines when close to each other or the mouse.
 */
export default function ConstellationCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let animationFrameId: number;

        const brandColor = "4, 168, 154"; // #04a89a converted to RGB

        // Particle Setup
        // Adjusted count for better performance on mobile vs desktop
        const particleCount = Math.min(Math.floor((width * height) / 15000), 100);

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                // Random velocity between -0.4 and 0.4 for smooth, slow float
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.size = Math.random() * 2 + 0.5; // Size 0.5 - 2.5
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${brandColor}, 0.5)`;
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Mouse Interaction
        const mouse = { x: -1000, y: -1000, radius: 150 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        // Animate Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and Draw Particles
            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            // Draw Connections
            // We do a nested loop, but check distance to save performance
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                // Connect to Mouse
                const dxMouse = mouse.x - p1.x;
                const dyMouse = mouse.y - p1.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouse.radius) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${brandColor}, ${1 - distMouse / mouse.radius})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();

                    // Subtle attraction to mouse (optional, feels more organic)
                    // p1.x += dxMouse * 0.01;
                    // p1.y += dyMouse * 0.01;
                }

                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const connectDistance = 120;

                    if (dist < connectDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${brandColor}, ${0.2 * (1 - dist / connectDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Resize Handle
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 bg-[#0a0a0a]"
            style={{ pointerEvents: "none" }} // Let clicks pass through to form
        />
    );
}
