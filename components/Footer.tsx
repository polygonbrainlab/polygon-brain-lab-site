import Image from "next/image";

export default function Footer({ lang = "es" }: { lang?: "es" | "en" }) {
  const year = new Date().getFullYear();
  const isEn = lang === "en";

  return (
    <footer className="bg-surface border-t border-wire">
      <div className="section-container py-10">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/polygon-brain-logo-premium.png"
              alt="Logo de Polygon Brain Lab"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span className="font-mono text-sm font-medium text-ink">
              Polygon Brain Lab
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Pie de página">
            {[
              { label: "Tools", href: "#tools" },
              { label: "Resources", href: "#resources" },
              { label: "Open Lab", href: "#open-lab" },
              { label: "Neuro Critique", href: "#neuro-critique" },
              { label: "GitHub", href: "https://github.com", external: true },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 divider" />

        {/* Bottom */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted/60">
            © {year} Polygon Brain Lab —{" "}
            <span className="italic">
              {isEn ? "independent digital lab" : "laboratorio digital independiente"}
            </span>
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="label-tag">experimental</span>
            <span className="label-tag">educativo</span>
            <span className="label-tag">no clínico</span>
          </div>
        </div>

        {/* Ethical micro */}
        <p className="mt-4 max-w-xl font-mono text-[10px] text-muted/50 leading-relaxed">
          {isEn
            ? "Experimental and educational tool. Does not replace professional assessment, diagnosis, or intervention. Stimulation ≠ rehabilitation. Technology ≠ evidence."
            : "Herramienta experimental y educativa. No sustituye evaluación, diagnóstico ni intervención profesional. Estimulación ≠ rehabilitación. Tecnología ≠ evidencia."}
        </p>
      </div>
    </footer>
  );
}
