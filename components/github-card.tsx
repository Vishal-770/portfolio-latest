import { Github } from "lucide-react";
import { socialLinks } from "@/constants/user_details";
import Link from "next/link";

export function GitHubCard() {
  return (
    <article className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-[#24292f] text-white">
          <Github className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">GitHub</h3>
          <p className="text-xs text-foreground/70">
            Open-source projects and contributions
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-3 py-2 rounded-md bg-muted/40 hover:bg-muted/60 border border-border/30"
        >
          <span className="text-sm font-medium">Vishal-770</span>
          <span className="text-xs text-foreground/60">View profile</span>
        </Link>
        <div className="text-xs text-foreground/60">
          Recent projects, stars, and contributions are linked above.
        </div>
      </div>
    </article>
  );
}

export default GitHubCard;
