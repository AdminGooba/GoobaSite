"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  color: "white" | "gold" | "blue";
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    let time = 0;
    let shootingStarTimer = 0;
    let nextShootingStarDelay = Math.random() * 250 + 180; // frames until next shooting star

    const NUM_STARS = 700;
    const WARP_SPEED = 0.15;
    const PARALLAX_STRENGTH = 55; // max px offset for nearest stars

    // ─── Init ────────────────────────────────────────────────────────────────

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < NUM_STARS; i++) {
        const rnd = Math.random();
        const color: Star["color"] =
          rnd > 0.92 ? "gold" : rnd > 0.83 ? "blue" : "white";
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          radius: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.5 + 0.5,
          color,
          twinkleSpeed: Math.random() * 0.025 + 0.006,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnShootingStar = () => {
      const angleDeg = Math.random() * 30 + 15; // 15–45° downward
      const angle = (angleDeg * Math.PI) / 180;
      const spd = Math.random() * 9 + 7;
      shootingStars.push({
        x: Math.random() * canvas.width * 1.1 - canvas.width * 0.05,
        y: Math.random() * canvas.height * 0.35,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        length: Math.random() * 130 + 90,
        life: 0,
        maxLife: Math.random() * 55 + 45,
      });
    };

    // ─── Draw helpers ────────────────────────────────────────────────────────

    const drawNebulae = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Purple / blue — top-left
      const n1 = ctx.createRadialGradient(
        W * 0.12, H * 0.18, 0,
        W * 0.12, H * 0.18, W * 0.38
      );
      n1.addColorStop(0, "rgba(70, 35, 115, 0.05)");
      n1.addColorStop(0.5, "rgba(35, 15, 75, 0.025)");
      n1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = n1;
      ctx.fillRect(0, 0, W, H);

      // Warm gold — top-right
      const n2 = ctx.createRadialGradient(
        W * 0.84, H * 0.12, 0,
        W * 0.84, H * 0.12, W * 0.3
      );
      n2.addColorStop(0, "rgba(110, 82, 35, 0.045)");
      n2.addColorStop(0.5, "rgba(70, 52, 18, 0.022)");
      n2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = n2;
      ctx.fillRect(0, 0, W, H);

      // Deep blue — bottom-center
      const n3 = ctx.createRadialGradient(
        W * 0.5, H * 0.78, 0,
        W * 0.5, H * 0.78, W * 0.42
      );
      n3.addColorStop(0, "rgba(18, 38, 95, 0.04)");
      n3.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = n3;
      ctx.fillRect(0, 0, W, H);
    };

    const drawStars = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (const star of stars) {
        star.z -= WARP_SPEED;

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - cx;
          star.y = Math.random() * canvas.height - cy;
          star.z = canvas.width;
        }

        const scale = canvas.width / star.z;
        const depth = 1 - star.z / canvas.width; // 0=far, 1=near

        const x = cx + star.x * scale;
        const y = cy + star.y * scale;

        if (x < -4 || x > canvas.width + 4 || y < -4 || y > canvas.height + 4) continue;

        // Twinkling
        const twinkle =
          0.72 + 0.28 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = depth * star.alpha * twinkle;

        const r = Math.max(0.25, star.radius * scale);

        // Soft glow halo for larger/nearer stars
        if (r > 1.1) {
          const haloR = r * 3.5;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, haloR);
          if (star.color === "gold") {
            glow.addColorStop(0, `rgba(212,195,163,${opacity * 0.55})`);
          } else if (star.color === "blue") {
            glow.addColorStop(0, `rgba(170,195,255,${opacity * 0.55})`);
          } else {
            glow.addColorStop(0, `rgba(255,255,255,${opacity * 0.45})`);
          }
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(x, y, haloR, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Star core
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        if (star.color === "gold") {
          ctx.fillStyle = `rgba(212,195,163,${opacity})`;
        } else if (star.color === "blue") {
          ctx.fillStyle = `rgba(170,195,255,${opacity})`;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        }
        ctx.fill();
      }
    };

    const drawShootingStars = () => {
      shootingStarTimer++;
      if (shootingStarTimer >= nextShootingStarDelay) {
        spawnShootingStar();
        shootingStarTimer = 0;
        nextShootingStarDelay = Math.random() * 250 + 180;
      }

      shootingStars = shootingStars.filter((s) => s.life < s.maxLife);

      for (const s of shootingStars) {
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const progress = s.life / s.maxLife;
        // Fade in quickly, fade out slowly
        const opacity =
          progress < 0.15
            ? progress / 0.15
            : 1 - (progress - 0.15) / 0.85;

        const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        const nx = s.vx / spd;
        const ny = s.vy / spd;
        const tailX = s.x - nx * s.length;
        const tailY = s.y - ny * s.length;

        // Gradient trail: transparent tail → gold mid → white tip
        const trail = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        trail.addColorStop(0, "rgba(255,255,255,0)");
        trail.addColorStop(0.55, `rgba(212,195,163,${opacity * 0.55})`);
        trail.addColorStop(1, `rgba(255,255,255,${opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.stroke();

        // Bright tip glow
        const tipGlow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 5);
        tipGlow.addColorStop(0, `rgba(255,255,255,${opacity * 0.95})`);
        tipGlow.addColorStop(0.4, `rgba(212,195,163,${opacity * 0.4})`);
        tipGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(s.x, s.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = tipGlow;
        ctx.fill();
      }
    };

    // ─── Render loop ─────────────────────────────────────────────────────────

    const render = () => {
      time++;

      // Background
      ctx.fillStyle = "#020202";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebulae();
      drawStars();
      drawShootingStars();

      animationFrameId = requestAnimationFrame(render);
    };

    // ─── Event listeners ─────────────────────────────────────────────────────

    window.addEventListener("resize", resize);
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-20"
      aria-hidden="true"
    />
  );
}
