import React, { useState, useRef } from 'react';

const TiltCard = ({
  children,
  className = '',
  maxTilt = 7,
  glowColor = 'rgba(204, 255, 0, 0.15)',
  ...props
}) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  });
  const [glare, setGlare] = useState({
    opacity: 0,
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const rotateX = -yPercent * maxTilt;
    const rotateY = xPercent * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.1s ease-out',
    });

    setGlare({
      opacity: 1,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden liquid-glass-card rounded-3xl will-change-transform ${className}`}
      {...props}
    >
      {/* Specular Liquid Light Follower */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.14) 0%, transparent 70%)`,
        }}
      />

      {/* Ambient colored underglow on hover */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
        style={{
          opacity: glare.opacity ? 0.7 : 0,
          background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, ${glowColor} 0%, transparent 65%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
};

export default TiltCard;
