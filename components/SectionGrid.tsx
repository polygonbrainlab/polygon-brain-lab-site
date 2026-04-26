interface SectionItem {
  id: string;
  label: string;
  title: string;
  description: string;
  status: "disponible" | "próximamente" | "beta" | "wip" | "en proceso";
  icon: React.ReactNode;
  href?: string;
}

const sections: SectionItem[] = [
  {
    id: "tools",
    label: "Tools",
    title: "Herramientas cognitivas",
    description:
      "Mini apps para explorar atención, memoria, funciones ejecutivas, lenguaje y velocidad de procesamiento. Instrucciones claras, variables explícitas y limitaciones honestas.",
    status: "en proceso",
    icon: <ToolIcon />,
  },
  {
    id: "resources",
    label: "Resources",
    title: "Recursos prácticos",
    description:
      "Materiales descargables, plantillas de diseño de tareas, checklists y guías para graduación de dificultad. Pensados para trabajo real en sesión.",
    status: "en proceso",
    icon: <ResourceIcon />,
  },
  {
    id: "open-lab",
    label: "Open Lab",
    title: "Código y documentación abiertos",
    description:
      "Repositorios, documentación técnica, roadmap público y prototipos reutilizables. Open-source como motor de confianza, no como marketing.",
    status: "beta",
    icon: <LabIcon />,
    href: "https://github.com",
  },
  {
    id: "neuro-critique",
    label: "Neuro Critique",
    title: "Pensamiento crítico sobre cognición",
    description:
      "Artículos breves y rigurosos sobre límites del brain training, transferencia funcional, gamificación, IA en salud y diseño responsable de herramientas.",
    status: "en proceso",
    icon: <CritiqueIcon />,
  },
];

export default function SectionGrid() {
  return (
    <section id="tools" className="border-b border-wire bg-canvas py-20 sm:py-28">
      <div className="section-container">
        {/* Header */}
        <div className="mb-14">
          <span className="label-tag mb-4 inline-block">qué encontrarás</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            El laboratorio
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted">
            Cuatro áreas de trabajo en construcción progresiva.
            Cada sección está pensada para resolver una necesidad concreta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2" id="resources">
          {sections.map((section) => (
            <SectionCard key={section.id} item={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionCard({ item }: { item: SectionItem }) {
  const isAccent = item.status === "disponible" || item.status === "beta";

  if (item.href) {
    return (
      <a
        id={item.id}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="card group flex flex-col gap-4 transition-all duration-150 hover:border-muted/30 hover:shadow-sm no-underline"
      >
        <SectionCardInner item={item} isAccent={isAccent} />
      </a>
    );
  }

  return (
    <div
      id={item.id}
      className="card group flex flex-col gap-4 transition-all duration-150 hover:border-muted/30 hover:shadow-sm"
    >
      <SectionCardInner item={item} isAccent={isAccent} />
    </div>
  );
}

function SectionCardInner({
  item,
  isAccent,
}: {
  item: SectionItem;
  isAccent: boolean;
}) {
  return (
    <>
      {/* Icon + status */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-wire bg-sheet text-muted transition-colors duration-150 group-hover:border-teal/30 group-hover:text-teal">
          {item.icon}
        </div>
        {isAccent ? (
          <span className="label-tag-accent">{item.status}</span>
        ) : (
          <span className="label-tag">{item.status}</span>
        )}
      </div>

      {/* Content */}
      <div>
        <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted/60">
          {item.label}
        </div>
        <h3 className="text-base font-semibold leading-snug tracking-tight text-ink">
          {item.title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        {item.description}
      </p>

      {/* Arrow if linkable */}
      {item.href && (
        <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-teal">
          Ver en GitHub
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      )}
    </>
  );
}

function ToolIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function ResourceIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function LabIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}

function CritiqueIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}
