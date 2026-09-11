import api from "./main";

export interface GFGHeatmapResponse {
  calendar: Record<string, number>;
  totalSubmissions: number;
  activeDays: number;
  currentStreak: number;
  longestStreak: number;
}

export async function fetchGFGHeatmap(
  username: string
): Promise<GFGHeatmapResponse> {
  if (!username) {
    throw new Error("Username is required");
  }

  const res = await api.get<GFGHeatmapResponse>("/api/gfgHeatMap", {
    params: { username },
  });

  return res.data;
}
