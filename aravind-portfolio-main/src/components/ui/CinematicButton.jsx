import React, { useRef, useState } from 'react';

const CinematicButton = ({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' (neon lime) or 'glass' (subtle frosted)
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current || disabled) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Subtle magnetic attraction factor (pulls up to 4px)
    setOffset({
      x: x * 0.18,
      y: y * 0.18,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    'cinematic-btn inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 select-none cursor-pointer rounded-full active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[#ccff00] text-black hover:bg-[#b3e600] shadow-[0_0_20px_rgba(204,255,0,0.35)] border border-[#ccff00]/40',
    glass:
      'bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
    cyan:
      'bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-300/40',
  };

  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      ref={btnRef}
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
      }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default CinematicButton;
