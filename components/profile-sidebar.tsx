import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  MapPin,
  Mail,
  ChevronRight,
} from "lucide-react";
import { mail, socialLinks } from "@/constants/user_details";
import Image from "next/image";

// LeetCode Icon Component
const LeetCodeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

// GFG Icon Component
const GFGIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.292-.906c-.025-.118-.033-.235-.033-.353h2.62c.018.149.045.297.088.44a1.46 1.46 0 0 0 1.074 1.005 1.98 1.98 0 0 0 1.252-.07 1.41 1.41 0 0 0 .549-.38c.16-.18.27-.39.322-.623a1.93 1.93 0 0 0-.07-.943 1.63 1.63 0 0 0-.49-.717c-.223-.19-.49-.32-.778-.378a3.21 3.21 0 0 0-.938-.05c-.07 0-.137.01-.207.01-.137 0-.276.01-.412.01v-2.07c.095 0 .189 0 .284.01.129 0 .257.01.385.01.275-.01.55-.04.817-.1.258-.06.503-.16.72-.306.205-.14.368-.332.473-.56.107-.242.16-.508.154-.777a1.47 1.47 0 0 0-.14-.634 1.31 1.31 0 0 0-.38-.478 1.57 1.57 0 0 0-.58-.286 2.19 2.19 0 0 0-.73-.095c-.31.007-.617.07-.9.19-.275.115-.518.296-.71.527a1.59 1.59 0 0 0-.362.867h-2.537a3.43 3.43 0 0 1 .424-1.516 3.81 3.81 0 0 1 1.123-1.229 4.42 4.42 0 0 1 1.52-.698A6.07 6.07 0 0 1 17.86 3a5.41 5.41 0 0 1 1.535.217c.468.143.9.37 1.27.669.368.295.665.668.87 1.095.208.44.317.924.316 1.415a2.93 2.93 0 0 1-.373 1.49c-.25.45-.623.82-1.073 1.07a3.1 3.1 0 0 1 1.294.97c.326.43.52.936.563 1.467a3.02 3.02 0 0 1-.314 1.616l-.001.005zM6.15 14.81a3.79 3.79 0 0 1-1.104-.695 3.02 3.02 0 0 1-.565-.745 3.02 3.02 0 0 1-.315-1.616c.043-.53.237-1.037.563-1.467a3.1 3.1 0 0 1 1.294-.97 2.78 2.78 0 0 1-1.073-1.07 2.93 2.93 0 0 1-.373-1.49c-.001-.49.108-.974.316-1.415.205-.427.502-.8.87-1.095a4.1 4.1 0 0 1 1.27-.669A5.41 5.41 0 0 1 8.568 3c.593 0 1.183.08 1.75.238.555.157 1.07.417 1.52.698.452.281.832.646 1.123 1.229.293.586.424 1.05.424 1.516h-2.537a1.59 1.59 0 0 0-.362-.867 1.76 1.76 0 0 0-.71-.527 2.35 2.35 0 0 0-.9-.19c-.26-.01-.52.023-.768.095a1.57 1.57 0 0 0-.58.286c-.16.133-.288.3-.38.478a1.47 1.47 0 0 0-.14.634c-.006.269.047.535.154.777.105.228.268.42.473.56.217.146.462.246.72.306.267.06.542.09.817.1.128 0 .256-.01.385-.01.095-.01.189-.01.284-.01v2.07c-.136 0-.275-.01-.412-.01-.07 0-.137-.01-.207-.01a3.21 3.21 0 0 0-.938.05c-.288.058-.555.189-.778.378-.212.19-.38.43-.49.717a1.93 1.93 0 0 0-.07.943c.052.233.161.45.322.623.153.164.338.294.549.38.408.168.863.19 1.286.062a1.46 1.46 0 0 0 1.074-1.005c.043-.143.07-.291.088-.44h2.62c0 .118-.008.235-.033.353a3.57 3.57 0 0 1-.292.906 3.79 3.79 0 0 1-2.135 2.078 4.51 4.51 0 0 1-3.116.016z" />
  </svg>
);

