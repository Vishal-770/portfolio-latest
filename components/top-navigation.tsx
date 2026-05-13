"use client";

import {
  Menu,
  Settings,
  Mic,
  HelpCircle,
  Grid3X3 as Grid3x3Gap,
  User,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const MicrosoftLogo = () => (
  <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
    <div className="bg-[#f25022] w-full h-full" />
    <div className="bg-[#7fbb00] w-full h-full" />
    <div className="bg-[#00a1f1] w-full h-full" />
    <div className="bg-[#ffb900] w-full h-full" />
  </div>
);

export function TopNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-card border-b border-border/50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo / Brand - Microsoft Style */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <MicrosoftLogo />
            <span className="font-semibold text-lg tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
              Portfolio
            </span>
          </Link>

          {/* Search bar - Edge style */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search portfolio..."
                className="w-full pl-10 pr-4 py-2 bg-[#f5f5f5] dark:bg-muted/20 border border-border/60 rounded-full text-sm text-foreground placeholder:text-muted-foreground hover:border-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <div
              className="p-2 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors cursor-default"
              title="Settings"
            >
              <Settings className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div
              className="hidden sm:flex p-2 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors cursor-default"
              title="Help"
            >
              <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
            </div>

            {/* Apps grid */}
            <div className="hidden md:block relative">
              <div
                className="p-2 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors cursor-default"
                title="Apps"
              >
                <Grid3x3Gap className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </div>

            {/* Profile */}
            <div className="ml-1 p-1.5 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors border border-border/60 hover:border-primary cursor-default">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </div>

            {/* Menu */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors md:hidden"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
