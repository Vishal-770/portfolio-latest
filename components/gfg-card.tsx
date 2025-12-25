import { Code, Star, Trophy, Flame } from "lucide-react";

export function GFGCard() {
  const stats = {
    codingScore: 1250,
    problemsSolved: 280,
    contestRating: 1680,
    streak: 45,
    instituteRank: 15,
  };

  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:border-border hover:shadow-sm transition-all duration-200">
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
        <span className="text-[#2F8D46] font-medium">geeksforgeeks.org</span>
        <span className="text-border/50">›</span>
        <span>user/profile</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-[#2F8D46]">
          GeeksForGeeks Progress
        </h2>
        <a
          href="https://www.geeksforgeeks.org/user/vishalwelx18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          View Profile →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
        <div className="bg-[#2F8D46]/5 rounded p-2 sm:p-3 text-center border border-[#2F8D46]/20 hover:bg-[#2F8D46]/10 hover:border-[#2F8D46]/30 transition-all cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F8D46] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.codingScore}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Score
          </div>
        </div>

        <div className="bg-[#2F8D46]/5 rounded p-2 sm:p-3 text-center border border-[#2F8D46]/20 hover:bg-[#2F8D46]/10 hover:border-[#2F8D46]/30 transition-all cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F8D46] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.problemsSolved}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Problems
          </div>
        </div>

        <div className="bg-[#2F8D46]/5 rounded p-2 sm:p-3 text-center border border-[#2F8D46]/20 hover:bg-[#2F8D46]/10 hover:border-[#2F8D46]/30 transition-all cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F8D46] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.contestRating}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Rating
          </div>
        </div>

        <div className="bg-[#2F8D46]/5 rounded p-2 sm:p-3 text-center border border-[#2F8D46]/20 hover:bg-[#2F8D46]/10 hover:border-[#2F8D46]/30 transition-all cursor-pointer group">
          <div className="flex justify-center mb-1 sm:mb-2">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-lg sm:text-xl font-bold text-foreground">
            {stats.streak}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 font-medium">
            Streak
          </div>
        </div>
      </div>

      {/* Difficulty breakdown */}
      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-muted-foreground">
            Easy: <span className="font-medium text-foreground">120</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="text-muted-foreground">
            Medium: <span className="font-medium text-foreground">130</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="text-muted-foreground">
            Hard: <span className="font-medium text-foreground">30</span>
          </span>
        </div>
      </div>
    </article>
  );
}
