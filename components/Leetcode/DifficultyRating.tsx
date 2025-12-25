"use client";
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchLeetCodeSolved } from "@/services/FetchLeetCodeSolved";
import { Leetcode_Username } from "@/constants/user_details";
import { Skeleton } from "@/components/ui/skeleton";

interface DifficultyStats {
  label: string;
  count: number;
  total: number;
  color: string;
}

const DifficultyBox: React.FC<{
  stat: DifficultyStats;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ stat, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="bg-[#2a2a2a] hover:bg-[#323232] cursor-pointer transition-colors rounded-lg py-2 px-3 flex flex-col items-start justify-center w-full min-w-[100px] group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span
        className="text-[12px] font-medium mb-0.5"
        style={{ color: stat.color }}
      >
        {stat.label}
      </span>
      <div className="text-white text-[14px] font-bold tracking-wide flex items-baseline">
        {stat.count}
        <span className="text-[#606060] text-[11px] font-medium ml-1">
          /{stat.total}
        </span>
      </div>
    </div>
  );
};

export const LeetCodeWidget: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [hoveredDifficulty, setHoveredDifficulty] = useState<string | null>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { data, isLoading } = useQuery({
    queryFn: () => fetchLeetCodeSolved(Leetcode_Username),
    queryKey: ["leetcode-solved"],
  });

  if (isLoading) {
    return (
      <div className="bg-[#1c1c1c] w-full rounded-xl p-4 shadow-2xl  font-sans border border-[#2d2d2d] flex items-center justify-center">
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-[#1c1c1c] w-full rounded-xl p-4 text-white">
        Failed to load difficulty stats
      </div>
    );
  }

  const totalSolved = data.solved.all;
  const totalQuestions = data.totalProblems.all;

  const stats: Record<string, DifficultyStats> = {
    easy: {
      label: "Easy",
      count: data.solved.easy,
      total: data.totalProblems.easy,
      color: "#00b8a3",
    },
    medium: {
      label: "Med.",
      count: data.solved.medium,
      total: data.totalProblems.medium,
      color: "#ffc01e",
    },
    hard: {
      label: "Hard",
      count: data.solved.hard,
      total: data.totalProblems.hard,
      color: "#ef4743",
    },
  };

  // Ring Config
  const size = 100; // Slightly smaller for a tighter look
  const strokeWidth = 3;
  const trackWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const totalCount = stats.easy.count + stats.medium.count + stats.hard.count;

  // Gap configuration
  const gapLength = 4;
  const numSegments = 3;
  const totalGap = gapLength * numSegments;
  const availableCircumference = circumference - totalGap;

  // Calculate lengths for each segment
  const easyLen = (stats.easy.count / totalCount) * availableCircumference;
  const mediumLen = (stats.medium.count / totalCount) * availableCircumference;
  const hardLen = (stats.hard.count / totalCount) * availableCircumference;

  // Rotations
  const gapAngle = (gapLength / circumference) * 360;
  const easyAngle = (easyLen / circumference) * 360;
  const mediumAngle = (mediumLen / circumference) * 360;

  // Starting positions (angles)
  const startAngle = -90;
  const mediumStartAngle = startAngle + easyAngle + gapAngle;
  const hardStartAngle = mediumStartAngle + mediumAngle + gapAngle;

  return (
    // Changed container to w-fit and flex to hug content tightly
    <div className="bg-[#1c1c1c] w-full rounded-xl p-4 shadow-2xl  font-sans border border-[#2d2d2d] flex flex-row items-center justify-evenly gap-6">
      {/* Left: Circular Chart */}
      <div className="flex flex-col items-center justify-center relative flex-shrink-0">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            className="w-full h-full transform"
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Background Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#2a2a2a"
              strokeWidth={trackWidth}
              fill="none"
            />

            {/* Easy Segment */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={stats.easy.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${animated ? easyLen : 0} ${circumference}`}
              transform={`rotate(${startAngle} ${size / 2} ${size / 2})`}
              className={`transition-all duration-500 ease-out ${
                hoveredDifficulty && hoveredDifficulty !== "easy"
                  ? "opacity-20"
                  : "opacity-100"
              }`}
            />

            {/* Medium Segment */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={stats.medium.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${animated ? mediumLen : 0} ${circumference}`}
              transform={`rotate(${mediumStartAngle} ${size / 2} ${size / 2})`}
              className={`transition-all duration-500 ease-out ${
                hoveredDifficulty && hoveredDifficulty !== "medium"
                  ? "opacity-20"
                  : "opacity-100"
              }`}
            />

            {/* Hard Segment */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={stats.hard.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${animated ? hardLen : 0} ${circumference}`}
              transform={`rotate(${hardStartAngle} ${size / 2} ${size / 2})`}
              className={`transition-all duration-500 ease-out ${
                hoveredDifficulty && hoveredDifficulty !== "hard"
                  ? "opacity-20"
                  : "opacity-100"
              }`}
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none pb-0.5">
            <div className="flex items-baseline">
              <span className="text-[24px] font-bold tracking-tight leading-none transition-all duration-300">
                {hoveredDifficulty
                  ? stats[hoveredDifficulty].count
                  : totalSolved}
              </span>
              <span className="text-[#606060] text-[10px] font-medium ml-0.5">
                /
                {hoveredDifficulty
                  ? stats[hoveredDifficulty].total
                  : totalQuestions}
              </span>
            </div>

            <div className="flex items-center gap-1 mt-0.5">
              {hoveredDifficulty ? (
                <span
                  className="text-[11px] font-bold tracking-wide transition-colors duration-300"
                  style={{ color: stats[hoveredDifficulty].color }}
                >
                  {stats[hoveredDifficulty].label}
                </span>
              ) : (
                <>
                  <Check size={12} className="text-[#00b8a3]" strokeWidth={4} />
                  <span className="text-[#00b8a3] text-[11px] font-bold tracking-wide">
                    Solved
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Attempting Text */}
        <div className="mt-2 text-[#606060] text-[11px] font-medium tracking-wide">
          {data.attempting} Attempting
        </div>
      </div>

      {/* Right: Detailed Stats Boxes - Using w-32 for fixed comfortable width */}
      <div className="flex flex-col gap-2 w-32">
        <DifficultyBox
          stat={stats.easy}
          onMouseEnter={() => setHoveredDifficulty("easy")}
          onMouseLeave={() => setHoveredDifficulty(null)}
        />
        <DifficultyBox
          stat={stats.medium}
          onMouseEnter={() => setHoveredDifficulty("medium")}
          onMouseLeave={() => setHoveredDifficulty(null)}
        />
        <DifficultyBox
          stat={stats.hard}
          onMouseEnter={() => setHoveredDifficulty("hard")}
          onMouseLeave={() => setHoveredDifficulty(null)}
        />
      </div>
    </div>
  );
};
