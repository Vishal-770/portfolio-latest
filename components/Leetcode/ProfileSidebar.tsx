"use client";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Github,
  Eye,
  CheckCircle,
  MessageSquare,
  Star,
  ChevronDown,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchLeetCodeProfile } from "@/services/FetchLeetCodeProfile";
import { Leetcode_Username } from "@/constants/user_details";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSidebar() {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchLeetCodeProfile(Leetcode_Username),
    queryKey: ["leetcode-profile"],
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <Skeleton className="h-28 w-28 rounded-lg" />
          <div className="space-y-3 flex-1">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-36" />
          </div>
        </div>
        <Skeleton className="h-12 w-full" />
        <div className="space-y-3">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className="text-white">Failed to load profile</div>;
  }
  return (
    <div className="space-y-6">
      {/* Profile Info */}
      <div className="flex gap-4 items-start">
        <Avatar className="h-20 w-20 rounded-lg bg-[#3e3e3e]">
          <AvatarImage src="/images/image.png" alt="Vishal" />
          <AvatarFallback className="rounded-lg bg-blue-500 text-white text-3xl font-bold">
            V
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white">Vishal</h2>
          <p className="text-sm text-[#9e9e9e]">amQBEsuUk1H</p>
          <p className="text-sm text-[#9e9e9e]">
            Rank{" "}
            <span className="text-white font-bold">
              {data.profile.ranking
                ? data.profile.ranking.toLocaleString()
                : "—"}
            </span>
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full bg-[#2cbb5d1a] text-[#2cbb5d] hover:bg-[#2cbb5d2a] border-[#2cbb5d33] font-medium h-9 text-sm"
      >
        Edit Profile
      </Button>

      {/* Social Links */}
      <div className="space-y-3 text-[#9e9e9e] text-sm">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>vishaldev.space</span>
        </div>
        <div className="flex items-center gap-2">
          <Github className="h-4 w-4" />
          <span>Vishal-770</span>
        </div>
      </div>

      <hr className="border-[#3e3e3e]" />

      {/* Community Stats */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-white">Community Stats</h3>
        <div className="space-y-3">
          <StatItem
            icon={<Eye className="h-4 w-4 text-blue-400" />}
            label="Views"
            value={data.profile.postViewCount.toString()}
            lastWeek={data.profile.postViewCountDiff.toString()}
          />
          <StatItem
            icon={<CheckCircle className="h-4 w-4 text-blue-400" />}
            label="Solution"
            value={data.profile.solutionCount.toString()}
            lastWeek={data.profile.solutionCountDiff.toString()}
          />
          <StatItem
            icon={<MessageSquare className="h-4 w-4 text-teal-400" />}
            label="Discuss"
            value={data.profile.categoryDiscussCount.toString()}
            lastWeek={data.profile.categoryDiscussCountDiff.toString()}
          />
          <StatItem
            icon={<Star className="h-4 w-4 text-orange-400" />}
            label="Reputation"
            value={data.profile.reputation.toString()}
            lastWeek={data.profile.reputationDiff.toString()}
          />
        </div>
      </div>

      <hr className="border-[#3e3e3e]" />

      {/* Languages */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white">Languages</h3>
        <div className="space-y-2">
          {data.languageProblemCount.map((lang) => (
            <LanguageItem
              key={lang.languageName}
              label={lang.languageName}
              value={lang.problemsSolved.toString()}
            />
          ))}
        </div>
      </div>

      <hr className="border-[#3e3e3e]" />

      {/* Skills */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-white">Skills</h3>

        <div className="space-y-3">
          {data.tagProblemCounts.advanced.length > 0 && (
            <SkillCategory
              title="Advanced"
              skills={data.tagProblemCounts.advanced.map((tag) => ({
                name: tag.tagName,
                count: tag.problemsSolved,
              }))}
            />
          )}
          {data.tagProblemCounts.intermediate.length > 0 && (
            <SkillCategory
              title="Intermediate"
              skills={data.tagProblemCounts.intermediate.map((tag) => ({
                name: tag.tagName,
                count: tag.problemsSolved,
              }))}
            />
          )}
          {data.tagProblemCounts.fundamental.length > 0 && (
            <SkillCategory
              title="Fundamental"
              skills={data.tagProblemCounts.fundamental.map((tag) => ({
                name: tag.tagName,
                count: tag.problemsSolved,
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({
  icon,
  label,
  value,
  lastWeek,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  lastWeek: string;
}) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-2 text-sm">
        {icon}
        <span className="text-[#9e9e9e]">{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
      <div className="text-[10px] text-[#9e9e9e] mt-1">
        Last week <span className="text-white">{lastWeek}</span>
      </div>
    </div>
  );
}

function LanguageItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="bg-[#3e3e3e] px-2 py-0.5 rounded text-[#9e9e9e]">
        {label}
      </span>
      <div className="flex gap-1">
        <span className="text-white font-bold">{value}</span>
        <span className="text-[#9e9e9e]">problems solved</span>
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; count: number }[];
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#9e9e9e] uppercase tracking-wider">
        <div className="w-1 h-1 rounded-full bg-orange-500" />
        {title}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-1 bg-[#3e3e3e50] hover:bg-[#3e3e3e] px-2 py-1 rounded-full text-xs text-white transition-colors cursor-pointer group"
          >
            <span className="text-[#9e9e9e] group-hover:text-white transition-colors">
              {skill.name}
            </span>
            <span className="text-[10px] text-[#9e9e9e]">x{skill.count}</span>
          </div>
        ))}
        <button className="text-[10px] text-[#9e9e9e] hover:text-white flex items-center gap-0.5 ml-1">
          Show more <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
