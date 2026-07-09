import Reveal from "./Reveal";
import { CheckCircle2 } from "lucide-react";

const REASONS = [
  "A genuinely long-term ownership mindset",
  "Real business analysis and operational transformation experience",
  "Operating model design capability",
  "Process and systems improvement expertise",
  "A respectful, considered approach to succession",
  "A practical understanding of how businesses actually run day to day",
  "A commitment to continuity, integrity and sustainable growth",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="whyus-grid">
          <Reveal className="whyus-statement">
            <span className="eyebrow">Why Calvoria Holdings</span>
            <h2>Built for owners who want more than a cheque</h2>
            <p>
              Calvoria Holdings exists for business owners who want a buyer with commercial
              discipline and genuine operational capability. Here&apos;s what we bring to the
              table:
            </p>
          </Reveal>
          <Reveal as="div">
            <ul className="whyus-list-2col">
              {REASONS.map((r) => (
                <li key={r}>
                  <CheckCircle2 size={17} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal as="p" className="section-footnote" style={{ marginTop: 48 }}>
          We&apos;re building a group of strong, well-run businesses that can grow beyond their
          founders — without losing the values that made them successful in the first place.
        </Reveal>
      </div>
    </section>
  );
}
