"use client";

import { useQuery } from "@tanstack/react-query";
import { Github_Username } from "@/constants/user_details";

import { fetchGithubHeatmap } from "@/services/FetchGithubHeatMap";

export default function LeetCodeHeatmap({
  weeks = 53,
  days = 7,
}: {
  weeks?: number;
  days?: number;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["leetcode-heatmap", Github_Username],
    queryFn: () => fetchGithubHeatmap(Github_Username),
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
  // We need to render last `totalCells` values in order (oldest first -> newest last)
  // Build a map of timestamp->count (timestamps are seconds)
  const calMap: Record<number, number> = Object.fromEntries(
    Object.entries(data.calendar).map(([k, v]) => [Number(k), v as number])
  );

  const tsKeys = Object.keys(calMap).map((s) => Number(s));
  if (tsKeys.length === 0) {
    // nothing to render, fallback to placeholder
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

  const newestTs = Math.max(...tsKeys);
  const newestDate = new Date(newestTs * 1000);

  // start date = newestDate - (totalCells - 1) days
  const startDate = new Date(
    newestDate.getTime() - (totalCells - 1) * 86400 * 1000
  );

  const values: number[] = [];
  for (let i = 0; i < totalCells; i++) {
    const d = new Date(startDate.getTime() + i * 86400 * 1000);
    const ts = Math.floor(d.getTime() / 1000);
    values.push(calMap[ts] ?? 0);
  }

  const colorFor = (count: number) => {
    if (count >= 6) return "bg-[#2cbb5d]";
    if (count >= 3) return "bg-[#1e8b41]";
    if (count >= 1) return "bg-[#005a23]";
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
                className={`aspect-square rounded-[1px] ${colorFor(v)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
