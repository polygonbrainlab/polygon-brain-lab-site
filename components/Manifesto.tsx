export default function Manifesto() {
  return (
    <section className="border-b border-wire bg-canvas py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-[720px]">
          {/* Label */}
          <div className="mb-8">
            <span className="label-tag">manifiesto</span>
          </div>

          {/* Content */}
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              En torno al cerebro se ha construido un ecosistema de promesas que no se sostienen.
              Apps que entrenan sin evidencia. Plataformas que confunden juego con rehabilitación.
              Marketing que viaja más rápido que la ciencia.
            </p>

            <p>
              Polygon Brain Lab nace en la dirección contraria.
            </p>

            <p>
              Es un espacio para diseñar herramientas cognitivas reales, documentar lo que hacen
              y compartirlas con quien las necesita.
            </p>

            <div className="my-8 border-l-2 border-teal pl-6">
              <p className="text-base text-ink">
                Código abierto. Rigor metodológico. Estética limpia.
              </p>
              <p className="mt-1 font-mono text-xs tracking-wider text-teal uppercase">
                el cerebro no se hackea con trucos: se explora con método
              </p>
            </div>

            <p className="text-sm text-muted/80">
              Construido por profesionales clínicos y tecnológicos interesados en cognición,
              neuropsicología aplicada y herramientas que merezcan ser usadas.
            </p>
          </div>

          {/* Closing statement */}
          <div className="mt-12 pt-8 border-t border-wire">
            <p className="font-semibold text-ink text-lg tracking-tight">
              No vendemos milagros. Construimos herramientas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
