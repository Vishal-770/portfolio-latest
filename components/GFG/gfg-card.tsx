"use client";
import { GFG_Username, socialLinks } from "@/constants/user_details";
import { fetchGFGStats } from "@/services/FetchGFGStats";
import { useQuery } from "@tanstack/react-query";
import { Zap, Target, Trophy } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import GFGHeatmap from "./GFGHeatmap";

export function GFGCard() {
  const { data: stats, isLoading } = useQuery({
    queryFn: () => fetchGFGStats(GFG_Username),
    queryKey: ["gfg-stats", GFG_Username],
    staleTime: 1000 * 60,
  });

  if (isLoading || !stats) {
    return (
      <article className="py-2">
        <div className="flex items-center gap-1 mb-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-1" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="h-5 w-40 mb-2" />
        <Skeleton className="h-4 w-72 mb-4" />
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      </article>
    );
  }

  const profileUrl =
    socialLinks.geeks_forgeeks ||
    `https://www.geeksforgeeks.org/profile/${GFG_Username}`;

  return (
    <Link href={profileUrl} target="_blank" rel="noopener noreferrer">
      <article className="py-2 hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
          <span className="text-[#2f8d46] font-medium">geeksforgeeks.org</span>
          <span className="text-border/50">›</span>
          <span>profile/{GFG_Username}</span>
        </div>

        <h2 className="text-base font-semibold text-[#2f8d46] dark:text-[#4caf50] mb-2">
          GeeksforGeeks Progress
        </h2>

        <p className="text-sm text-muted-foreground mb-4">
          {stats.totalSolved} problems solved with a coding score of{" "}
          {stats.codingScore} and {stats.currentStreak} days streak on
          GeeksforGeeks.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-muted/20 rounded p-2 sm:p-3 text-center hover:bg-muted/10 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer group">
            <div className="flex justify-center mb-1 sm:mb-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#2f8d46] dark:text-[#4caf50] group-hover:scale-105 transition-transform duration-200 ease-in-out" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-foreground">
              {stats.totalSolved}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
              Solved
            </div>
          </div>

          <div className="bg-muted/20 rounded p-2 sm:p-3 text-center hover:bg-muted/10 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer group">
            <div className="flex justify-center mb-1 sm:mb-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-105 transition-transform duration-200 ease-in-out" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-foreground">
              {stats.codingScore}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
              Coding Score
            </div>
          </div>

          <div className="bg-muted/20 rounded p-2 sm:p-3 text-center hover:bg-muted/10 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer group">
            <div className="flex justify-center mb-1 sm:mb-2">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#2f8d46] dark:text-[#4caf50] group-hover:scale-105 transition-transform duration-200 ease-in-out" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-foreground">
              {stats.currentStreak}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
              Streak (Days)
            </div>
          </div>
        </div>
      </article>
      <GFGHeatmap />
    </Link>
  );
}
