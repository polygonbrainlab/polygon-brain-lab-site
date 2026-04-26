import PolygonDecoration from "./PolygonDecoration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-wire bg-canvas hero-bg">
      {/* Subtle polygon decoration — top right */}
      <PolygonDecoration className="absolute -right-16 -top-16 h-80 w-80 opacity-[0.035] text-ink" />
      {/* Subtle polygon decoration — bottom left */}
      <PolygonDecoration
        variant="small"
        className="absolute -bottom-8 -left-8 h-48 w-48 opacity-[0.025] text-ink"
      />

      <div className="section-container relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-[720px]">
          {/* Labels */}
          <div className="mb-6 flex items-center gap-3">
            <span className="label-tag-accent">laboratorio abierto</span>
            <span className="label-tag">v0.1 — beta</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl text-balance">
            Hackers del cerebro.{" "}
            <span className="text-teal">Con método.</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Herramientas cognitivas reales, documentadas con honestidad.
            Para profesionales y makers que prefieren construir antes que prometer.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="#tools" className="btn-primary">
              Explorar herramientas
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon className="h-4 w-4" />
              Ver en GitHub
            </a>
          </div>

          {/* Subtle manifesto line */}
          <p className="mt-12 font-mono text-xs tracking-widest text-muted/60 uppercase">
            No vendemos milagros. Construimos herramientas.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
