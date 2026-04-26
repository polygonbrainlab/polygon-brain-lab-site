import PolygonDecoration from "../PolygonDecoration";

export default function CTAEn() {
  return (
    <section className="relative overflow-hidden border-b border-wire bg-canvas py-16 sm:py-20">
      {/* Subtle decoration */}
      <PolygonDecoration
        variant="small"
        className="absolute -right-12 top-1/2 -translate-y-1/2 h-64 w-64 opacity-[0.04] text-ink"
      />

      <div className="section-container relative">
        <div className="mx-auto max-w-[720px] text-center">
          {/* Label */}
          <div className="mb-6 flex justify-center">
            <span className="label-tag">join the lab</span>
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
            A living repository.{" "}
            <span className="text-teal">To build, not to impress.</span>
          </h2>

          <p className="mb-10 text-base leading-relaxed text-muted sm:text-lg">
            Explore the project, follow the roadmap, or contribute via GitHub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#tools" className="btn-primary">
              Explore tools
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          {/* Closing line */}
          <p className="mt-12 font-mono text-xs tracking-widest text-muted/50 uppercase">
            We don&apos;t sell miracles. We build tools.
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
