import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "CFO-as-a-Service", href: "/services" },
    { label: "Strategic Finance", href: "/services" },
    { label: "Capital Advisory", href: "/services" },
    { label: "Investment Network", href: "/services" },
  ],
  Firm: [
    { label: "About", href: "/#firm" },
    { label: "Approach", href: "/approach" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclosures", href: "/disclosures" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="no-underline">
                <span className="text-base font-medium text-white tracking-tight">
                  Averix Capital
                </span>
              </Link>
              <p className="mt-4 text-xs text-white/35 leading-[1.8] max-w-xs">
                A financial services firm providing outsourced CFO services,
                strategic finance advisory, and capital solutions for growing
                companies across India.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <a
                  href="#"
                  className="text-xs text-white/35 transition-colors hover:text-white/70 no-underline"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@averixcapital.com"
                  className="text-xs text-white/35 transition-colors hover:text-white/70 no-underline"
                >
                  contact@averixcapital.com
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs uppercase tracking-[0.15em] text-white/50 mb-5">
                  {title}
                </h4>
                <ul className="space-y-3 list-none p-0 m-0">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-xs text-white/35 transition-colors hover:text-white/70 no-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Averix Capital. All rights reserved.
          </p>
          <p className="text-[11px] text-white/15">
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
