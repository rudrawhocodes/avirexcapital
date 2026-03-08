import SEO from "../components/SEO";
import Services from "../components/Services";
import WhyAverix from "../components/WhyAverix";
import IdealClients from "../components/IdealClients";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        url="/services"
        description="CFO-as-a-Service, strategic finance advisory, capital advisory, and private investment network — financial leadership for growing Indian companies."
      />
      <h1 className="sr-only">Services — Averix Capital</h1>
      <div className="pt-16" />
      <Services />
      <WhyAverix />
      <IdealClients />
    </>
  );
}
