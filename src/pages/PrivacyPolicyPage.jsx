import SEO from "../components/SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        url="/privacy-policy"
        description="Privacy Policy for Averix Capital — how we collect, use, and protect your data."
      />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
            Legal
          </p>
          <h1 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
            Privacy Policy
          </h1>
          <div className="mt-10 space-y-6 text-sm text-grey-500 leading-[1.8]">
            <p>
              Averix Capital ("we", "our", or "us") is committed to protecting the
              privacy of our clients, prospects, and website visitors. This Privacy
              Policy outlines how we collect, use, store, and protect personal
              information.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email address,
              phone number, company name, and financial data that you voluntarily
              provide to us through our website, email correspondence, or during the
              course of our engagement.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              How We Use Your Information
            </h2>
            <p>
              Personal information is used solely for the purposes of providing our
              financial advisory services, communicating with you, improving our
              services, and complying with legal obligations.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Data Protection
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. All engagements are governed by
              strict non-disclosure agreements.
            </p>
            <h2 className="text-base font-semibold text-navy pt-4">
              Contact
            </h2>
            <p>
              For questions about this Privacy Policy, contact us at{" "}
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
