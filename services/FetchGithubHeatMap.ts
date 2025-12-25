import api from "./main";

export interface LeetCodeHeatmapResponse {
  calendar: Record<string, number>;
  totalSubmissions: number;
  activeDays: number;
}

export async function fetchGithubHeatmap(username: string) {
  if (!username) throw new Error("Username is required");

  const res = await api.get<LeetCodeHeatmapResponse>("/api/GithubHeatMap", {
    params: { username },
  });

  return res.data;
}
