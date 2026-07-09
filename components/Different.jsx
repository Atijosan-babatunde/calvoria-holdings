import Reveal from "./Reveal";
import { HelpCircle } from "lucide-react";

const QUESTIONS = [
  "How does the business win new customers?",
  "How does it actually deliver on its promise?",
  "Where are the operational bottlenecks hiding?",
  "Which processes are still manual or inconsistent?",
  "How dependent is the business on the founder personally?",
  "What technology could remove friction?",
  "What data is missing for confident decisions?",
  "How clear are roles, responsibilities and controls?",
  "What would it take to scale this safely?",
];

export default function Different() {
  return (
    <section id="different" className="section">
      <div className="container">
        <div className="who-we-are">
          <Reveal className="copy accordion-copy">
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>An acquirer&apos;s eye with an operator&apos;s toolkit</h2>
            <p>
              Most buyers look mainly at the financials. Financial strength matters, of course,
              but we also study the operating engine underneath it — the part that decides whether
              a good business becomes a great one. That lens lets us spot value that isn&apos;t
              obvious on a first read.
            </p>
            <p style={{ marginBottom: 0 }}>
              We&apos;re a particularly good fit for businesses that are profitable but under-built
              operationally, growing but stretched thin, or well-loved by customers yet held back
              by outdated systems and process.
            </p>
          </Reveal>

          <Reveal as="div">
            <div className="accordion-list">
              {QUESTIONS.map((q, i) => (
                <div className="accordion-row" key={q}>
                  <div className="accordion-row-text">
                    <span className="accordion-index">{String(i + 1).padStart(2, "0")}</span>
                    <span>{q}</span>
                  </div>
                  <HelpCircle size={17} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
