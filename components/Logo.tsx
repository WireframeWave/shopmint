import React from 'react';

export const Logo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 32 }) => {
  return (
    <div className={`flex items-center select-none ${className}`} style={{ height: size }}>
      <img
        src="/logo.png"
        alt="Shopmintapp Logo"
        className="h-full w-auto object-contain"
        style={{ maxHeight: '100%', mixBlendMode: 'multiply', filter: 'contrast(1.1) brightness(1.05)' }}
      />
    </div>
  );
};