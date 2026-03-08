import { motion } from "framer-motion";

const clients = [
  {
    title: "Manufacturing",
    desc: "Companies scaling operations, managing working capital cycles, and planning capacity expansion.",
  },
  {
    title: "Technology",
    desc: "SaaS, IT services, and technology-enabled businesses preparing for institutional growth or fundraising.",
  },
  {
    title: "Consumer Brands",
    desc: "Direct-to-consumer businesses navigating rapid growth, channel economics, and inventory financing.",
  },
  {
    title: "Family Businesses",
    desc: "Established enterprises professionalising financial governance, planning succession, or entering new markets.",
  },
];

export default function IdealClients() {
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
              Client Focus
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-navy">
              Industries we serve
            </h2>
            <p className="mt-5 text-sm text-grey-500 leading-[1.8]">
              We work predominantly with companies in the ₹10Cr–₹200Cr revenue
              range across four core sectors.
            </p>
          </motion.div>

          {/* Right grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {clients.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border-t border-grey-200 pt-6"
                >
                  <h3 className="text-base font-semibold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-grey-500 leading-[1.8]">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
