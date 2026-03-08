import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Structured financial operations",
    desc: "We establish the processes, controls, and reporting cadence that form the foundation of sound financial management.",
  },
  {
    num: "02",
    title: "Strategic capital allocation",
    desc: "Every rupee deployed is evaluated against long-term value creation, not short-term convenience.",
  },
  {
    num: "03",
    title: "Institutional-grade reporting",
    desc: "Monthly MIS, cash flow analysis, and investor-ready reporting delivered with the rigour expected of a publicly governed entity.",
  },
  {
    num: "04",
    title: "Confidential advisory",
    desc: "Sensitive financial matters handled with the discretion and professionalism of a trusted fiduciary partner.",
  },
];

export default function Solution() {
  return (
    <section className="bg-softgrey py-32 md:py-40">
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
              Our Principles
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
              How we approach every engagement
            </h2>
          </motion.div>

          {/* Right content — structured list */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-grey-200">
              {principles.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-medium text-grey-300 mt-1 shrink-0 w-6">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                      <p className="mt-2 text-sm text-grey-500 leading-[1.8] max-w-lg">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
