export function AboutCard() {
  return (
    <div className="bg-card border border-border/40 rounded-xl p-4 sm:p-5 shadow-xs">
      <p className="text-sm text-foreground/75 leading-relaxed mb-3">
        Full-stack developer with a strong focus on Web3, infrastructure, and
        developer tooling. I enjoy building things from the ground up — from
        smart contracts on EVM chains to high-performance Next.js applications.
      </p>
      <p className="text-sm text-foreground/60 leading-relaxed mb-3">
        When I&apos;m not writing code, I&apos;m usually deep in a terminal.
        Daily driving <span className="text-foreground/80 font-medium">Fedora Linux</span>{" "}
        and an unapologetic fan of the command line. Occasionally found cuddling
        my cats between late-night debugging sessions.
      </p>
      <p className="text-sm text-foreground/60 leading-relaxed">
        Open to collaborations in decentralized systems, Web3 infra, and
        anything that pushes the boundaries of what the web can do.
      </p>
    </div>
  );
}
