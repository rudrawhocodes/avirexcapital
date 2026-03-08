import { Helmet } from "react-helmet-async";

const SITE_NAME = "Averix Capital";
const BASE_URL = "https://www.averixcapital.com";
const DEFAULT_DESCRIPTION =
  "Averix Capital provides outsourced CFO services, strategic finance advisory, and capital solutions for growing companies across India.";
const DEFAULT_TITLE = "Averix Capital — Financial Clarity for Growing Companies";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  url = "",
  noIndex = false,
}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = `${BASE_URL}${url}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Geo */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Mumbai" />
    </Helmet>
  );
}
