import Reveal from "./Reveal";
import {
  MessageCircle,
  SearchCheck,
  Target,
  FileText,
  ClipboardCheck,
  Route,
  TrendingUp,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "A first conversation",
    desc: "A confidential, no-pressure discussion to understand the owner's goals, how the business works, and whether there's a genuine fit.",
  },
  {
    icon: SearchCheck,
    title: "Business and operating review",
    desc: "We look at both financial performance and the operating structure behind it — customers, processes, systems, people, data, risk and growth potential.",
  },
  {
    icon: Target,
    title: "Value creation assessment",
    desc: "We identify where the business is already strong and where practical changes could support growth, resilience or efficiency.",
  },
  {
    icon: FileText,
    title: "An indicative offer",
    desc: "Where there's mutual interest, we share an initial view on valuation, deal structure, and how the transition could work.",
  },
  {
    icon: ClipboardCheck,
    title: "Due diligence",
    desc: "Financial, legal, commercial and operational due diligence, carried out in a structured, professional and respectful way.",
  },
  {
    icon: Route,
    title: "Transition planning",
    desc: "We agree how the handover will actually work post-completion — the owner's involvement, staff communication, customer continuity, and operating priorities.",
  },
  {
    icon: TrendingUp,
    title: "Post-acquisition improvement",
    desc: "After completion, stability comes first. Then we move to targeted improvements that strengthen the business without disturbing what's already working.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Our Process</span>
          <h2>From first conversation to long-term stewardship</h2>
        </Reveal>

        <div className="timeline-alt">
          {STEPS.map((step, i) => (
            <Reveal
              className={`timeline-alt-item${i % 2 === 1 ? " reverse" : ""}`}
              key={step.title}
            >
              <div className="timeline-alt-content">
                <div className="timeline-step">Step {i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="timeline-alt-marker">
                <step.icon size={20} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
