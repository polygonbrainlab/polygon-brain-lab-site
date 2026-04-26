import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polygon Brain Lab — Herramientas cognitivas con método",
  description:
    "Laboratorio abierto de herramientas cognitivas, recursos prácticos y experimentación neurotecnológica. Para profesionales, makers y neurocuriosos. No vendemos milagros. Construimos herramientas.",
  keywords: [
    "herramientas cognitivas",
    "neuropsicología",
    "estimulación cognitiva",
    "open source",
    "neurotecnología",
    "brain lab",
    "recursos cognitivos",
  ],
  authors: [{ name: "Polygon Brain Lab" }],
  openGraph: {
    title: "Polygon Brain Lab",
    description: "Hackers del cerebro. Con método.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polygon Brain Lab",
    description: "Hackers del cerebro. Con método.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
