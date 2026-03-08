import SEO from "../components/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        url="/terms-of-service"
        description="Terms of Service for Averix Capital — the terms and conditions governing use of our website and services."
      />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
            Legal
          </p>
          <h1 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
            Terms of Service
          </h1>
          <div className="mt-10 space-y-6 text-sm text-grey-500 leading-[1.8]">
            <p>
              These Terms of Service govern your use of the Averix Capital website
              and the services we provide. By accessing our website or engaging our
              services, you agree to be bound by these terms.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Services
            </h2>
            <p>
              Averix Capital provides financial advisory services including
              CFO-as-a-Service, strategic finance advisory, and capital advisory.
              The scope, terms, and fees of any specific engagement are governed by a
              separate engagement agreement.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Intellectual Property
            </h2>
            <p>
              All content, materials, and intellectual property on this website are
              the property of Averix Capital and are protected by applicable
              intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our prior written consent.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Limitation of Liability
            </h2>
            <p>
              Averix Capital provides information on this website for general
              informational purposes only. Nothing on this website constitutes
              financial, legal, or investment advice. We shall not be liable for any
              decisions made based on the information provided herein.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Contact
            </h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
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
