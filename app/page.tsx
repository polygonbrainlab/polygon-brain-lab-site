import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Manifesto from "@/components/Manifesto";
import ValueBlocks from "@/components/ValueBlocks";
import SectionGrid from "@/components/SectionGrid";
import OpenLab from "@/components/OpenLab";
import NeuroCritique from "@/components/NeuroCritique";
import EthicalNotice from "@/components/EthicalNotice";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Manifesto />
        <ValueBlocks />
        <SectionGrid />
        <OpenLab />
        <NeuroCritique />
        <EthicalNotice />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
