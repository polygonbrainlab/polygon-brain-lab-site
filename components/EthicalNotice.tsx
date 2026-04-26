export default function EthicalNotice() {
  return (
    <section className="border-b border-wire bg-surface py-14 sm:py-16">
      <div className="section-container">
        <div className="ethical-block">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="shrink-0 mt-0.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-teal/30 bg-teal/5 text-teal">
                <InfoIcon className="h-4 w-4" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-teal/80">
                aviso ético
              </div>
              <p className="mb-3 text-sm font-medium leading-relaxed text-ink">
                Herramienta experimental y educativa. No sustituye evaluación,
                diagnóstico ni intervención profesional.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Estimulación no es rehabilitación. Tecnología no es evidencia.
                Usamos estas herramientas con criterio, y esperamos que tú también.
                Polygon Brain Lab proporciona recursos de apoyo para profesionales,
                no intervención clínica directa.
              </p>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="label-tag">experimental</span>
                <span className="label-tag">educativo</span>
                <span className="label-tag">no clínico</span>
                <span className="label-tag">open-source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  );
}
