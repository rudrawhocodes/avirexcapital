import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-navy py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
        >
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-white">
              Begin a conversation
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <p className="text-sm text-white/50 leading-[1.8] max-w-lg">
              We welcome the opportunity to understand your business and discuss
              how Averix Capital can support your financial objectives. Schedule
              a consultation at your convenience — no obligation.
            </p>
            <div className="mt-10">
              <a
                href="mailto:contact@averixcapital.com"
                className="inline-block bg-white text-navy px-8 py-3.5 text-sm font-medium transition-colors hover:bg-grey-100 no-underline"
              >
                Book a Consultation
              </a>
            </div>
            <p className="mt-6 text-xs text-white/30">
              contact@averixcapital.com &nbsp;·&nbsp; Typically respond within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
