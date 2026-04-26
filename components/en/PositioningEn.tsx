export default function PositioningEn() {
  return (
    <section className="border-b border-wire bg-surface py-16 sm:py-20">
      <div className="section-container">
        <div className="max-w-[720px]">
          {/* Statement */}
          <p className="mb-6 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            We&apos;re not a clinic.{" "}
            <span className="text-muted">We&apos;re not an AI startup.</span>{" "}
            We&apos;re a lab.
          </p>

          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Polygon Brain Lab was built to design, test, and share cognitive tools
            that are genuinely useful, well-documented, and conceptually sound.
            No neuro-hype. No empty promises.
            No mistaking aesthetics for evidence.
          </p>
        </div>

        {/* Divider with label */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-wire" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
            stimulation ≠ rehabilitation · technology ≠ evidence
          </span>
          <div className="h-px flex-1 bg-wire" />
        </div>
      </div>
    </section>
  );
}
