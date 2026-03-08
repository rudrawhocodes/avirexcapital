import SEO from "../components/SEO";
import HowWeWork from "../components/HowWeWork";
import Solution from "../components/Solution";

export default function ApproachPage() {
  return (
    <>
      <SEO
        title="Our Approach"
        url="/approach"
        description="How Averix Capital engages with clients — from financial infrastructure and reporting to strategic advisory and long-term partnership."
      />
      <h1 className="sr-only">Our Approach — Averix Capital</h1>
      <div className="pt-16" />
      <Solution />
      <HowWeWork />
    </>
  );
}
