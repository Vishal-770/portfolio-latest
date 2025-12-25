export function AboutCard() {
  return (
    <article className="bg-card border border-border/50 rounded-lg p-5 hover:border-border hover:shadow-sm transition-all duration-200">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-primary mb-2">About</h3>
        <div className="h-px bg-border/30"></div>
      </div>

      <p className="text-sm text-foreground/75 leading-relaxed mb-4">
        Full-stack developer passionate about building beautiful, performant web
        applications. Specialized in modern JavaScript frameworks, cloud
        technologies, and blockchain development.
      </p>

      <p className="text-xs text-foreground/60 leading-relaxed">
        Always learning, always building — from web2 apps to web3 integrations.
        Open to collaborations and interesting projects in decentralized systems
        and traditional web applications.
      </p>
    </article>
  );
}
