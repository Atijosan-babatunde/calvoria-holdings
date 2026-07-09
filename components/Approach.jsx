import Reveal from "./Reveal";
import { Search, ShieldCheck, LayoutGrid, Settings2, TrendingUp, HeartHandshake } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Search,
    title: "Understand first, change second",
    desc: "We start by genuinely learning how the business runs today — its people, workflows, systems, customer experience, revenue flow, and where the friction is. We don't touch anything until we understand why it works.",
  },
  {
    icon: ShieldCheck,
    title: "Protect what already works",
    desc: "Every solid business has real strengths worth guarding — customer relationships, staff know-how, reputation, supplier ties, founder instincts. We protect those while fixing what's holding growth back.",
  },
  {
    icon: LayoutGrid,
    title: "Build the right operating model",
    desc: "A business only scales cleanly once its operating model is clear. We help shape how it should run across people, process, technology, data, governance and performance tracking.",
  },
  {
    icon: Settings2,
    title: "Modernise systems and processes",
    desc: "Many established businesses lean on manual work, scattered tools, spreadsheets and tribal knowledge. We find practical ways to tighten workflows, upgrade systems, and make the business easier to run.",
  },
  {
    icon: TrendingUp,
    title: "Grow with staying power",
    desc: "We're not chasing a quick flip. We build businesses that operate well, serve customers properly, treat employees fairly, and grow in a controlled, sustainable way.",
  },
  {
    icon: HeartHandshake,
    title: "Lead with care and continuity",
    desc: "Selling a business is personal, and we treat it that way. We approach succession, transition and integration with respect — the goal is always to protect the business, its people, and its legacy.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Our Approach</span>
          <h2>How we operate</h2>
        </Reveal>

        <div className="zigzag">
          {PRINCIPLES.map((p, i) => {
            const onRight = i % 2 === 1;
            const content = (
              <div className={`zigzag-content${onRight ? "" : " align-right"}`}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            );
            const spacer = <div className="zigzag-spacer" />;
            return (
              <Reveal className="zigzag-item" key={p.title}>
                {onRight ? spacer : content}
                <div className="zigzag-number">{String(i + 1).padStart(2, "0")}</div>
                {onRight ? content : spacer}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
