import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SchemaMarkup from "./components/SchemaMarkup";

/* Lazy-loaded pages for performance */
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ApproachPage = lazy(() => import("./pages/ApproachPage"));
const FAQsPage = lazy(() => import("./pages/FAQsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const DisclosuresPage = lazy(() => import("./pages/DisclosuresPage"));

function App() {
  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <ScrollToTop />
      <Navbar />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-white">
            <span className="text-sm text-grey-400">Loading…</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/disclosures" element={<DisclosuresPage />} />
          {/* Fallback — send unknown routes to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
