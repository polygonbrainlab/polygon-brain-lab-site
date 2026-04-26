export default function Positioning() {
  return (
    <section className="border-b border-wire bg-surface py-16 sm:py-20">
      <div className="section-container">
        <div className="max-w-[720px]">
          {/* Statement */}
          <p className="mb-6 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            No somos una clínica.{" "}
            <span className="text-muted">No somos una startup de IA.</span>{" "}
            Somos un laboratorio.
          </p>

          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Polygon Brain Lab nace para diseñar, probar y compartir herramientas cognitivas
            útiles, bien documentadas y conceptualmente sólidas.
            Sin neurohumo. Sin promesas vacías.
            Sin confundir estética con evidencia.
          </p>
        </div>

        {/* Divider with label */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-wire" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
            estimulación ≠ rehabilitación · tecnología ≠ evidencia
          </span>
          <div className="h-px flex-1 bg-wire" />
        </div>
      </div>
    </section>
  );
}
