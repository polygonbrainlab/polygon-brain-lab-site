interface ValueBlock {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const blocks: ValueBlock[] = [
  {
    number: "01",
    title: "Herramientas que hacen lo que dicen",
    description:
      "Mini apps cognitivas y prototipos interactivos. Instrucciones claras, variables explícitas y limitaciones honestas.",
    tags: ["open-source", "cognitive tools", "prototype"],
  },
  {
    number: "02",
    title: "Rigor sin academicismo pesado",
    description:
      "Pensamiento crítico sobre brain training, neuroplasticidad e IA en salud. Sin grandilocuencia. Sin pseudociencia.",
    tags: ["critical thinking", "evidence-based", "neuroscience"],
  },
  {
    number: "03",
    title: "Neurotech accesible",
    description:
      "Sensores, WebXR y biofeedback que un profesional puede entender, replicar y adaptar. Tecnología útil antes que espectáculo.",
    tags: ["neurotech", "webxr", "diy", "accessible"],
  },
];

export default function ValueBlocks() {
  return (
    <section className="border-b border-wire bg-surface py-14 sm:py-16">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10">
          <span className="label-tag mb-4 inline-block">propuesta de valor</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Por qué es diferente
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {blocks.map((block) => (
            <ValueCard key={block.number} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ block }: { block: ValueBlock }) {
  return (
    <div className="card group relative overflow-hidden transition-all duration-150 hover:border-muted/30">
      {/* Number row */}
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted/50 tracking-widest">
          {block.number}
        </span>
        <div className="h-px flex-1 mx-4 bg-wire group-hover:bg-muted/20 transition-colors duration-150" />
        <div className="h-1.5 w-1.5 rotate-45 bg-teal/40 group-hover:bg-teal transition-colors duration-150" />
      </div>

      <h3 className="mb-3 text-lg font-semibold leading-snug tracking-tight text-ink">
        {block.title}
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-muted">
        {block.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {block.tags.map((tag) => (
          <span key={tag} className="label-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
