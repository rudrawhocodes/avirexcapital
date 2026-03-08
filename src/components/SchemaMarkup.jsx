import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.averixcapital.com";

/**
 * JSON-LD structured data for Organization, FinancialService, and WebSite schemas.
 * Injected once at the app root level.
 */
export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Averix Capital",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    description:
      "Averix Capital provides outsourced CFO services, strategic finance advisory, and capital solutions for growing companies across India.",
    foundingDate: "2025",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@averixcapital.com",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Averix Capital",
    url: BASE_URL,
    description:
      "CFO-as-a-Service, strategic finance advisory, and capital solutions for mid-market companies in India.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "CFO-as-a-Service",
      "Strategic Finance Advisory",
      "Capital Advisory",
      "Private Investment Network",
    ],
    provider: {
      "@type": "Organization",
      name: "Averix Capital",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Averix Capital",
    url: BASE_URL,
    description:
      "Averix Capital — Financial clarity for growing companies across India.",
    publisher: {
      "@type": "Organization",
      name: "Averix Capital",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

