import api from "./main";

export interface GFGMinimalStats {
  totalSolved: number;
  codingScore: number;
  currentStreak: number;
  longestStreak: number;
  activeDays: number;
  instituteRank?: number | null;
}

export async function fetchGFGStats(
  username: string
): Promise<GFGMinimalStats> {
  if (!username) {
    throw new Error("Username is required");
  }

  const res = await api.get<GFGMinimalStats>("/api/gfg", {
    params: { username },
  });

  return res.data;
}
