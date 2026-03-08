import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is CFO-as-a-Service?",
    a: "CFO-as-a-Service provides your business with senior-level financial leadership — including strategy, budgeting, cash-flow management, and investor reporting — without the cost of hiring a full-time CFO. We work as a retained extension of your team.",
  },
  {
    q: "How is this different from hiring a full-time CFO?",
    a: "A full-time CFO costs ₹40L–₹80L+ annually, plus benefits and equity expectations. With Averix Capital, you access the same calibre of expertise at a fraction of the cost, supported by institutional frameworks and a broader advisory team.",
  },
  {
    q: "What size companies do you typically work with?",
    a: "We work primarily with companies in the ₹10Cr–₹200Cr revenue range across manufacturing, technology, consumer brands, and family businesses. Our engagement model is designed for companies at a growth inflection point.",
  },
  {
    q: "How is your pricing structured?",
    a: "All engagements are structured as monthly retainers, scoped to your requirements. Pricing reflects the depth of services — from core financial operations to full strategic advisory. We provide a detailed proposal following our initial assessment.",
  },
  {
    q: "How do you ensure data confidentiality?",
    a: "Confidentiality is foundational to our practice. All engagements are governed by strict non-disclosure agreements. We employ secure data protocols, and access is restricted to authorised team members only.",
  },
  {
    q: "How quickly can an engagement begin?",
    a: "We typically commence the Discovery phase within one to two weeks of agreement. The initial financial infrastructure — reporting systems, processes, and controls — is established within the first 30 days.",
  },
  {
    q: "Do you assist with fundraising?",
    a: "Yes. Our Strategic Finance and Capital Advisory practice encompasses financial modelling, investor materials, data room preparation, and due diligence readiness to support fundraising objectives.",
  },
  {
    q: "Is the Private Investment Network currently active?",
    a: "The Private Investment Network is in an early development phase. We are building a curated network of high-net-worth individuals and family offices. Interested founders and investors may contact us for early access.",
  },
];

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-grey-200">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="text-sm md:text-base font-medium text-navy pr-8">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-grey-400"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-grey-500 leading-[1.8] max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="bg-softgrey py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
              FAQs
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-sm text-grey-500 leading-[1.8]">
              For matters not addressed below, we welcome a direct conversation.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-grey-500 transition-colors no-underline"
            >
              Contact us
              <span className="text-grey-400">→</span>
            </Link>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  toggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
