import React from "react";
import DistributionChart from "./DistributionChart";

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
const StatsCard: React.FC<DistributionCardProps> = ({
  title,
  percentage,
  data,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#18181b] p-4 rounded-xl border border-zinc-800 shadow-2xl w-full h-[180px] flex flex-col justify-between ${className}`}
    >
      {/* Header Section */}
      <div className="flex flex-col mb-6">
        <h3 className="text-zinc-400 text-sm font-medium tracking-wide mb-1">
          {title}
        </h3>
        <span className="text-white text-xs font-bold tracking-tight">
          {percentage}
        </span>
      </div>

      {/* Chart Section */}
      <div className="flex-1 min-h-[56px] flex items-end">
        <DistributionChart data={data} />
      </div>
    </div>
  );
};

export default StatsCard;
