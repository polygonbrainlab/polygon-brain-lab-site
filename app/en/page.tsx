import Navbar from "@/components/Navbar";
import HeroEn from "@/components/en/HeroEn";
import PositioningEn from "@/components/en/PositioningEn";
import ManifestoEn from "@/components/en/ManifestoEn";
import ValueBlocksEn from "@/components/en/ValueBlocksEn";
import SectionGridEn from "@/components/en/SectionGridEn";
import OpenLabEn from "@/components/en/OpenLabEn";
import NeuroCritiqueEn from "@/components/en/NeuroCritiqueEn";
import EthicalNoticeEn from "@/components/en/EthicalNoticeEn";
import CTAEn from "@/components/en/CTAEn";
import Footer from "@/components/Footer";

export default function HomeEn() {
  return (
    <>
      <Navbar />
      <main>
        <HeroEn />
        <PositioningEn />
        <ManifestoEn />
        <ValueBlocksEn />
        <SectionGridEn />
        <OpenLabEn />
        <NeuroCritiqueEn />
        <EthicalNoticeEn />
        <CTAEn />
      </main>
      <Footer lang="en" />
    </>
  );
}
