import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "A structured assessment of your business model, financial health, organisational goals, and immediate requirements.",
  },
  {
    num: "02",
    title: "Financial Infrastructure",
    desc: "We design and implement your financial operating system — processes, controls, reporting cadence, and governance framework.",
  },
  {
    num: "03",
    title: "Reporting & Governance",
    desc: "Monthly MIS, cash-flow analysis, variance reporting, and investor-grade documentation delivered on a disciplined schedule.",
  },
  {
    num: "04",
    title: "Strategic Advisory",
    desc: "Quarterly strategy reviews, annual budgeting, capital allocation planning, and fundraise preparation as required.",
  },
  {
    num: "05",
    title: "Long-term Partnership",
    desc: "As your business scales, our engagement deepens — expanding advisory scope, capital planning, and network access.",
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" className="bg-navy py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
            Approach
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-normal leading-snug text-white max-w-2xl">
            A structured engagement from the first conversation
          </h2>
        </motion.div>

        {/* Linear timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative pl-12 md:pl-16 py-8 first:pt-0 last:pb-0"
              >
                {/* Step number circle */}
                <div className="absolute left-0 md:left-0.5 top-8 first:top-0 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center bg-navy border border-white/20 z-10">
                  <span className="text-[11px] font-medium text-white/50">{step.num}</span>
                </div>

                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-[1.8] max-w-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
