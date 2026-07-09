import Reveal from "./Reveal";
import {
  Workflow,
  Route,
  TrendingUp,
  ClipboardList,
  Users,
  Cpu,
  ShieldCheck,
  Gauge,
  Headset,
  BarChart3,
  Repeat,
} from "lucide-react";

const AREAS = [
  { icon: Workflow, label: "Core business processes" },
  { icon: Route, label: "Customer journeys" },
  { icon: TrendingUp, label: "Sales and revenue operations" },
  { icon: ClipboardList, label: "Management reporting" },
  { icon: Users, label: "Team roles and responsibilities" },
  { icon: Cpu, label: "Systems and technology" },
  { icon: ShieldCheck, label: "Governance and controls" },
  { icon: Gauge, label: "Operational efficiency" },
  { icon: Headset, label: "Service delivery" },
  { icon: BarChart3, label: "Data visibility" },
  { icon: Repeat, label: "Scalability and repeatability" },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="container">
        <Reveal className="capability-split" as="div">
          <div className="capability-panel">
            <span className="eyebrow">What We Do</span>
            <h2>Strengthening what&apos;s underneath the business</h2>
            <p>
              Calvoria Holdings acquires and builds on established businesses that have room to
              grow through better structure, stronger operations, and clearer direction. We focus
              on businesses that already have real demand, a trading track record, and a solid
              market position — our job is to strengthen the operating engine underneath it.
              Most established businesses don&apos;t need reinventing. They need to be understood
              properly, steadied where it counts, and given the right operating model to grow on.
            </p>
          </div>
          <div className="capability-list">
            {AREAS.map(({ icon: Icon, label }) => (
              <div className="capability-list-item" key={label}>
                <Icon size={16} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
