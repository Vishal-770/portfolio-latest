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
      <div className="relative group"></div>
    </div>
  );
}
