import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/hero_center_transparent.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('ARAVIND P');
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Lock scroll during intro animation
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = "PORTFOLIO";
    const start = "ARAVIND";
    let iterations = 0;
    let intervalId;
    let timeoutId;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 500);
    });

    let isMounted = true;

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() => {
          let newText = target
            .split("")
            .map((letter, index) => {
              if (index < Math.floor(iterations)) {
                return target[index]; // Target letter
              }
              if (index < start.length) {
                return start[index]; // Original letter
              }
              return "";
            })
            .join("");
          return newText;
        });

        if (iterations >= target.length) {
          clearInterval(intervalId);

          // GSAP Animation Sequence matching user reference screenshot
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto'; // Unlock scroll
              if (onPreloadComplete) onPreloadComplete(); // Reveal rest of site
            }
          });

          const isMobile = window.innerWidth < 768;

          // 1. Move central text container to rest position behind the head
          tl.to(
            containerRef.current,
            {
              top: isMobile ? "28%" : "38%",
              duration: 1.5,
              ease: "power3.inOut"
            },
            "+=0.2"
          );

          // 2. Slide blazer portrait upward from bottom to overlap center of text
          tl.fromTo(
            imageRef.current,
            { y: "100vh" },
            { y: 0, duration: 1.5, ease: "power3.out" },
            "-=1.2"
          );
        }

        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [onPreloadComplete]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center bg-black overflow-hidden select-none"
    >
      {/* Subtle Cinematic Ambient Back-glow behind portrait */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-t from-[#ccff00]/10 via-cyan-500/5 to-transparent rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Central Giant Typography Container (Behind Portrait) */}
      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-center w-full max-w-full px-2"
      >
        <h1
          ref={textRef}
          className="text-[19vw] sm:text-[17vw] md:text-[13rem] lg:text-[16rem] font-black tracking-tighter leading-none uppercase font-display text-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] whitespace-nowrap chrome-text"
        >
          {text}
        </h1>
      </div>

      {/* Hero Center Graphic: Bold Transparent Blazer Portrait (Grand scale, anchored to bottom center) */}
      <div
        ref={imageRef}
        className="relative z-10 flex flex-col items-center justify-end w-full pointer-events-none translate-y-[100vh]"
      >
        <img
          src={centerImage}
          alt="Aravind - Portfolio"
          className="h-[62vh] sm:h-[68vh] md:h-[74vh] lg:h-[78vh] max-h-[680px] w-auto object-contain object-bottom select-none pointer-events-none border-none outline-none shadow-none bg-transparent drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        />
      </div>
    </section>
  );
};

export default Hero;

