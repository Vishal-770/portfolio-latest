export function AboutCard() {
  return (
    <div className="bg-card border border-border/40 rounded-xl p-4 sm:p-5 shadow-xs">
      <p className="text-sm text-foreground/75 leading-relaxed mb-3">
        I am a software engineer focused on decentralized systems, infrastructure, and tools for developers. 
        I work across the stack, writing smart contracts on EVM chains, designing APIs, and building clean web interfaces using Next.js.
      </p>
      <p className="text-sm text-foreground/60 leading-relaxed mb-3">
        I build everything from the command line, daily driving Fedora Linux. 
        When I am not coding, I am usually hanging out with my cats.
      </p>
      <p className="text-sm text-foreground/60 leading-relaxed">
        Always interested in collaborating on Web3 core infrastructure, developer experience improvements, or new decentralized platforms.
      </p>
    </div>
  );
}
