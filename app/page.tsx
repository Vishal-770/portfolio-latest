"use client";

import { useState } from "react";
import { TopNavigation } from "@/components/top-navigation";
import { TabNavigation } from "@/components/tab-navigation";

import { ResultsContainer } from "@/components/results-container";
import { ProfileSidebar } from "@/components/profile-sidebar";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <TopNavigation />

      <TabNavigation activeTab={activeTab} onChange={setActiveTab} />

      <main className="max-w-full mx-auto pt-2 sm:pt-3 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Main content area */}
          <div className="flex-1 min-w-0 order-2 lg:order-1">
            <div className="mt-6 sm:mt-8">
              <ResultsContainer activeTab={activeTab} />
            </div>
          </div>

          {/* Right sidebar with profile info - Shows first on mobile, on right on desktop */}
          <aside className="w-full lg:w-80 shrink-0 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 lg:pt-6 lg:max-h-[calc(100vh-6rem)] lg:overflow-auto lg:scrollbar-hide">
              <ProfileSidebar />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
