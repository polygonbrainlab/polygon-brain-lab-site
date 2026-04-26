export default function OpenLab() {
  return (
    <section
      id="open-lab"
      className="border-b border-wire bg-surface py-20 sm:py-28"
    >
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <span className="label-tag mb-4 inline-block">open lab</span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Open-source con criterio
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted">
              No abrimos cosas para parecer generosos. Abrimos lo que aporta valor
              real: código, documentación, prototipos y experimentos que merezcan ser usados.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted">
              El open-source es nuestro motor de confianza, visibilidad y comunidad.
              No un argumento de marketing.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <GitHubIcon className="h-4 w-4" />
                Ver GitHub
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Roadmap público
              </a>
            </div>
          </div>

          {/* Right: what's open */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted/60 mb-4">
              qué abrimos ahora
            </div>
            {openItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-[10px] border border-wire bg-sheet px-4 py-3"
              >
                <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-teal/60" />
                <div>
                  <div className="text-sm font-medium text-ink">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted">{item.desc}</div>
                </div>
                <span className="ml-auto shrink-0 label-tag">{item.status}</span>
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-wire">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted/60 mb-3">
                filosofía
              </div>
              <p className="text-sm italic text-muted leading-relaxed">
                "Núcleo abierto + capa profesional de pago. Open-source como motor de
                confianza, comunidad, visibilidad y validación."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const openItems = [
  {
    label: "Mini apps cognitivas",
    desc: "Stroop, cancelación visual, memoria espacial, Go/No-Go",
    status: "roadmap",
  },
  {
    label: "Generadores básicos",
    desc: "Categorías semánticas, secuencias, búsqueda visual",
    status: "roadmap",
  },
  {
    label: "Documentación y tutoriales",
    desc: "Instrucciones claras, variables, limitaciones, avisos éticos",
    status: "en proceso",
  },
  {
    label: "Prototipos WebXR",
    desc: "Experimentos en navegador, sin instalación",
    status: "roadmap",
  },
  {
    label: "Artículos críticos",
    desc: "Límites del brain training, IA y cognición, neuroplasticidad sin humo",
    status: "próximamente",
  },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
