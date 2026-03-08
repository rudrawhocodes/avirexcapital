import SEO from "../components/SEO";

export default function DisclosuresPage() {
  return (
    <>
      <SEO
        title="Disclosures"
        url="/disclosures"
        description="Important disclosures and regulatory information for Averix Capital's financial advisory services."
      />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
            Legal
          </p>
          <h1 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
            Disclosures
          </h1>
          <div className="mt-10 space-y-6 text-sm text-grey-500 leading-[1.8]">
            <p>
              Averix Capital is a financial services firm providing outsourced CFO
              services, strategic finance advisory, and capital solutions. The
              following disclosures are provided for transparency and regulatory
              compliance.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Nature of Services
            </h2>
            <p>
              Our services are advisory in nature. We do not hold, manage, or have
              custody of client funds. All investment decisions remain the sole
              responsibility of the client.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              No Guarantee of Results
            </h2>
            <p>
              Past performance and case studies referenced are not indicative of
              future results. Financial outcomes depend on numerous factors beyond
              the scope of our advisory services.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Conflicts of Interest
            </h2>
            <p>
              Averix Capital maintains policies and procedures to identify and manage
              potential conflicts of interest. All material conflicts are disclosed
              to clients in the engagement agreement.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Regulatory
            </h2>
            <p>
              Averix Capital operates in compliance with applicable Indian laws and
              regulations. For specific regulatory inquiries, please contact us at{" "}
              <a
                href="mailto:contact@averixcapital.com"
                className="text-navy hover:text-grey-500 transition-colors no-underline"
              >
                contact@averixcapital.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
