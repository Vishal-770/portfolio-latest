"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchLeetCodeContest } from "@/services/FetchLeetCodeContest";
import { Leetcode_Username } from "@/constants/user_details";
import { Skeleton } from "@/components/ui/skeleton";

export function ContestCard() {
  const { data, isLoading } = useQuery({
    queryKey: ["leetcode-contest", Leetcode_Username],
    queryFn: () => fetchLeetCodeContest(Leetcode_Username),
  });

  if (isLoading || !data) {
    return (
      <Card className="bg-[#282828] border-none text-white overflow-hidden h-full">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-xs text-[#9e9e9e] font-medium">
                Contest Rating
              </p>
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="text-right">
              <p className="text-xs text-[#9e9e9e] font-medium">
                Global Ranking
              </p>
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="text-right">
              <p className="text-xs text-[#9e9e9e] font-medium">Attended</p>
              <Skeleton className="h-4 w-6" />
            </div>
          </div>

          <div className="relative h-24 flex flex-col justify-end">
            <Skeleton className="h-6 w-24 mx-auto" />
            <p className="text-center text-[10px] text-[#9e9e9e]">—</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const rating = data.rating ?? 0;
  const attended = data.attended ?? 0;
  const globalRanking = data.globalRanking ?? null;
  const totalParticipants = data.totalParticipants ?? null;

  return (
    <Card className="bg-[#282828] border-none text-white overflow-hidden h-full">
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs text-[#9e9e9e] font-medium">Contest Rating</p>
            <p className="text-2xl font-bold">{Math.round(rating)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#9e9e9e] font-medium">Global Ranking</p>
            <p className="text-sm font-bold">
              {globalRanking ? globalRanking.toLocaleString() : "—"}
              <span className="text-[#9e9e9e] font-normal text-[10px]">
                /{totalParticipants ? totalParticipants.toLocaleString() : "—"}
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#9e9e9e] font-medium">Attended</p>
            <p className="text-sm font-bold">{attended}</p>
          </div>
        </div>

        {/* Graph Placeholder */}
        <div className="relative h-24 flex flex-col justify-end">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#3e3e3e] px-2 py-0.5 rounded text-[10px] text-[#9e9e9e]">
            {Math.round(rating)}
          </div>
          <div className="w-full h-px bg-orange-500 mb-8 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
          </div>
          <p className="text-center text-[10px] text-[#9e9e9e]">Sept 2025</p>
        </div>
      </CardContent>
    </Card>
  );
}
