interface ValueBlock {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const blocks: ValueBlock[] = [
  {
    number: "01",
    title: "Tools that do what they say",
    description:
      "Cognitive mini apps, task generators, and interactive prototypes with clear instructions, explicit variables, and honest limitations. No empty mockups. No demos that go nowhere.",
    tags: ["open-source", "cognitive tools", "prototype"],
  },
  {
    number: "02",
    title: "Rigour without academic posturing",
    description:
      "Critical thinking on brain training, cognitive stimulation, neuroplasticity, and AI in health. No grandiosity, no pseudoscience. With the same honesty we demand of our tools.",
    tags: ["critical thinking", "evidence-based", "neuroscience"],
  },
  {
    number: "03",
    title: "Accessible neurotech",
    description:
      "Sensors, WebXR, basic biofeedback, and physical interfaces that a professional can understand, replicate, and adapt. Useful technology over spectacle. Documentation over promises.",
    tags: ["neurotech", "webxr", "diy", "accessible"],
  },
  {
    number: "04",
    title: "Resources for real sessions",
    description:
      "Templates, checklists, difficulty guides, and downloadable materials designed for actual work in real contexts. For the professional who needs to solve things today, not in six months.",
    tags: ["resources", "templates", "clinical", "practical"],
  },
];

export default function ValueBlocksEn() {
  return (
    <section className="border-b border-wire bg-surface py-20 sm:py-28">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14">
          <span className="label-tag mb-4 inline-block">value proposition</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why it&apos;s different
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
