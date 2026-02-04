import React, { useState, useEffect } from 'react';

export const Logo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 32 }) => {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const originalSrc = "/logo.png";

  useEffect(() => {
    const img = new Image();
    img.src = originalSrc;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Threshold to remove the white background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If the pixel is near-white, make it fully transparent
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
  }, [originalSrc]);

  return (
    <div className={`flex items-center select-none ${className}`} style={{ height: size }}>
      <img
        src={processedSrc || originalSrc}
        alt="Shopmintapp Logo"
        className="h-full w-auto object-contain"
        style={{
          maxHeight: '100%',
          // Use normal blending once the image is processed and transparent
          mixBlendMode: processedSrc ? 'normal' : 'multiply'
        }}
      />
    </div>
  );
};