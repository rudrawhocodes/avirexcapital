import { motion } from "framer-motion";

const services = [
  {
    title: "CFO-as-a-Service",
    desc: "A dedicated, senior-level CFO function embedded into your operations on a retained basis. We take ownership of your financial strategy, reporting, and controls — delivering the leadership typically reserved for large enterprises.",
    items: [
      "Financial strategy and planning",
      "Budgeting and forecasting",
      "Cash-flow management and working capital optimisation",
      "Investor reporting and management information systems",
    ],
  },
  {
    title: "Strategic Finance & Capital Advisory",
    desc: "Structured advisory for companies preparing for growth, fundraising, or strategic transactions. We build the financial narrative, models, and documentation that institutional investors and stakeholders expect.",
    items: [
      "Financial modelling and scenario analysis",
      "Fundraising preparation and investor materials",
      "Expansion and capital allocation planning",
      "Due diligence readiness",
    ],
  },
  {
    title: "Private Investment Network",
    label: "Launching",
    desc: "A curated, founder-led network connecting high-growth companies with qualified high-net-worth individuals and family offices. Every opportunity undergoes independent financial evaluation before introduction.",
    items: [
      "Founder and HNI introductions",
      "Independent deal evaluation",
      "Financial due diligence",
      "Structured deal flow management",
    ],
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
            Services
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy max-w-2xl">
            Three areas of practice, structured around your growth stage
          </h2>
        </motion.div>

        <div className="divide-y divide-grey-200">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="py-12 md:py-16 first:pt-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Title column */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-navy">
                      {s.title}
                    </h3>
                    {s.label && (
                      <span className="text-[11px] uppercase tracking-wider text-grey-400 border border-grey-200 px-2 py-0.5">
                        {s.label}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description column */}
                <div className="lg:col-span-8">
                  <p className="text-base text-grey-500 leading-[1.8] max-w-xl">
                    {s.desc}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <span className="h-1 w-1 rounded-full bg-grey-300 shrink-0 mt-2" />
                        <span className="text-sm text-grey-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>₹
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 