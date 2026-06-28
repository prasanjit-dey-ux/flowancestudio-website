'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AsciiTerrain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ascii, setAscii] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const handleResize = () => {
      if (container) {
        width = container.clientWidth;
        height = container.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    const charWidth = 5.4; // Average width of a character in pixels at text-[9px]
    const charHeight = 10.5; // Line height of a character line in pixels at leading-[10.5px]

    const generateTerrain = (w: number, h: number, time: number) => {
      const cols = Math.floor(w / charWidth);
      const rows = Math.floor(h / charHeight);
      if (cols <= 0 || rows <= 0) return '';

      // Initialize grid with spaces
      const grid: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(' '));

      // 3 Layers of hills from back (layer 0) to front (layer 2)
      const layers = [
        {
          speed: 0.0002,
          freq: 0.015,
          amp: rows * 0.18,
          base: rows * 0.48,
        },
        {
          speed: -0.0004,
          freq: 0.01,
          amp: rows * 0.23,
          base: rows * 0.53,
        },
        {
          speed: 0.0006,
          freq: 0.006,
          amp: rows * 0.3,
          base: rows * 0.6,
        }
      ];

      for (let l = 0; l < layers.length; l++) {
        const layer = layers[l];
        for (let col = 0; col < cols; col++) {
          const t = time * layer.speed;
          const x = col;
          
          // Combine multiple sine waves for organic, rolling landscape ridges
          const wave1 = Math.sin(x * layer.freq + t);
          const wave2 = Math.cos(x * layer.freq * 0.45 - t * 0.8) * 0.4;
          const waveHeight = layer.base + (wave1 + wave2) * layer.amp;

          const peakRow = Math.max(0, Math.min(rows - 1, Math.floor(rows - waveHeight)));

          for (let row = peakRow; row < rows; row++) {
            const dy = row - peakRow;
            let char = ' ';

            if (l === 2) {
              // Foreground layer density gradient (deep, thick peaks, fades out)
              if (dy === 0) char = '#';
              else if (dy === 1) char = '%';
              else if (dy === 2) char = '5';
              else if (dy === 3) char = '7';
              else if (dy === 4) char = '?';
              else if (dy === 5) char = '+';
              else if (dy === 6) char = '*';
              else if (dy === 7) char = '+';
              else if (dy <= 9) char = ',';
              else if (dy <= 12) char = '.';
              else char = ' ';
            } else if (l === 1) {
              // Midground layer density gradient (medium thickness)
              if (dy === 0) char = '%';
              else if (dy === 1) char = '7';
              else if (dy === 2) char = '?';
              else if (dy === 3) char = '+';
              else if (dy === 4) char = '*';
              else if (dy <= 6) char = ',';
              else if (dy <= 9) char = '.';
              else char = ' ';
            } else {
              // Background layer density gradient (fine lines, very sparse)
              if (dy === 0) char = '?';
              else if (dy === 1) char = '+';
              else if (dy === 2) char = '*';
              else if (dy <= 4) char = ',';
              else if (dy <= 7) char = '.';
              else char = ' ';
            }

            // Overwrite grid values (including space ' ') to mask out backgrounds
            grid[row][col] = char;
          }
        }
      }

      return grid.map(line => line.join('')).join('\n');
    };

    const update = (time: number) => {
      const terrainText = generateTerrain(width, height, time);
      setAscii(terrainText);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="w-full h-full bg-[#FAFAFA]" />;
  }

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden select-none pointer-events-none">
      <pre className="font-mono text-[9px] leading-[10.5px] text-primary/35 whitespace-pre">
        {ascii}
      </pre>
    </div>
  );
}
