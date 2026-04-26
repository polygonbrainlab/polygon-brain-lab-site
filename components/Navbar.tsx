"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Tools", href: "#tools" },
  { label: "Resources", href: "#resources" },
  { label: "Open Lab", href: "#open-lab" },
  { label: "Neuro Critique", href: "#neuro-critique" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");
  const langHref = isEn ? "/" : "/en";
  const langLabel = isEn ? "ES" : "EN";

  return (
    <header className="sticky top-0 z-50 border-b border-wire bg-canvas/95 backdrop-blur-sm">
      <div className="section-container">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Polygon Brain Lab — inicio"
          >
            <span className="relative flex h-9 w-9 items-center justify-center transition-transform duration-150 group-hover:rotate-6">
              <Image
                src="/polygon-brain-logo-premium.png"
                alt="Logo de Polygon Brain Lab"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
              />
            </span>
            <span className="font-mono text-sm font-medium tracking-tight text-ink">
              Polygon Brain Lab
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors duration-150 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={langHref}
              className="font-mono text-xs text-muted/70 transition-colors hover:text-ink px-2"
              aria-label={isEn ? "Versión en español" : "English version"}
            >
              {langLabel}
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-3.5"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a href="#tools" className="btn-primary text-xs py-2 px-3.5">
              {isEn ? "Explore tools" : "Explorar herramientas"}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-muted hover:text-ink md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="border-t border-wire py-4 md:hidden"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-sheet hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-wire pt-3">
                <Link
                  href={langHref}
                  className="text-center py-2 font-mono text-xs text-muted/70 transition-colors hover:text-ink"
                >
                  {isEn ? "← ES" : "EN →"}
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a href="#tools" className="btn-primary justify-center">
                  {isEn ? "Explore tools" : "Explorar herramientas"}
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
