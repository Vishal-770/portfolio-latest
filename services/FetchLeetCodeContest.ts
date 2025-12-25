import api from "./main";

export interface LeetCodeContestResponse {
  rating: number | null;
  attended: number;
  globalRanking: number | null;
  totalParticipants: number | null;
}

export async function fetchLeetCodeContest(username: string) {
  if (!username) throw new Error("Username is required");

  const res = await api.get<LeetCodeContestResponse>("/api/leetcodeContest", {
    params: { username },
  });

  return res.data;
}
