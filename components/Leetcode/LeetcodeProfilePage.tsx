"use client";

import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import LeetCodeHeatmap from "./LeetCodeHeatmap";
import { RecentSubmissions } from "./recent-submissions";
import { ContestCard } from "./ContestCard";

import { ProfileSidebar } from "./ProfileSidebar";
import { LeetCodeWidget } from "./DifficultyRating";
import StatsCard from "./StatsCard";
import { useMemo } from "react";
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
export function ProfileDashboard() {
  const chartData: DistributionDataPoint[] = useMemo(() => {
    const points: DistributionDataPoint[] = [
      { id: 1, value: 8, isActive: false },
      { id: 2, value: 12, isActive: false },
      { id: 3, value: 15, isActive: false },
      { id: 4, value: 25, isActive: false },
      { id: 5, value: 45, isActive: false },
      { id: 6, value: 80, isActive: false }, // Peak near active
      { id: 7, value: 140, isActive: false }, // Highest gray peak
      { id: 8, value: 95, isActive: true }, // The Active Bar (Orange)
      { id: 9, value: 75, isActive: false },
      { id: 10, value: 55, isActive: false },
      { id: 11, value: 40, isActive: false },
      { id: 12, value: 30, isActive: false },
      { id: 13, value: 25, isActive: false },
      { id: 14, value: 20, isActive: false },
      { id: 15, value: 18, isActive: false },
      { id: 16, value: 15, isActive: false },
      { id: 17, value: 15, isActive: false },
      { id: 18, value: 15, isActive: false },
      { id: 19, value: 15, isActive: false },
      { id: 20, value: 15, isActive: false },
      { id: 21, value: 15, isActive: false },
      { id: 22, value: 15, isActive: false },
    ];
    return points;
  }, []);

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white p-4 lg:p-10 font-sans selection:bg-orange-500/30">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-12">
        {/* Sidebar */}
        <div className="lg:sticky lg:top-6 lg:self-start lg:h-fit">
          <ProfileSidebar />
        </div>

        {/* Main Content */}
        <div className="space-y-4 lg:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-[180px]">
              <ContestCard />
            </div>
            <StatsCard title="Top" percentage="49.73%" data={chartData} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <LeetCodeWidget />
            </div>
            <Card className="bg-[#282828] border-none text-white p-4 space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <p className="text-[11px] text-[#9e9e9e] font-bold uppercase tracking-wider">
                  Badges
                </p>
                <span className="text-xl font-bold">0</span>
              </div>
              <div className="flex flex-col items-center justify-center pb-4 opacity-50">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#3e3e3e] rounded-lg rotate-45" />
                  <span className="relative text-[10px] font-bold text-center leading-tight">
                    12
                    <br />
                    DEC
                  </span>
                </div>
                <div className="text-center mt-3">
                  <p className="text-[10px] text-[#9e9e9e]">Locked Badge</p>
                  <p className="text-xs font-bold">Dec LeetCoding Challenge</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-[#282828] border-none text-white p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm font-medium">
                <span className="font-bold">179</span>
                <span className="text-[#9e9e9e]">
                  submissions in the past one year
                </span>
                <Info className="h-3.5 w-3.5 text-[#9e9e9e] cursor-help" />
              </div>
              <div className="flex gap-4 text-[10px] text-[#9e9e9e] font-medium">
                <span>
                  Total active days: <span className="text-white">45</span>
                </span>
                <span>
                  Max streak: <span className="text-white">13</span>
                </span>
              </div>
            </div>

            <div className="space-y-1">
              {/* Heatmap (client-generated) */}
              <LeetCodeHeatmap weeks={53} days={7} />
              <div className="flex justify-between text-[10px] text-[#9e9e9e] px-1 pt-1.5 font-medium">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </Card>

          <RecentSubmissions />
        </div>
      </div>
    </div>
  );
}
