import { motion } from "framer-motion";

const reasons = [
  {
    title: "Cost Efficiency",
    desc: "Senior CFO-level capability at a fraction of the cost of a full-time hire. Our retained model aligns cost with value delivered, not hours logged.",
  },
  {
    title: "Institutional Systems",
    desc: "We implement the reporting frameworks, financial controls, and governance structures typically found in much larger organisations.",
  },
  {
    title: "Founder Mindset",
    desc: "Every recommendation is made through the lens of ownership. We prioritise long-term value creation over short-term optics.",
  },
  {
    title: "Long-term Partnership",
    desc: "We do not engage in project-based work. We embed into your organisation and grow alongside you over years, not months.",
  },
];

export default function WhyAverix() {
  return (
    <section className="bg-softgrey py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
            Why Averix
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy max-w-2xl">
            The qualities that define how we work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-t border-grey-200 pt-8"
            >
              <h3 className="text-base font-semibold text-navy">{r.title}</h3>
              <p className="mt-3 text-sm text-grey-500 leading-[1.8] max-w-md">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
