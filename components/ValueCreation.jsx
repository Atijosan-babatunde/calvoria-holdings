import Reveal from "./Reveal";
import { LayoutGrid, Workflow, Cpu, BarChart3, ShieldCheck, Handshake, Repeat } from "lucide-react";

const AREAS = [
  {
    icon: LayoutGrid,
    title: "Operating model design",
    desc: "We map how the business is structured and how work actually flows across teams, systems and customers then pinpoint what needs to change to support stability and growth.",
  },
  {
    icon: Workflow,
    title: "Process optimisation",
    desc: "We tighten up processes that are inefficient, manual or inconsistent, so the business runs with more clarity and control.",
  },
  {
    icon: Cpu,
    title: "Technology enablement",
    desc: "We look for where better tools, automation or systems can cut friction, improve the customer experience, and support sharper decisions.",
  },
  {
    icon: BarChart3,
    title: "Data and reporting",
    desc: "We help move the business from gut feel decisions to real visibility, through dashboards, reporting, and management information that's actually useful.",
  },
  {
    icon: ShieldCheck,
    title: "Governance and controls",
    desc: "We strengthen accountability, role clarity, risk management and operational controls across the business.",
  },
  {
    icon: Handshake,
    title: "Customer and revenue operations",
    desc: "We look at how the business wins, serves and keeps customers, then sharpen the customer journey and the commercial rhythm behind it.",
  },
  {
    icon: Repeat,
    title: "Scalability",
    desc: "We reduce the business's dependency on any one person or informal habit, making it genuinely easier to grow, hire, delegate and expand.",
  },
];

export default function ValueCreation() {
  return (
    <section id="value-creation" className="section">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">How We Create Value</span>
          <h2>We create value by strengthening the foundation</h2>
        </Reveal>

        <div className="ribbon-list">
          {AREAS.map((a, i) => (
            <Reveal className="ribbon-item" key={a.title}>
              <div className="ribbon-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="ribbon-icon">
                <a.icon size={22} />
              </div>
              <div className="ribbon-content">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
