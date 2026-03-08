import { motion } from "framer-motion";

export default function TrustBar() {
  return (
    <section className="bg-white py-10 border-b border-grey-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0"
        >
          {["Long-term partnerships", "Institutional discipline", "Confidential advisory"].map((item, i) => (
            <div key={item} className="flex items-center gap-6">
              {i > 0 && <span className="hidden sm:block h-4 w-px bg-grey-200" />}
              <span className="text-xs uppercase tracking-[0.2em] text-grey-400 font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
