export default function Manifesto() {
  return (
    <section className="border-b border-wire bg-canvas py-14 sm:py-16">
      <div className="section-container">
        <div className="mx-auto max-w-[720px]">
          {/* Label */}
          <div className="mb-8">
            <span className="label-tag">manifiesto</span>
          </div>

          {/* Content */}
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              El brain training promete demasiado. Apps sin evidencia, plataformas que confunden
              juego con rehabilitación, marketing más rápido que la ciencia.
              Polygon Brain Lab va en sentido contrario: diseñar herramientas reales,
              documentar lo que hacen y compartirlas con quien las necesita.
            </p>

            <div className="my-6 border-l-2 border-teal pl-6">
              <p className="text-base text-ink">
                Código abierto. Rigor metodológico. Estética limpia.
              </p>
              <p className="mt-1 font-mono text-xs tracking-wider text-teal uppercase">
                el cerebro no se hackea con trucos: se explora con método
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
