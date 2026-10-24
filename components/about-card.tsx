export function AboutCard() {
  return (
    <div className="py-2">
      {/* Section header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-foreground">About</h2>
      </div>
      <div className="h-px bg-border/40 mb-3" />

      <div className="space-y-3">
        <p className="text-sm text-foreground/80 leading-relaxed">
          Software engineer focused on backend systems, system design, and developer tooling, primarily working with Rust and TypeScript.
        </p>

        <p className="text-sm text-foreground/70 leading-relaxed">
          I enjoy building fast, reliable infrastructure, distributed systems, and low-level performance-critical tools. Alongside backend architecture, I also have an active interest in Web3 and decentralized protocols.
        </p>
      </div>
    </div>
  );
}