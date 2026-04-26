export default function ManifestoEn() {
  return (
    <section className="border-b border-wire bg-canvas py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-[720px]">
          {/* Label */}
          <div className="mb-8">
            <span className="label-tag">manifesto</span>
          </div>

          {/* Content */}
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              An ecosystem of promises has been built around the brain —promises
              that don&apos;t hold up. Apps that train without evidence. Platforms that
              mistake gaming for rehabilitation. Marketing that travels faster
              than science.
            </p>

            <p>
              Polygon Brain Lab moves in the opposite direction.
            </p>

            <p>
              A space to design real cognitive tools, document what they actually
              do, and share them with those who need them.
            </p>

            <div className="my-8 border-l-2 border-teal pl-6">
              <p className="text-base text-ink">
                Open code. Methodological rigour. Clean aesthetics.
              </p>
              <p className="mt-1 font-mono text-xs tracking-wider text-teal uppercase">
                the brain isn&apos;t hacked with tricks: it&apos;s explored with method
              </p>
            </div>

            <p className="text-sm text-muted/80">
              Built by clinical and technology professionals interested in cognition,
              applied neuropsychology, and tools that deserve to be used.
            </p>
          </div>

          {/* Closing statement */}
          <div className="mt-12 pt-8 border-t border-wire">
            <p className="font-semibold text-ink text-lg tracking-tight">
              We don&apos;t sell miracles. We build tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
