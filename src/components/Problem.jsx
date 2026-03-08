import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section id="firm" className="bg-white py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
              About the Firm
            </p>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
              Averix Capital was founded to address a structural gap in how
              growing companies manage finance.
            </h2>
            <div className="mt-10 space-y-6 max-w-2xl">
              <p className="text-base text-grey-500 leading-[1.8]">
                Most companies between ₹10Cr and ₹200Cr in revenue reach a stage
                where financial decisions become too consequential for ad-hoc
                management — yet a full-time CFO remains premature or prohibitively
                expensive.
              </p>
              <p className="text-base text-grey-500 leading-[1.8]">
                We provide the institutional-grade financial leadership, systems, and
                discipline these companies need — delivered as a structured, long-term
                engagement rather than a one-time project.
              </p>
              <p className="text-base text-grey-500 leading-[1.8]">
                Our approach is rooted in the conviction that disciplined finance is
                not a cost centre but a strategic advantage. Every engagement is
                designed to create lasting infrastructure, not temporary fixes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