export function ProfileSidebar() {
  return (
    <div className="space-y-4 sm:space-y-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto scrollbar-hide lg:pb-6">
      {/* Profile Card */}
      <div className="bg-card border border-border/50 rounded-lg p-4 sm:p-5 hover:shadow-sm transition-all">
        {/* Profile Image */}
        <div className="mb-4 sm:mb-5 flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-primary/70 to-accent/50 rounded-full flex items-center justify-center shadow-md border-2 border-border/30">
            <Image
              src="/image.png"
              alt="Profile Image"
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h2 className="text-base font-bold text-foreground text-center mb-1">
          Vishal
        </h2>
        <p className="text-xs font-semibold text-primary text-center mb-3 sm:mb-4 uppercase tracking-wider">
          Developer
        </p>

        {/* Bio */}
        <p className="text-xs text-foreground/70 text-center mb-3 sm:mb-4 leading-relaxed">
          Crafting elegant interfaces with robust engineering
        </p>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-3 sm:mb-4"></div>

        {/* Contact info */}
        <div className="space-y-2.5 sm:space-y-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs text-foreground/70">
            <MapPin
              className="w-4 h-4 text-primary/60 shrink-0"
              strokeWidth={2}
            />
            <span>Chennai, India</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs text-foreground/70">
            <Mail
              className="w-4 h-4 text-primary/60 shrink-0"
              strokeWidth={2}
            />
            <a
              href="mailto:vishalwelx18@gmail.com"
              className="text-primary hover:underline hover:text-primary/80 transition-colors truncate"
            >
              {mail}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-3 sm:mb-4"></div>

        {/* Social Links */}
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">
          Connect
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 border border-border/60 text-foreground hover:text-foreground hover:bg-[#333]/20 dark:hover:bg-[#f0f6fc]/10 hover:border-border/80 transition-all duration-200"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 border border-border/60 text-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-border/80 transition-all duration-200"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 border border-border/60 text-foreground hover:text-foreground hover:bg-foreground/10 hover:border-border/80 transition-all duration-200"
            aria-label="Twitter"
            title="Twitter / X"
          >
            <Twitter className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 border border-border/60 text-foreground hover:text-[#FFA116] hover:bg-[#FFA116]/10 hover:border-border/80 transition-all duration-200"
            aria-label="LeetCode"
            title="LeetCode"
          >
            <LeetCodeIcon />
          </a>
          <a
            href={socialLinks.geeks_forgeeks}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 border border-border/60 text-foreground hover:text-[#2F8D46] hover:bg-[#2F8D46]/10 hover:border-border/80 transition-all duration-200"
            aria-label="GeeksForGeeks"
            title="GeeksForGeeks"
          >
            <GFGIcon />
          </a>
          <a
            href={socialLinks.mail}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 border border-border/60 text-foreground hover:text-red-500 hover:bg-red-500/10 hover:border-border/80 transition-all duration-200"
            aria-label="Email"
            title="Email"
          >
            <Mail className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-3 sm:mb-4"></div>

        {/* Quick Facts */}
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">
          Quick Facts
        </p>
        <div className="space-y-2 sm:space-y-3 text-xs">
          <div className="flex justify-between items-start gap-2">
            <span className="text-foreground/60">Currently Learning</span>
            <span className="font-medium text-foreground text-right">Web3</span>
          </div>
          <div className="flex justify-between items-start gap-2">
            <span className="text-foreground/60">Favorite Stack</span>
            <span className="font-medium text-foreground text-right">
              Next.js + TS
            </span>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-muted/30 border border-border/50 rounded-lg p-3 sm:p-4 hover:bg-muted/50 hover:border-border/70 transition-all">
        <p className="text-xs font-semibold text-foreground/70 mb-3 sm:mb-4 uppercase tracking-widest">
          Portfolio Overview
        </p>
        <div className="space-y-2 sm:space-y-2.5 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-border/30">
            <span className="text-foreground/60">Total Projects</span>
            <span className="font-bold text-foreground">10+</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border/30">
            <span className="text-foreground/60">Technologies</span>
            <span className="font-bold text-foreground">20+</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-foreground/60">Experience</span>
            <span className="font-bold text-foreground">2+ yrs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
