"use client";

import type React from "react";

interface TabNavigationProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  { id: "all", label: "All" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "leetcode", label: "LeetCode" },
  { id: "github", label: "GitHub" },
  { id: "hackathons", label: "Hackathons" },
  { id: "education", label: "Education" },
  { id: "socials", label: "Socials" },
  { id: "about", label: "About" },
];

export function TabNavigation({ activeTab, onChange }: TabNavigationProps) {
  return (
    <div className="sticky top-14 z-40 bg-white dark:bg-[#1b1b1b] border-b border-[#e5e5e5] dark:border-[#3b3b3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-[#0078d4] dark:text-[#4fc3f7]"
                  : "text-[#616161] dark:text-[#a0a0a0] hover:text-[#1a1a1a] dark:hover:text-white hover:bg-[#f5f5f5] dark:hover:bg-[#2a2a2a] rounded-md"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0078d4] dark:bg-[#4fc3f7]" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
