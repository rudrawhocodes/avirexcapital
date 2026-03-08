import SEO from "../components/SEO";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Services from "../components/Services";
import WhyAverix from "../components/WhyAverix";
import IdealClients from "../components/IdealClients";
import HowWeWork from "../components/HowWeWork";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SEO
        url="/"
        description="Averix Capital provides outsourced CFO services, strategic finance advisory, and capital solutions for growing companies across India."
      />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Services />
      <WhyAverix />
      <IdealClients />
      <HowWeWork />
      <FAQ />
      <FinalCTA />
    </>
  );
}
