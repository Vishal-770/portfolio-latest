import api from "./main";

export interface LeetCodeSolvedResponse {
  solved: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
  };
  totalProblems: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
  };
  attempting: number;
}

export async function fetchLeetCodeSolved(
  username: string
): Promise<LeetCodeSolvedResponse> {
  if (!username) throw new Error("Username is required");

  const res = await api.get<LeetCodeSolvedResponse>("/api/leetcodeSolved", {
    params: { username },
  });

  return res.data;
}
