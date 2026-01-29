import React from 'react';

export const Logo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 32 }) => {
  return (
    <div className={`flex items-center select-none ${className}`} style={{ height: size }}>
      <svg
        viewBox="0 0 400 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Interlocking S-shape Icon */}
        <g transform="translate(10, 5)">
          {/* Top Hook - Cyan to Indigo */}
          <path
            d="M55.5 12C55.5 12 48 6 36 6C24 6 14 16 14 28C14 34 17 40 22 44L36 30L50 44C55 40 58 34 58 28C58 22 55.5 12 55.5 12Z"
            fill="url(#logo_grad_top)"
          />
          {/* Bottom Hook - Indigo to Purple */}
          <path
            d="M16.5 60C16.5 60 24 66 36 66C48 66 58 56 58 44C58 38 55 32 50 28L36 42L22 28C17 32 14 38 14 44C14 50 16.5 60 16.5 60Z"
            fill="url(#logo_grad_bottom)"
          />
        </g>
        
        {/* Brand Text */}
        <text
          x="85"
          y="54"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '52px',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}
        >
          <tspan fill="#0F172A">Shopmint</tspan>
          <tspan fill="#64748B" style={{ fontWeight: 500 }}>app</tspan>
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient
            id="logo_grad_top"
            x1="14"
            y1="6"
            x2="58"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient
            id="logo_grad_bottom"
            x1="58"
            y1="66"
            x2="14"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};