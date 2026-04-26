interface Article {
  number: string;
  title: string;
  summary: string;
  tags: string[];
  status: string;
}

const articles: Article[] = [
  {
    number: "01",
    title: "Cognitive stimulation isn't random task placement",
    summary:
      "Designing a cognitive task requires judgment: clear objective, specific demand, controlled parameters, and honest limitations. Without that, it's noise with good intentions.",
    tags: ["task design", "methodology", "stimulation"],
    status: "coming soon",
  },
  {
    number: "02",
    title: "Brain training apps: what they can and can't promise",
    summary:
      "No app, however polished, guarantees transfer to daily life. We review what we actually know about cognitive training and why reading the fine print matters.",
    tags: ["brain training", "evidence", "critique"],
    status: "coming soon",
  },
  {
    number: "03",
    title: "Neuroplasticity without the hype",
    summary:
      "The brain changes. Yes. But not in any direction, or through anything. We dismantle abusive uses of the concept and clarify what plasticity means without the marketing.",
    tags: ["neuroplasticity", "science", "critical review"],
    status: "coming soon",
  },
  {
    number: "04",
    title: "From worksheet to prototype: turning an exercise into a mini app",
    summary:
      "A practical guide to going from a paper-based cognitive task to a simple digital prototype. No advanced code. Full methodology included.",
    tags: ["prototyping", "tools", "maker"],
    status: "coming soon",
  },
];

export default function NeuroCritiqueEn() {
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
            Critical thinking
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted">
            Short, rigorous articles on limits, biases, and responsible use
            of cognitive technology. No grandiosity, no pseudoscience.
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
            More articles in the pipeline.{" "}
            <span className="font-mono text-xs text-muted/60">
              — coming soon
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
