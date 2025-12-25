"use client";
import React, { useEffect, useState } from "react";
import { Leetcode_Username } from "@/constants/user_details";

// small seeded PRNG (mulberry32)
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getSeedFromString(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function LeetCodeHeatmap({
  weeks = 53,
  days = 7,
}: {
  weeks?: number;
  days?: number;
}) {
  const [cells, setCells] = useState<string[] | null>(null);

  useEffect(() => {
    const seed = getSeedFromString(Leetcode_Username || "default");
    const rand = mulberry32(seed);
    const out: string[] = [];
    for (let i = 0; i < weeks * days; i++) {
      const v = rand();
      // map to few color intensity steps
      let color = "bg-[#3e3e3e20]";
      if (v > 0.95) color = "bg-[#2cbb5d]";
      else if (v > 0.85) color = "bg-[#1e8b41]";
      else if (v > 0.75) color = "bg-[#005a23]";
      out.push(color);
    }
    setCells(out);
  }, [weeks, days]);

  // initial server-render-like placeholder: array of muted cells
  const placeholder = Array.from({ length: weeks * days }).map(
    () => "bg-[#3e3e3e20]"
  );

  const renderCells = (arr: string[]) => (
    <div className={`grid grid-cols-[repeat(${weeks},1fr)] gap-[3px] pt-4`}>
      {arr.map((c, i) => (
        <div key={i} className={`aspect-square rounded-[1px] ${c}`} />
      ))}
    </div>
  );

  return <>{cells ? renderCells(cells) : renderCells(placeholder)}</>;
}
