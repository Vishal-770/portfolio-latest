"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GFG_Username } from "@/constants/user_details";
import { fetchGFGHeatmap } from "@/services/FetchGFGHeatmap";

export default function GFGHeatmap({
  weeks = 53,
  days = 7,
}: {
  weeks?: number;
  days?: number;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["gfg-heatmap", GFG_Username],
    queryFn: () => fetchGFGHeatmap(GFG_Username),
    staleTime: 1000 * 60 * 60 * 6,
  });

  const totalCells = weeks * days;

  const placeholder = Array.from({ length: totalCells }).map(
    () => "bg-[#3e3e3e20]"
  );

  if (isLoading || !data) {
    return (
      <div className="overflow-x-auto">
        <div
          className="grid gap-[3px] pt-4"
          style={{
            gridTemplateColumns: `repeat(${weeks}, minmax(12px, 1fr))`,
            minWidth: `${weeks * 12}px`,
          }}
        >
          {placeholder.map((c, i) => (
            <div key={i} className={`aspect-square rounded-[1px] ${c}`} />
          ))}
        </div>
      </div>
    );
  }

  // data.calendar keys are unix timestamps as strings -> values are counts
  const calMap: Record<number, number> = Object.fromEntries(
    Object.entries(data.calendar || {}).map(([k, v]) => [Number(k), v as number])
  );

  const tsKeys = Object.keys(calMap).map((s) => Number(s));
  if (tsKeys.length === 0) {
    return (
      <div className="overflow-x-auto">
        <div
          className="grid gap-[3px] pt-4"
          style={{
            gridTemplateColumns: `repeat(${weeks}, minmax(12px, 1fr))`,
            minWidth: `${weeks * 12}px`,
          }}
        >
          {placeholder.map((c, i) => (
            <div key={i} className={`aspect-square rounded-[1px] ${c}`} />
          ))}
        </div>
      </div>
    );
  }

  const now = new Date();
  const todayUtc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  );
  const newestTs = Math.max(...tsKeys, Math.floor(todayUtc / 1000));
  const newestDate = new Date(newestTs * 1000);

  // start date = newestDate - (totalCells - 1) days
  const startDate = new Date(
    newestDate.getTime() - (totalCells - 1) * 86400 * 1000
  );

  const values: number[] = [];
  for (let i = 0; i < totalCells; i++) {
    const d = new Date(startDate.getTime() + i * 86400 * 1000);
    // Align to UTC midnight seconds
    const utcMidnight = Date.UTC(
      d.getUTCFullYear(),
      d.getUTCMonth(),
      d.getUTCDate()
    );
    const ts = Math.floor(utcMidnight / 1000);
    values.push(calMap[ts] ?? 0);
  }

  const colorFor = (count: number) => {
    if (count >= 5) return "bg-[#1b5e20]";
    if (count >= 3) return "bg-[#2f8d46]";
    if (count >= 1) return "bg-[#4caf50]";
    return "bg-[#3e3e3e20]";
  };

  // Now build columns: each column is `days` vertical cells
  const columns: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const start = w * days;
    columns.push(values.slice(start, start + days));
  }

  return (
    <div className="overflow-x-auto">
      <div
        className="grid gap-[3px] pt-4"
        style={{
          gridTemplateColumns: `repeat(${weeks}, minmax(12px, 1fr))`,
          minWidth: `${weeks * 12}px`,
        }}
      >
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-[3px]">
            {col.map((v, di) => (
              <div
                key={di}
                title={v > 0 ? `${v} submissions` : undefined}
                className={`aspect-square rounded-[1px] ${colorFor(v)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
