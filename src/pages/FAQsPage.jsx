import SEO from "../components/SEO";
import FAQ from "../components/FAQ";

export default function FAQsPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        url="/faqs"
        description="Common questions about Averix Capital's CFO-as-a-Service, pricing, engagement process, data confidentiality, and fundraising support."
      />
      <h1 className="sr-only">Frequently Asked Questions — Averix Capital</h1>
      <div className="pt-16" />
      <FAQ />
    </>
  );
}
