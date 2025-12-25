import axios from "axios";

export interface LeetCodeProfile {
  reputation: number;
  reputationDiff: number;
  solutionCount: number;
  solutionCountDiff: number;
  postViewCount: number;
  postViewCountDiff: number;
  categoryDiscussCount: number;
  categoryDiscussCountDiff: number;
  ranking?: number;
}

export interface LanguageProblemCount {
  languageName: string;
  problemsSolved: number;
}

export interface TagProblemCount {
  tagName: string;
  problemsSolved: number;
}

export interface TagProblemCounts {
  advanced: TagProblemCount[];
  intermediate: TagProblemCount[];
  fundamental: TagProblemCount[];
}

export interface LeetCodeProfileData {
  profile: LeetCodeProfile;
  languageProblemCount: LanguageProblemCount[];
  tagProblemCounts: TagProblemCounts;
}

export async function fetchLeetCodeProfile(
  username: string
): Promise<LeetCodeProfileData> {
  if (!username) {
    throw new Error("Username is required");
  }

  const res = await axios.get<{ data: { matchedUser: LeetCodeProfileData } }>(
    "/api/leetcode/profile",
    {
      params: { username },
    }
  );

  return res.data.data.matchedUser;
}
