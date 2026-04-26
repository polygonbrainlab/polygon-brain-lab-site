interface Article {
  number: string;
  title: string;
  summary: string;
  tags: string[];
  status: "próximamente" | "publicado";
}

const articles: Article[] = [
  {
    number: "01",
    title: "Estimulación cognitiva no es poner fichas al azar",
    summary:
      "Diseñar una tarea cognitiva requiere criterio: objetivo claro, demanda específica, parámetros controlados y limitaciones honestas. Sin eso, es ruido con buenas intenciones.",
    tags: ["diseño de tareas", "metodología", "estimulación"],
    status: "próximamente",
  },
  {
    number: "02",
    title: "Apps de brain training: qué pueden y qué no pueden prometer",
    summary:
      "Ni la app más bonita garantiza transferencia a la vida diaria. Repasamos qué sabemos de verdad sobre entrenamiento cognitivo y por qué importa leer la letra pequeña.",
    tags: ["brain training", "evidencia", "crítica"],
    status: "próximamente",
  },
  {
    number: "03",
    title: "Neuroplasticidad sin humo",
    summary:
      "El cerebro cambia. Sí. Pero no de cualquier manera ni con cualquier cosa. Desmontamos los usos abusivos del concepto y aclaramos qué significa plasticity sin marketing.",
    tags: ["neuroplasticidad", "ciencia", "divulgación crítica"],
    status: "próximamente",
  },
  {
    number: "04",
    title: "De la ficha al prototipo: convertir un ejercicio en una mini app",
    summary:
      "Una guía práctica para pasar de una tarea cognitiva en papel a un prototipo digital sencillo. Sin código avanzado. Con toda la metodología que necesitas.",
    tags: ["prototipado", "herramientas", "maker"],
    status: "próximamente",
  },
];

export default function NeuroCritique() {
  return (
    <section
      id="neuro-critique"
      className="border-b border-wire bg-canvas py-20 sm:py-28"
    >
      <div className="section-container">
        {/* Header */}
        <div className="mb-14">
          <span className="label-tag mb-4 inline-block">neuro critique</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pensamiento crítico
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted">
            Artículos breves y rigurosos sobre límites, sesgos y uso responsable
            de tecnología cognitiva. Sin grandilocuencia ni pseudociencia.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleRow key={article.number} article={article} />
          ))}
        </div>

        {/* More soon */}
        <div className="mt-8 rounded-[10px] border border-wire border-dashed p-6 text-center">
          <p className="text-sm text-muted">
            Más artículos en camino.{" "}
            <span className="font-mono text-xs text-muted/60">
              — próximamente
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <div className="card group transition-all duration-150 hover:border-muted/30">
      <div className="flex items-start gap-5 flex-wrap sm:flex-nowrap">
        {/* Number */}
        <span className="shrink-0 font-mono text-xs text-muted/40 tracking-widest pt-0.5 w-6">
          {article.number}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 text-base font-semibold leading-snug tracking-tight text-ink">
            {article.title}
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-muted">
            {article.summary}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <span key={tag} className="label-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="shrink-0 flex items-start pt-0.5">
          <span className="label-tag whitespace-nowrap">{article.status}</span>
        </div>
      </div>
    </div>
  );
}
