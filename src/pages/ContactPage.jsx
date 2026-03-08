import SEO from "../components/SEO";
import FinalCTA from "../components/FinalCTA";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        url="/contact"
        description="Get in touch with Averix Capital. Schedule a consultation to discuss outsourced CFO services, strategic finance, and capital advisory."
      />
      <h1 className="sr-only">Contact — Averix Capital</h1>
      <div className="pt-16" />
      <FinalCTA />
    </>
  );
}
