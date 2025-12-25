import api from "./main";

export interface RecentSolvedItem {
  title: string;
  slug: string;
  language: string;
  timeAgo: string;
}

export async function fetchLeetCodeRecentSolved(username: string, limit = 15) {
  if (!username) throw new Error("Username is required");

  const res = await api.get<RecentSolvedItem[]>("/api/leetcodeRecentSolved", {
    params: { username, limit },
  });

  return res.data;
}
