import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Firm", href: "/#firm" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Handle hash links on the homepage vs route links */
  const handleNavClick = (href) => {
    if (href.startsWith("/#")) {
      // Hash link — if already on homepage, scroll to section
      if (location.pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      // If on another page, Link will navigate to / and ScrollToTop handles hash
    }
    setMobileOpen(false);
  };

  const isActive = (href) => {
    if (href === "/#firm") return location.pathname === "/" && location.hash === "#firm";
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-grey-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — text only */}
          <Link to="/" className="no-underline">
            <span className="text-base font-semibold tracking-tight text-navy">
              Averix Capital
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-[13px] font-normal tracking-wide transition-colors duration-200 no-underline ${
                  isActive(link.href) ? "text-dark" : "text-grey-500 hover:text-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="border border-navy bg-navy px-5 py-2 text-[13px] font-medium text-white transition-all duration-200 hover:bg-navy-light no-underline"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-navy origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-5 bg-navy"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-navy origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-grey-200"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-grey-500 transition-colors hover:text-dark no-underline"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block border border-navy bg-navy px-5 py-2.5 text-center text-sm font-medium text-white no-underline"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
