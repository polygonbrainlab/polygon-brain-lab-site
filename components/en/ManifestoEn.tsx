export default function ManifestoEn() {
  return (
    <section className="border-b border-wire bg-canvas py-14 sm:py-16">
      <div className="section-container">
        <div className="mx-auto max-w-[720px]">
          {/* Label */}
          <div className="mb-8">
            <span className="label-tag">manifesto</span>
          </div>

          {/* Content */}
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Brain training overpromises. Apps without evidence, platforms that mistake
              gaming for rehabilitation, marketing that travels faster than science.
              Polygon Brain Lab moves in the opposite direction: design real tools,
              document what they do, and share them with those who need them.
            </p>

            <div className="my-6 border-l-2 border-teal pl-6">
              <p className="text-base text-ink">
                Open code. Methodological rigour. Clean aesthetics.
              </p>
              <p className="mt-1 font-mono text-xs tracking-wider text-teal uppercase">
                the brain isn&apos;t hacked with tricks: it&apos;s explored with method
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
