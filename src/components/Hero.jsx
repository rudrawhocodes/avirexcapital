import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy pt-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.15] tracking-tight text-white"
          >
            Financial Clarity for
            <br />
            Growing Companies
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 text-base md:text-lg text-white/50 leading-relaxed max-w-xl"
          >
            Averix Capital provides outsourced CFO services, strategic finance
            advisory, and capital solutions for companies navigating growth.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-block border border-white/20 bg-white px-7 py-3 text-sm font-medium text-navy tracking-wide transition-all duration-200 hover:bg-softgrey no-underline"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Thin bottom rule */}
      <div className="border-b border-white/10" />
    </section>
  );
}
