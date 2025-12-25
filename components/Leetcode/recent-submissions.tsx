import type React from "react";
import {
  FileText,
  List,
  CheckSquare,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function RecentSubmissions() {
  const submissions = [
    { title: "Network Delay Time", time: "11 hours ago" },
    { title: "Cheapest Flights Within K Stops", time: "11 hours ago" },
    { title: "Path With Minimum Effort", time: "11 hours ago" },
    { title: "Shortest Path in Binary Matrix", time: "3 days ago" },
    { title: "Find Eventual Safe States", time: "7 days ago" },
    { title: "Course Schedule II", time: "7 days ago" },
    { title: "Course Schedule", time: "7 days ago" },
    { title: "Word Ladder II", time: "11 days ago" },
    { title: "Count Square Sum Triples", time: "17 days ago" },
    { title: "Count Odd Numbers in an Interval Range", time: "18 days ago" },
  ];

  const extendedSubmissions = [
    { title: "Network Delay Time", time: "11 hours ago" },
    { title: "Cheapest Flights Within K Stops", time: "11 hours ago" },
    { title: "Path With Minimum Effort", time: "11 hours ago" },
    { title: "Shortest Path in Binary Matrix", time: "3 days ago" },
    { title: "First Eventual Safe States", time: "7 days ago" },
    { title: "Course Schedule II", time: "7 days ago" },
    { title: "Course Schedule", time: "7 days ago" },
    { title: "Word Ladder II", time: "11 days ago" },
    { title: "Count Square Sum Triples", time: "17 days ago" },
    { title: "Count Odd Numbers in an Interval Range", time: "18 days ago" },
    { title: "Count Partitions with Even Sum Difference", time: "20 days ago" },
    { title: "Count Collisions on a Road", time: "21 days ago" },
    { title: "Word Ladder", time: "22 days ago" },
    { title: "Number of Enclaves", time: "23 days ago" },
    { title: "Surrounded Regions", time: "23 days ago" },
  ];

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
        {extendedSubmissions.map((sub, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 py-3 hover:bg-[#3e3e3e30] transition-colors cursor-pointer ${
              i % 2 === 0 ? "bg-transparent" : "bg-[#3e3e3e10]"
            }`}
          >
            <span className="text-sm font-medium text-white">{sub.title}</span>
            <span className="text-xs text-[#9e9e9e] font-medium">
              {sub.time}
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
