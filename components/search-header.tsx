"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary/60 pointer-events-none transition-colors duration-200">
          <Search className="w-4 h-4" strokeWidth={2} />
        </div>
        <Input
          type="text"
          placeholder="Search my work…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 bg-card border border-border/60 rounded-full shadow-xs hover:shadow-sm hover:border-border hover:bg-card focus:shadow-md focus:border-primary focus:outline-none transition-all duration-200 text-sm text-foreground placeholder:text-muted-foreground/60"
        />
      </div>
    </div>
  );
}
