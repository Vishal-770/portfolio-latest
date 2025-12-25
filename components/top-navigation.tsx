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

export function TopNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-[#1b1b1b] border-b border-[#e5e5e5] dark:border-[#3b3b3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-[#0078d4] flex items-center justify-center">
                <span className="text-sm font-bold text-white">V</span>
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-[#1a1a1a] dark:text-white">
                Vishal
              </span>
            </Link>
          </div>

          {/* Search bar - Edge style */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#616161] dark:text-[#a0a0a0] group-focus-within:text-[#0078d4] transition-colors">
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
                className="w-full pl-10 pr-4 py-2 bg-[#f5f5f5] dark:bg-[#2d2d2d] border border-[#e5e5e5] dark:border-[#404040] rounded-full text-sm text-[#1a1a1a] dark:text-white placeholder:text-[#767676] dark:placeholder:text-[#a0a0a0] hover:border-[#0078d4] focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-[#0078d4]/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#2d2d2d] rounded-full text-[#616161] dark:text-[#a0a0a0] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
              title="Settings"
            >
              <Settings className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              className="hidden sm:flex p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#2d2d2d] rounded-full text-[#616161] dark:text-[#a0a0a0] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
              title="Help"
            >
              <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Apps grid */}
            <div className="hidden md:block relative">
              <button
                className="p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#2d2d2d] rounded-full text-[#616161] dark:text-[#a0a0a0] hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
                title="Apps"
              >
                <Grid3x3Gap className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Profile */}
            <button className="ml-1 p-1.5 hover:bg-[#f5f5f5] dark:hover:bg-[#2d2d2d] rounded-full text-[#616161] dark:text-[#a0a0a0] hover:text-[#1a1a1a] dark:hover:text-white transition-colors border border-[#e5e5e5] dark:border-[#404040] hover:border-[#0078d4]">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Menu */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-[#f5f5f5] dark:hover:bg-[#2d2d2d] rounded-full text-[#616161] dark:text-[#a0a0a0] hover:text-[#1a1a1a] dark:hover:text-white transition-colors md:hidden"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
