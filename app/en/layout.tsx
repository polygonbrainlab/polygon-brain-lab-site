import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polygon Brain Lab — Cognitive tools with method",
  description:
    "An open digital lab of cognitive tools, practical resources, and neurotechnology experiments. For professionals, makers, and the neuro-curious. We don't sell miracles. We build tools.",
  keywords: [
    "cognitive tools",
    "neuropsychology",
    "cognitive stimulation",
    "open source",
    "neurotechnology",
    "brain lab",
    "cognitive resources",
  ],
  authors: [{ name: "Polygon Brain Lab" }],
  openGraph: {
    title: "Polygon Brain Lab",
    description: "Brain hackers. With method.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polygon Brain Lab",
    description: "Brain hackers. With method.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/en",
    languages: {
      "es": "/",
      "en": "/en",
    },
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
