"use client";
import { Card, CardContent } from "@/components/ui/card";

export function DifficultyRing() {
  return (
    <Card className="bg-[#282828] border-none text-white h-full">
      <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Circular Progress */}
        <div className="relative flex flex-col items-center justify-center pt-2">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="#3e3e3e"
                strokeWidth="3"
                fill="none"
              />
              {/* Easy Progress */}
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="#00b8a3"
                strokeWidth="4"
                fill="none"
                strokeDasharray="364"
                strokeDashoffset={364 - 364 * (40 / 3787)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              {/* Med Progress */}
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="#ffc01e"
                strokeWidth="4"
                fill="none"
                strokeDasharray="364"
                strokeDashoffset={364 - 364 * (43 / 1974)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              {/* Hard Progress */}
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="#ef4743"
                strokeWidth="4"
                fill="none"
                strokeDasharray="364"
                strokeDashoffset={364 - 364 * (7 / 895)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold leading-none">90</span>
              <span className="text-[10px] text-[#9e9e9e] mt-0.5">/3787</span>
              <span className="text-[11px] text-[#00b8a3] flex items-center gap-1 font-medium mt-1">
                <span className="text-xs">✓</span> Solved
              </span>
            </div>
          </div>
          <div className="text-[10px] text-[#9e9e9e] mt-4 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ef4743]" />5
            Attempting
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="flex-1 w-full max-w-[200px] space-y-3">
          <DifficultyItem
            label="Easy"
            solved={40}
            total={918}
            color="#00b8a3"
          />
          <DifficultyItem
            label="Med."
            solved={43}
            total={1974}
            color="#ffc01e"
          />
          <DifficultyItem label="Hard" solved={7} total={895} color="#ef4743" />
        </div>
      </CardContent>
    </Card>
  );
}

function DifficultyItem({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-end">
        <span className="text-xs font-medium text-[#9e9e9e]">{label}</span>
        <div className="text-xs font-bold text-white">
          {solved}
          <span className="text-[#9e9e9e] font-normal text-[10px] ml-0.5">
            /{total}
          </span>
        </div>
      </div>
      <div className="h-1 w-full bg-[#3e3e3e] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            backgroundColor: color,
            width: `${(solved / total) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
