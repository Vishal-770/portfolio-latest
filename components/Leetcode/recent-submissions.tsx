"use client";
import type React from "react";
import {
  FileText,
  List,
  CheckSquare,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchLeetCodeRecentSolved } from "@/services/FetchLeetCodeRecentSolved";
import { Leetcode_Username } from "@/constants/user_details";
import { Skeleton } from "@/components/ui/skeleton";

export function RecentSubmissions() {
  const { data, isLoading } = useQuery({
    queryKey: ["leetcode-recent", Leetcode_Username],
    queryFn: () => fetchLeetCodeRecentSolved(Leetcode_Username, 15),
  });

  const items = data ?? [];

  return (
    <Card className="bg-[#282828] border-none overflow-hidden">
      <div className="p-4 border-b border-[#3e3e3e] flex items-center justify-between">
        <div className="flex gap-1">
          <TabItem
            icon={<FileText className="h-4 w-4" />}
            label="Recent AC"
            active
          />
          <TabItem icon={<List className="h-4 w-4" />} label="List" />
          <TabItem
            icon={<CheckSquare className="h-4 w-4" />}
            label="Solutions"
          />
          <TabItem
            icon={<MessageSquare className="h-4 w-4" />}
            label="Discuss"
          />
        </div>
        <button className="text-[#9e9e9e] hover:text-white flex items-center gap-0.5 text-xs font-medium group">
          View all submissions{" "}
          <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="divide-y divide-[#3e3e3e]">
        {isLoading && (
          <div className="p-4">
            <Skeleton className="h-3 w-full mb-3" />
            <Skeleton className="h-3 w-full mb-3" />
            <Skeleton className="h-3 w-full" />
          </div>
        )}

        {!isLoading && items.length === 0 && (
          <div className="p-4 text-sm text-[#9e9e9e]">
            No recent accepted submissions
          </div>
        )}

        {!isLoading &&
          items.map((sub, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 hover:bg-[#3e3e3e30] transition-colors cursor-pointer ${
                i % 2 === 0 ? "bg-transparent" : "bg-[#3e3e3e10]"
              }`}
            >
              <span className="text-sm font-medium text-white">
                {sub.title}
              </span>
              <span className="text-xs text-[#9e9e9e] font-medium">
                {sub.timeAgo}
              </span>
            </div>
          ))}
      </div>
    </Card>
  );
}

function TabItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
        active
          ? "bg-[#3e3e3e] text-white"
          : "text-[#9e9e9e] hover:bg-[#3e3e3e30]"
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
