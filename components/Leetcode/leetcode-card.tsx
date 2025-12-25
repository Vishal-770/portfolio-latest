"use client";
import { Leetcode_Username } from "@/constants/user_details";
import { fetchLeetCodeStats } from "@/services/FetchLeetCodeStats";
import { useQuery } from "@tanstack/react-query";
import { Zap, Target, Trophy } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { use } from "react";

export function LeetCodeCard() {
  const { data: stats, isLoading } = useQuery({
    queryFn: () => fetchLeetCodeStats(Leetcode_Username),
    queryKey: ["leetcode-stats"],
  });
  if (isLoading || !stats) {
    return (
      <article className="bg-card border border-border/50 rounded-lg p-4">
        <div className="flex items-center gap-1 mb-1.5">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-1" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-64 mb-4" />
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      </article>
    );
  }
  console.log(stats);
  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:border-border hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
        <span className="text-primary font-medium">leetcode.com</span>
        <span className="text-border/50">›</span>
        <span>user/profile</span>
      </div>

      <h2 className="text-base font-semibold text-primary mb-2">
        LeetCode Progress
      </h2>

      <p className="text-sm text-muted-foreground mb-4">
        {stats.totalSolved} problems solved with {stats.submissionsLastYear} submissions in the last year and {stats.activeDays} active days on LeetCode.
      </p>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="bg-muted/20 rounded p-2 sm:p-3 text-center border border-border/30 hover:bg-muted/10 hover:border-border/40 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-105 transition-transform duration-200 ease-in-out" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.totalSolved}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Solved
          </div>
        </div>

        <div className="bg-muted/20 rounded p-2 sm:p-3 text-center border border-border/30 hover:bg-muted/10 hover:border-border/40 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:scale-105 transition-transform duration-200 ease-in-out" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.submissionsLastYear}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Submissions
          </div>
        </div>

        <div className="bg-muted/20 rounded p-2 sm:p-3 text-center border border-border/30 hover:bg-muted/10 hover:border-border/40 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-105 transition-transform duration-200 ease-in-out" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.activeDays}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Active Days
          </div>
        </div>
      </div>
    </article>
  );
}
