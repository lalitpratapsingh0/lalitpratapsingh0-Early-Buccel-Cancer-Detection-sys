import React, { useState, useEffect, useRef } from 'react';
import { ScreeningResult } from '../types';
import { Eye, Layers, Flame, Info } from 'lucide-react';

interface ImageCanvasVisualizerProps {
  result: ScreeningResult;
  className?: string;
}

export const ImageCanvasVisualizer: React.FC<ImageCanvasVisualizerProps> = ({ result, className = '' }) => {
  const [viewMode, setViewMode] = useState<'original' | 'bounding' | 'heatmap'>('bounding');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      canvas.width = img.width || 600;
      canvas.height = img.height || 600;

      // Draw base image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      if (viewMode === 'bounding') {
        // Draw Bounding Boxes if present
        if (result.regions && result.regions.length > 0) {
          result.regions.forEach(reg => {
            const bx = (reg.x / 100) * canvas.width;
            const by = (reg.y / 100) * canvas.height;
            const bw = (reg.width / 100) * canvas.width;
            const bh = (reg.height / 100) * canvas.height;

            // Box shadow / glow effect
            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = 4;
            ctx.setLineDash([8, 4]);
            ctx.strokeRect(bx, by, bw, bh);

            // Inner cyan solid line
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth = 2;
            ctx.setLineDash([]);
            ctx.strokeRect(bx + 2, by + 2, bw - 4, bh - 4);

            // Label Box
            ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
            ctx.fillRect(bx, Math.max(0, by - 28), bw, 26);

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.fillText(`${reg.label} (${reg.confidence}%)`, bx + 6, Math.max(16, by - 10));
          });
        }
      } else if (viewMode === 'heatmap') {
        // Overlay Heatmap matrix grid
        const cellW = canvas.width / 8;
        const cellH = canvas.height / 8;

        for (let r = 0; r < 8; r++) {
          for (let c = 0; c < 8; c++) {
            const val = result.heatmapGrid[r]?.[c] || 0;
            if (val > 0.1) {
              const alpha = Math.min(0.7, val * 0.75);
              const hue = (1 - val) * 120; // Red (0) to Yellow (60) to Green (120)
              ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${alpha})`;
              ctx.fillRect(c * cellW, r * cellH, cellW, cellH);

              // Cell border grid line
              ctx.strokeStyle = 'rgba(255,255,255,0.15)';
              ctx.lineWidth = 1;
              ctx.strokeRect(c * cellW, r * cellH, cellW, cellH);
            }
          }
        }
      }
    };
    img.src = result.imageSrc;
  }, [result, viewMode]);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode('original')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'original' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Original</span>
          </button>

          <button
            onClick={() => setViewMode('bounding')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'bounding' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Bounding Box</span>
          </button>

          <button
            onClick={() => setViewMode('heatmap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'heatmap' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Heatmap Grid</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-teal-400" />
          <span>Mode: {viewMode.toUpperCase()}</span>
        </div>
      </div>

      {/* Canvas View Container */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex items-center justify-center min-h-[340px]">
        <canvas ref={canvasRef} className="max-w-full max-h-[460px] object-contain rounded-xl" />

        {/* Demo Mode Overlay Pill MANDATORY */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-700/80 backdrop-blur-md text-[11px] font-mono text-teal-300 flex items-center justify-center sm:justify-start gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>AI Visualization — Demonstration Only</span>
        </div>

        {viewMode === 'bounding' && result.regions.length === 0 && result.riskLevel !== 'UNABLE_TO_ANALYZE' && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-slate-900/90 text-slate-300 text-xs border border-slate-700">
            No localized lesion bounding box triggered (Low Risk)
          </div>
        )}
      </div>
    </div>
  );
};
