"use client";

import { motion } from "framer-motion";

const NODES = [
  [34, 46], [72, 28], [112, 58], [151, 36], [193, 70],
  [238, 45], [278, 76], [315, 52], [352, 92], [302, 126],
  [253, 109], [205, 137], [159, 105], [108, 132], [59, 104],
] as const;

const LINKS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13],
  [13, 14], [14, 0], [2, 12], [4, 10], [6, 10], [1, 13],
] as const;

export default function DecisionConstellation() {
  return (
    <figure
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08090C]/80 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      aria-labelledby="constellation-caption"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A1A1A6]">
          Research constellation
        </span>
        <span className="font-mono text-[9px] text-[#32D74B]">15 / 15</span>
      </div>
      <svg viewBox="0 0 386 166" role="img" aria-label="A network of fifteen countries representing the master’s thesis panel">
        <defs>
          <linearGradient id="signal" x1="0" x2="1">
            <stop offset="0" stopColor="#0A84FF" stopOpacity=".18" />
            <stop offset=".55" stopColor="#F5F5F0" stopOpacity=".28" />
            <stop offset="1" stopColor="#FF9F0A" stopOpacity=".18" />
          </linearGradient>
        </defs>
        {LINKS.map(([start, end], index) => (
          <motion.line
            key={`${start}-${end}`}
            x1={NODES[start][0]}
            y1={NODES[start][1]}
            x2={NODES[end][0]}
            y2={NODES[end][1]}
            stroke="url(#signal)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + index * 0.035, ease: "easeOut" }}
          />
        ))}
        {NODES.map(([x, y], index) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.7 + index * 0.045 }}
          >
            <circle cx={x} cy={y} r="7" fill={index === 4 ? "#FF9F0A18" : "#0A84FF12"} />
            <circle cx={x} cy={y} r="2.2" fill={index === 4 ? "#FF9F0A" : "#F5F5F0"} />
          </motion.g>
        ))}
      </svg>
      <figcaption id="constellation-caption" className="mt-3 border-t border-white/8 pt-4">
        <p className="text-sm font-light text-[#F5F5F0]">Diversification lowers exposure.</p>
        <p className="mt-1 text-xs leading-relaxed text-[#A1A1A6]">
          15 natural-gas-exporting countries · 2003–2023
        </p>
      </figcaption>
    </figure>
  );
}
