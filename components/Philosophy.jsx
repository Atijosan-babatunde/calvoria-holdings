import Reveal from "./Reveal";
import { Landmark, LayoutGrid, Anchor, TrendingUp, Infinity as InfinityIcon } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Landmark,
    title: "Stewardship",
    desc: "We see ourselves as caretakers of the businesses we acquire, not just owners.",
  },
  {
    icon: LayoutGrid,
    title: "Structure",
    desc: "Clarity across people, process, systems and governance is what makes a business stronger.",
  },
  {
    icon: Anchor,
    title: "Continuity",
    desc: "Stability for employees, customers and suppliers comes first during any transition.",
  },
  {
    icon: TrendingUp,
    title: "Improvement",
    desc: "We look for practical, measurable ways to make the business run better.",
  },
  {
    icon: InfinityIcon,
    title: "Long-term value",
    desc: "We're building for sustainable growth, not a short-term win.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        <Reveal as="div">
          <span className="eyebrow" style={{ display: "block", textAlign: "center" }}>
            Our Philosophy
          </span>
          <p className="philosophy-quote">
            &ldquo;Acquired with care. Run with discipline. Grown on purpose.&rdquo;
          </p>
        </Reveal>

        <Reveal as="div" className="principle-strip">
          {PRINCIPLES.map((p) => (
            <div className="principle-strip-item" key={p.title}>
              <p.icon size={22} className="icon" />
              <div>
                <strong>{p.title}</strong>
                <span className="desc">{p.desc}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
