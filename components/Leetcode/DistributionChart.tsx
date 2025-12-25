import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
export interface DistributionDataPoint {
  id: number;
  value: number;
  isActive: boolean;
  label?: string;
}

export interface DistributionCardProps {
  title: string;
  percentage: string;
  data: DistributionDataPoint[];
  className?: string;
}

interface DistributionChartProps {
  data: DistributionDataPoint[];
}

// Custom Tooltip to show value on hover
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as DistributionDataPoint;
    return (
      <div className="bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs rounded px-2 py-1 shadow-lg">
        <p className="font-semibold">
          {data.isActive ? "Active Range" : "Range"}
        </p>
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const DistributionChart: React.FC<DistributionChartProps> = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-40 select-none">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
          onMouseLeave={() => setHoverIndex(null)}
          barCategoryGap="15%"
        >
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<CustomTooltip />}
            allowEscapeViewBox={{ x: true, y: true }}
          />
          <Bar
            dataKey="value"
            radius={[2, 2, 0, 0]} // Slight rounding on top
            isAnimationActive={true}
            animationDuration={800}
          >
            {data.map((entry, index) => {
              // Logic for coloring:
              // 1. If active, use the signature Orange/Amber color.
              // 2. If actively hovered, lighten the gray.
              // 3. Default state is lighter gray (zinc-600) to match screenshot visibility.

              // LeetCode theme colors:
              // - Default: neutral gray
              // - Active: LeetCode orange
              // - Hover: lighter orange tint
              let fill = "#6b7280"; // Default: gray-500 (neutral)

              if (entry.isActive) {
                fill = "#FFA116"; // LeetCode orange
              } else if (hoverIndex === index) {
                fill = "#FFB366"; // lighter orange hover
              }

              return (
                <Cell
                  key={`cell-${index}`}
                  fill={fill}
                  onMouseEnter={() => setHoverIndex(index)}
                  className="transition-all duration-200 ease-in-out"
                  style={{ outline: "none" }}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistributionChart;
