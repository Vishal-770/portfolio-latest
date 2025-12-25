import api from "./main";
export interface LeetCodeMinimalStats {
  totalSolved: number;
  submissionsLastYear: number;
  activeDays: number;
}
export async function fetchLeetCodeStats(
  username: string
): Promise<LeetCodeMinimalStats> {
  if (!username) {
    throw new Error("Username is required");
  }

  const res = await api.get<LeetCodeMinimalStats>("/api/leetcode", {
    params: { username },
  });

  return res.data;
}
